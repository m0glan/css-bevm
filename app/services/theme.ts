import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

type Theme = 'default' | 'dark'

export default class ThemeService extends Service {
  @tracked theme: Theme = 'dark';

  get cssVariant() { return `theme theme--${this.theme}`; }
}