import * as cheerio from 'cheerio';
import https from 'https';
import * as URL from 'url';
// import { promises as fs } from "fs";
import { DisplaySetting } from './userSettingsService.js';
import { createSiteParser } from './siteParser.js';

/** @arg {string} url @arg {number} pagenum @arg {DisplaySetting} setting */
export async function generateKindleHtml(url, pagenum, setting) {
  const html = await fetchHtml(url);
  if (html instanceof Error) {
    throw html.toString();
  }
  // await fs.writeFile('temp/downloaded.html', html);
  const kindleHtml = await kindleify(url, html, pagenum, setting);
  // await fs.writeFile('temp/kindleified.html', kindleHtml);
  return kindleHtml;
}

/** Naively attempt to grab html from url
 * @arg {string} url */
async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { timeout: 2000 }, (res) => {
      if (res.statusCode < 200 || res.statusCode > 299) {
        reject(new Error(`HTTP status code ${res.statusCode}`));
      }
      const body = [];
      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
    });
    request.on('error', (err) => {
      reject(err);
    });
    request.on('timeout', () => {
      request.destroy();
      reject(new Error('timed out'));
    });
  });
}

/** @arg {string} url @arg {string} html @arg {number} pagenum @arg {DisplaySetting} setting */
async function kindleify(url, html, pagenum, setting) {
  const siteParser = createSiteParser(new URL.URL(url).hostname);
  if (pagenum === 0) { // page 0 means show the ads
    const { adsPageHtml } = siteParser.getAds(html);
    return generateAdsPage(url, adsPageHtml);
  }

  const { contentsHtml, prevChap, nextChap } = siteParser.getContents(html);
  const pages = paginate(contentsHtml, setting);
  const pageContentHtml = pages[pagenum - 1];
  if (!pageContentHtml) throw `Unable to return page ${pagenum}; valid pages: 1-${pages.length - 1}`;
  return generateContentsPage(url, pageContentHtml, pagenum, pages.length, prevChap, nextChap, setting.style);
}

/** @param {string} contentsHtml @param {DisplaySetting} setting */
function paginate(contentsHtml, setting) {
  const charsPerLine = setting.maxCharsPerLine;
  const linesPerPage = setting.maxLinesPerPage;

  const $ = cheerio.load(contentsHtml, {}, false);
  const paragraphs = $("p").toArray();

  const pagedParagraphs = [{ linesLeft: linesPerPage, paras: [] }];
  for (let p of paragraphs) {
    const pText = $(p).text().trim();
    const linesNeeded = Math.ceil(pText.length / charsPerLine);
    const lastPage = pagedParagraphs[pagedParagraphs.length - 1];
    let page = lastPage;
    if (lastPage.linesLeft < linesNeeded) {
      page = { linesLeft: linesPerPage, paras: [] };
      pagedParagraphs.push(page);
    }
    page.linesLeft -= (linesNeeded + 1); //blank line
    page.paras.push(`<p> ${pText} </p>`);
  }
  const pages = pagedParagraphs.map(pp => pp.paras.join('\n'));
  // console.log(pages);
  return pages;
}

/** @arg {string} url @arg {string} adsPageHtml */
function generateAdsPage(url, adsPageHtml) {
  const continueLink = `<a href="./?url=${url}&p=1">Continue Past Ads</a>`;
  const $ = cheerio.load(adsPageHtml);
  $('base').remove();
  $('body').prepend(continueLink);
  return $.html();
}

/** @arg {string} url @arg {string} contentsHtml @arg {number} pagenum @arg {number} numPages  @arg {string} prevChap @arg {string} nextChap @arg {string} style */
function generateContentsPage(url, contentsHtml, pagenum, numPages, prevChap, nextChap, style) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <header>
      <a ${prevChap ? 'href="./?url='+prevChap : ''}">Previous Chapter</a>
      <a ${nextChap ? 'href="./?url='+nextChap : ''}">Next Chapter</a>
      &nbsp;&nbsp;&nbsp;&nbsp;${pagenum} of ${numPages}&nbsp;&nbsp;&nbsp;&nbsp;
      <a ${pagenum > 1 ? 'href="./?url='+url+'&p='+String(pagenum - 1)+'"' : ''}>Previous Page</a>
      <a ${pagenum < numPages ? 'href="./?url='+url+'&p='+String(pagenum + 1)+ '"' : ''}>Next Page</a>
    </header>
    <article style="${style}">
        ${contentsHtml}
    </article>
  </body>
</html>`.trimStart();
}
