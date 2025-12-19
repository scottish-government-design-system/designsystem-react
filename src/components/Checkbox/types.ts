import { CheckboxRadioBase } from '../../shared-types';

export interface CheckboxGroupProps extends React.AllHTMLAttributes<HTMLElement> {
    isSmall?: boolean;
}

export interface CheckboxProps extends CheckboxRadioBase<HTMLInputElement> {
    isExclusive?: boolean;
}
