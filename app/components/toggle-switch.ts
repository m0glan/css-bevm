import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface ToggleSwitchArgs {
  initialState?: boolean;
  onStateChanged: (isOn: boolean) => void
}

export default class ToggleSwitch extends Component<ToggleSwitchArgs> {
  args: ToggleSwitchArgs;

  @tracked declare isOn: boolean;

  get toggleSwitchSliderStyle() {
    return `toggle-switch__slider`;
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