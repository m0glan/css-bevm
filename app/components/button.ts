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
  _args: ButtonArgs;

  get _variant() {
    if (String.isBlank(this._args.variant)) {
      return 'btn--contained';
    }

    switch (this._args.variant) {
      case 'contained': return 'btn--contained';
      case 'outlined': return 'btn--outlined';
      default: Exception.throwInvalidArgument('variant', this._args.variant);
    }
  }

  get _size() {
    if (String.isBlank(this._args.size)) {
      return '-size-medium';
    }

    switch (this._args.size) {
      case 'medium': return '-size-medium';
      case 'large': return '-size-large';
      default: Exception.throwInvalidArgument('size', this._args.size);
    }
  }

  get _color() { return colorToCssModifier(this._args.color); }

  get style() { return `btn ${this._variant} ${this._size} ${this._color}`; }

  get text() { return this._args.text; }

  constructor(owner: unknown, args: ButtonArgs) {
    super(owner, args);
    this._args = args;
  }
}