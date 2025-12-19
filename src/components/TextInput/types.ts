import { IconName, InputWidth, TextInputBase } from '../../shared-types';

export interface TextInputProps extends TextInputBase<HTMLInputElement> {
    buttonIcon?: IconName;
    buttonText?: string;
    className?: string;
    currencySymbol?: string;
    hasButton?: boolean;
    isCurrency?: boolean;
    type?: string;
    width?: InputWidth;
}
