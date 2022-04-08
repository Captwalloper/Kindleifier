import * as cheerio from 'cheerio';

export function createSiteParser(hostname) {
  switch (hostname) {
    case "freewebnovel.com":
      return new SiteParser({
        getAds: (html) => parseAds(html, {
          contentsContainerSel: 'div.txt'
        }),
        getContents: (html) => parseContents(html, {
          prevChapSel: 'a[title="Read Privious Chapter"]',
          nextChapSel: 'a[title="Read Next chapter"]',
          contentsContainerSel: 'div.txt'
        })
      });
    case "rainingtl.org":
      return new SiteParser({
        getAds: (html) => parseAds(html, {
          contentsContainerSel: 'article'
        }),
        getContents: (html) => parseContents(html, {
          prevChapSel: 'a:contains("Previous Chapter")',
          nextChapSel: 'a:contains("Next Chapter")',
          contentsContainerSel: 'article'
        })
      });
    case "www.princerevolution.org":
      return new SiteParser({
        getAds: (html) => parseAds(html, {
          contentsContainerSel: 'article'
        }),
        getContents: (html) => parseContents(html, {
          prevChapSel: 'a[rel="prev"]',
          nextChapSel: 'a[rel="next"]',
          contentsContainerSel: 'article'
        })
      });
    case "lightnovelbastion.com":
      return new SiteParser({
        getAds: (html) => parseAds(html, {
          contentsContainerSel: 'div.text-left'
        }),
        getContents: (html) => parseContents(html, {
          prevChapSel: 'a.prev_page',
          nextChapSel: 'a.next_page',
          contentsContainerSel: 'div.text-left'
        })
      });
    case "palewebserial.wordpress.com":
      return new SiteParser({
        getAds: (html) => parseAds(html, {
          contentsContainerSel: 'div.entry-content'
        }),
        getContents: (html) => parseContents(html, {
          prevChapSel: 'a:contains("Previous Chapter")',
          nextChapSel: 'a:contains("Next Chapter")',
          contentsContainerSel: 'div.entry-content'
        })
      });
    default:
      throw `${hostname} not yet handled`;
  }
}

export class SiteParser {
  /** @arg {Object} obj @arg {(html: string) => { adsPageHtml: string }} obj.getAds @arg {(html: string) => { contentsHtml: string, prevChap: string, nextChap: string }} obj.getContents */
  constructor({ getAds, getContents }) {
    this.getAds = getAds;
    this.getContents = getContents;
  }
}

/** @arg {string} html @arg {Object} selectors @arg {string} selectors.contentsContainerSel */
function parseAds(html, { contentsContainerSel }) {
  const $ = cheerio.load(html);
  $(contentsContainerSel).remove();
  const adsPageHtml = $.html();
  return { adsPageHtml };
}

/** @arg {string} html @arg {Object} selectors @arg {string} selectors.prevChapSel @arg {string} selectors.nextChapSel @arg {string} selectors.contentsContainerSel */
function parseContents(html, { prevChapSel, nextChapSel, contentsContainerSel }) {
  const $ = cheerio.load(html);
  // @ts-ignore
  let prevChap = $(prevChapSel)[0]?.attribs?.href;
  if (prevChap && !prevChap.endsWith('/')) prevChap += '/';
  // @ts-ignore
  let nextChap = $(nextChapSel)[0]?.attribs?.href;
  if (nextChap && !nextChap.endsWith('/')) nextChap += '/';
  const contentsEl = $(`${contentsContainerSel} :is(p, h1, h2, h3, h4, h5, h6)`);
  const contentsHtml = $.html(contentsEl);
  return { contentsHtml, prevChap, nextChap };
}
