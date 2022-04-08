// @ts-nocheck
import http from 'http';
import { exit } from 'process';
import * as URL from 'url';
import { networkInterfaces } from 'os';
import { UserSettingsService } from './userSettingsService.js';
import { generateKindleHtml } from './kindleify.js';

/** 
 * @typedef {{ port: number }} ParsedArgs
 * @type ParsedArgs 
 * */
const parsedArgs = ((rawArgs) => {
  const helpText = `Kindle feeder optionally takes 1 argument, which port to use.\nExample: 'node server.mjs 1337'`;
  if (['-h', 'help', '-help', '--help'].includes(rawArgs[0])) {
    console.log(helpText);
    exit(0);
  } else if (rawArgs.length > 1) {
    console.error('Too many arguments.');
    console.log(helpText);
    exit(1);
  } else {
    return { port: parseInt(rawArgs[0]) || 1337 };
  }
})(process.argv.slice(2));

const exitCode = await main(
  new UserSettingsService(new URL.URL('user-settings.json', import.meta.url)),
  parsedArgs
);
exit(exitCode);

/** @arg {UserSettingsService} userSettingsService @arg {ParsedArgs} args */
export async function main(userSettingsService, args) {
  const { settings, message: loadError } = await userSettingsService.load();
  if (loadError) {
    console.warn(`Failed to load user settings from storage: \n\t${loadError}`);
  }
  console.log(`Using settings: \n${JSON.stringify(settings, null, 2)}`);

  const server = http.createServer(async function (req, res) {
    const query = URL.parse(req.url, true).query;
    if (req.url !== '/' && !query.url) {
      res.writeHead(200);
      res.end();
      return;
    }

    const url = !!query.url ? String(query.url) : settings.defaultUrl();
    if (!url) {
      res.writeHead(404);
      res.end('No url provided in request, and no default found on server. Either specify a url or configure your user settings.');
      return;
    }
    const pagenum = !!query.p 
      ? parseInt([query.p].flat().join('')) 
      : settings.general.payingCustomer ? 0 : 1;
    console.log(`Kindleifying page ${pagenum} of ${url}`);

    try {
      const setting = userSettingsService.getSiteSetting(url);
      const html = await generateKindleHtml(url, pagenum, setting?.display || settings.general.display);
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(html);
      const { success, message } = await userSettingsService.updateBookmark(url);
      if (!success) console.error(`Failed to update bookmark: ${message}`);
    } catch (e) {
      res.writeHead(500);
      res.end(`Failed to kindleify url. ${e}`);
    }
  });

  await new Promise((resolve) => {
    const port = args.port;
    server.listen(port, '0.0.0.0', () => {
      const ipAddress = GetServerIpAddress();
      console.log(`Server is running on http://${ipAddress}:${port}`);
    });
    server.on('close', () => {
      resolve();
    });
  });
}

function GetServerIpAddress() {
  const nets = networkInterfaces();
  /** @type {{ name: string, address: string }[]} */
  const ips = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
        ips.push({ name: name, address: net.address });
      }
    }
  }
  // console.log(`Valid ips for your machine are: \n\t${ips.map(x => `${x.name}: ${x.address}`).join('\n\t')}`);
  return ips[0].address;
}