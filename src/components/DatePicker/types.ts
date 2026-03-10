import { InputWidth } from "../../shared-types";

export interface DatePickerProps extends React.AllHTMLAttributes<HTMLElement> {
    dateSelectCallback?: (date: Date) => void;
    disabledDates?: string;
    hasError?: boolean;
    errorMessage?: string | React.ReactNode;
    id: string;
    hintText?: string | React.ReactNode;
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
