import { promises as fs } from "fs";
import * as URL from 'url';

export class UserSettingsService {
  /** @type {URL} */
  #settingsPath;
  /** @type {UserSettings} */
  #settings;

  /** @arg {URL} settingsPath */
  constructor(settingsPath) {
    this.#settingsPath = settingsPath;
    this.#settings = null;
  }

  /** Retrieve user settings from source */
  async load() {
    try {
      const contents = await fs.readFile(this.#settingsPath, "utf-8");
      const obj = JSON.parse(contents);
      obj.__proto__ = UserSettings.prototype;
      this.#settings = obj;
      this.#validate();
      return { settings: this.#settings, message: '' };
    } catch (e) {
      const defaultUserSettings = new UserSettings([], new GeneralSetting(new DisplaySetting('font-size:36px; line-height:1.5;', 70, 28), true));
      this.#settings = defaultUserSettings;
      return { settings: this.#settings, message: String(e) };
    }
  }

  /** Retrieve url's siteSetting from cache
   *  @arg {string} url */
  getSiteSetting(url) {
    const hostname = new URL.URL(url).hostname;
    return this.#settings.getSiteSetting(hostname);
  }

  /** Update and persist bookmark for url by hostname
   *  @arg {string} url */
  async updateBookmark(url) {
    const hostname = new URL.URL(url).hostname;
    this.#settings.updateBookmark(hostname, url);
    return await this.#save();
  }

  async #save() {
    const contents = JSON.stringify(this.#settings, null, 2);
    try {
      this.#validate();
      await fs.writeFile(this.#settingsPath, contents); //utf-8 encoding default
      return { success: true, message: '' };
    } catch (e) {
      return { success: false, message: String(e) };
    }
  }

  async #validate() {
    const errors = [''].filter(x => false);
    if (!this.#settings.siteSettings) errors.push('property "siteSettings" must at least be an empty array');
    if (!this.#settings.general) errors.push('property "general" must be defined');
    if (!this.#settings.general?.display) errors.push('property "general.display" must be defined');
    if (!this.#settings.general?.display?.maxCharsPerLine) 
      errors.push('property "general.display.maxCharsPerLine" must be defined');
    else if (!(this.#settings.general.display.maxCharsPerLine > 0)) 
      errors.push('property "general.display.maxCharsPerLine" must be an integer greater than 0');
    if (!this.#settings.general?.display?.maxLinesPerPage) 
      errors.push('property "general.display.maxLinesPerPage" must be defined');
    else if (!(this.#settings.general.display.maxLinesPerPage > 0))
      errors.push('property "general.display.maxLinesPerPage" must be an integer greater than 0');

    if (errors.length > 0) 
      throw new Error(errors.join('\n'));
  }
}

export class UserSettings {
  /** @arg {SiteSetting[]} siteSettings @arg {GeneralSetting} general */
  constructor(siteSettings, general) {
    this.siteSettings = siteSettings;
    this.general = general;
  }

  /** @arg {string} hostname */
  getSiteSetting(hostname) {
    return this.siteSettings.find(s => s.hostname === hostname);
  }

  /** @arg {string} hostname @arg {string} bookmarkUrl */
  updateBookmark(hostname, bookmarkUrl) {
    const setting = this.getSiteSetting(hostname);
    if (setting)
      setting.bookmark = bookmarkUrl;
    else 
      this.siteSettings.push(new SiteSetting(hostname, bookmarkUrl));
  }

  defaultUrl() {
    return this.siteSettings[0]?.bookmark;
  }
}

export class SiteSetting {
  /** @arg {string} hostname Website's hostname @arg {string} bookmark Url for where you left off @arg {DisplaySetting} displaySetting Specifications for how to display page(s) */
  constructor(hostname, bookmark, displaySetting = null) {
    this.hostname = hostname;
    this.bookmark = bookmark;
    this.display = displaySetting;
  }
}

export class DisplaySetting {
  /** @arg {string} style CSS style string @arg {number} maxCharsPerLine width; max # of chars to fit per line @arg {number} maxLinesPerPage height; max # of lines to fit per page */
  constructor(style, maxCharsPerLine, maxLinesPerPage) {
    this.style = style;
    this.maxCharsPerLine = maxCharsPerLine;
    this.maxLinesPerPage = maxLinesPerPage;
  }
}

export class GeneralSetting {
  /** @arg {DisplaySetting} displaySetting Default display settings; overridable via sitesettings @arg {boolean} payingCustomer Show ads on page 0 */
  constructor(displaySetting, payingCustomer) {
    this.display = displaySetting;
    this.payingCustomer = payingCustomer;
  }
}