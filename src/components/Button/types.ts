import { IconName } from '../../shared-types';

type ButtonStyle = 'primary' | 'secondary';
type ButtonType = 'submit' | 'reset' | 'button';
type ButtonWidth = 'fluid' | 'fixed' | 'max';

export interface ButtonProps extends React.AllHTMLAttributes<HTMLButtonElement> {
    hasLinkStyle?: boolean;
    href?: string;
    icon?: IconName;
    isIconLeft?: boolean;
    isIconOnly?: boolean;
    isSmall?: boolean;
    buttonStyle?: ButtonStyle;
    type?: ButtonType;
    width?: ButtonWidth;
}

export interface ButtonGroupProps extends React.AllHTMLAttributes<HTMLElement> {
    isInline?: boolean;
}
