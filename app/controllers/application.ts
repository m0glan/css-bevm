import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Application extends Controller {
  @tracked declare private _darkThemeEnabled;
  get darkThemeEnabled() { return this._darkThemeEnabled; }

  get theme() {
    return `theme ${this._darkThemeEnabled ? 'theme--dark' : 'theme--default' }`;
  }

  constructor() {
    super();
    this._darkThemeEnabled = true;
  }

  @action updateTheme(darkThemeEnabled: boolean) {
    this._darkThemeEnabled = darkThemeEnabled;
  }
}