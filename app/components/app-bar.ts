import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import ThemeService from 'css-bevm/services/theme';

export default class AppBar extends Component {
  @service('theme') declare private _theme: ThemeService;

  get isDarkTheme() { return this._theme.theme === 'dark'; }

  constructor(owner: unknown, args: any) {
    super(owner, args);
  }

  @action updateTheme(darkThemeEnabled: boolean) {
    this._theme.theme = darkThemeEnabled ? 'dark' : 'default';
  }
}