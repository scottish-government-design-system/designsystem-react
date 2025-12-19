import { InputWidth } from "../../shared-types";

export interface DatePickerProps extends React.AllHTMLAttributes<HTMLElement> {
    dateSelectCallback?: (date: Date) => void;
    disabledDates?: string;
    hasError?: boolean;
    errorMessage?: string;
    id: string;
    hintText?: string;
    iconPath?: string;
    label: string;
    maxDate?: string;
    minDate?: string;
    isMultiple?: boolean;
    name?: string;
    onBlur?: React.EventHandler<React.FocusEvent>;
    onChange?: React.EventHandler<React.FormEvent>;
    value?: string;
    width?: InputWidth;
}
