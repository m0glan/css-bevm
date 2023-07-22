import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { Color, toCssModifier as colorToCssModifier } from 'css-bevm/styles/colors';

interface ToggleSwitchArgs {
  color: Color
  initialState?: boolean;
  onStateChanged: (isOn: boolean) => void
}

export default class ToggleSwitch extends Component<ToggleSwitchArgs> {
  args: ToggleSwitchArgs;

  @tracked declare private _isOn: boolean;
  get isOn() { return this._isOn; }

  private get _color() { return colorToCssModifier(this.args.color); }

  get toggleSwitchSliderStyle() {
    return `toggle-switch__slider ${this._color}`;
  }

  constructor(owner: unknown, args: ToggleSwitchArgs) {
    super(owner, args);
    this.args = args;

    if (this.args.initialState == null) {
      this._isOn = false;
    } else {
      this._isOn = this.args.initialState;
    }
  }

  @action toggle() {
    this._isOn = !this._isOn;

    if (this.args.onStateChanged != null) {
      this.args.onStateChanged(this.isOn);
    }
  }
}