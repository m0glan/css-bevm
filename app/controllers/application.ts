import Controller from '@ember/controller';
import { service } from '@ember/service';
import ThemeService from 'css-bevm/services/theme';

export default class Application extends Controller {
  @service('theme') declare theme: ThemeService;
}