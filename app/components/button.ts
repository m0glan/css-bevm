import Component from '@glimmer/component';
import { Color, toCssModifier as colorToCssModifier } from 'css-bevm/styles/colors';
import { String } from 'css-bevm/helpers/string';
import { Exception } from 'css-bevm/helpers/exception';

type ButtonVariant = 'contained' | 'outlined';

type ButtonSize = 'medium' | 'large';

interface ButtonArgs {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: Color;
  text?: string;
}

/**
 * @param {ButtonVariant} variant - (optional)
 * @param {ButtonSize} size - (optional)
 * @param {Color} color - (optional)
 * @param {string} text - (optional) will be displayed on the button
 */
export default class Button extends Component<ButtonArgs> {
  args: ButtonArgs;

  private get _variant() {
    if (String.isBlank(this.args.variant)) {
      return 'btn--contained';
    }

    switch (this.args.variant) {
      case 'contained': return 'btn--contained';
      case 'outlined': return 'btn--outlined';
      default: Exception.throwInvalidArgument('variant', this.args.variant);
    }
  }

  private get _size() {
    if (String.isBlank(this.args.size)) {
      return '-size-medium';
    }

    switch (this.args.size) {
      case 'medium': return '-size-medium';
      case 'large': return '-size-large';
      default: Exception.throwInvalidArgument('size', this.args.size);
    }
  }

  private get _color() { return colorToCssModifier(this.args.color); }

  get style() { return `btn ${this._variant} ${this._size} ${this._color}`; }

  get text() { return this.args.text; }

  constructor(owner: unknown, args: ButtonArgs) {
    super(owner, args);
    this.args = args;
  }
}