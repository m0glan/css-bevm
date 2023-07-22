import { Exception } from "css-bevm/helpers/exception";
import { String } from "css-bevm/helpers/string";

export type Color = 
  | 'bg' | 'background' 
  | 'primary' 
  | 'secondary' 
  | 'error' 
  | 'primaryText'
  | 'secondaryText'
  | 'buttonText'

export function toCssModifier(color: Color | undefined) {
  if (String.isBlank(color)) {
    return '-color-primary';
  }

  switch (color) {
    case 'bg':
    case 'background': return '-color-bg';
    case 'primary': return '-color-primary';
    case 'secondary': return '-color-secondary';
    case 'error': return '-color-error';
    case 'primaryText': return '-color-primary-text';
    case 'secondaryText': return '-color-secondary-text';
    case 'buttonText': return '-color-button-text';
    default: Exception.throwInvalidArgument('color', color);
  }
}
