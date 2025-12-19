import { CheckboxRadioBase } from "../../shared-types";

export interface RadioGroupProps extends React.AllHTMLAttributes<HTMLElement> {
    isInline?: boolean;
    name?: string;
    isSmall?: boolean;
}

export interface RadioButtonProps extends CheckboxRadioBase<HTMLInputElement> {
    id: string;
    name?: string;
}
