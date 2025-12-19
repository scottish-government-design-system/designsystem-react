import { FormFieldBase, InputWidth } from "../../shared-types";

export interface SelectProps extends FormFieldBase<HTMLElement> {
    defaultValue?: string;
    placeholder?: string;
    width?: InputWidth;
}
