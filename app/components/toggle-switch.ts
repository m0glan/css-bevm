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

  @tracked declare isOn: boolean;

  private get _color() { return colorToCssModifier(this.args.color); }

  get toggleSwitchSliderStyle() {
    return `toggle-switch__slider ${this._color}`;
  }

  constructor(owner: unknown, args: ToggleSwitchArgs) {
    super(owner, args);
    this.args = args;

    if (this.args.initialState == null) {
      this.isOn = false;
    } else {
      this.isOn = this.args.initialState;
    }
  }

  @action toggle(e: any) {
    if (this.args.onStateChanged != null) {
      this.args.onStateChanged(e.target.checked);
    }
  }
}