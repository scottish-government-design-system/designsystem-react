export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type IconName = 'ArrowUpward' | 'CalendarToday' | 'Cancel' | 'CheckCircle' | 'ChevronLeft' | 'ChevronRight' | 'Close' | 'Description' | 'DoubleChevronLeft' | 'DoubleChevronRight' | 'Error' | 'ExpandLess' | 'ExpandMore' | 'List' | 'Menu' | 'PriorityHigh' | 'Search';
export type DocumentIconName = 'Audio' | 'Csv' | 'Excel' | 'File' | 'Generic' | 'Geodata' | 'Ical' | 'Ico' | 'Image' | 'Odf' | 'Odg' | 'Odp' | 'Ods' | 'Odt' | 'Pdf' | 'Ppt' | 'Rtf' | 'Text' | 'Video' | 'Word' | 'Xml' | 'Zip';
export type InputWidth = 'fixed-20' | 'fixed-10' | 'fixed-5' | 'fixed-4' | 'fixed-3' | 'fixed-2' | 'fluid-three-quarters' | 'fluid-two-thirds' | 'fluid-half' | 'fluid-one-third' | 'fluid-one-quarter';
export type TagColour = 'grey' | 'green' | 'teal' | 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow';
export type TextInputType = 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';

export type LinkComponentProps = {
    'aria-label'?: React.AriaAttributes['aria-label'];
    'aria-current'?: React.AriaAttributes['aria-current'];
    'aria-describedby'?: React.AriaAttributes['aria-describedby'];
    children?: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: React.EventHandler<React.MouseEvent>;
}

export type LinkComponent = (linkComponent: LinkComponentProps) => React.ReactNode;

export interface CheckboxRadioBase<T> extends React.InputHTMLAttributes<T> {
    hintText?: string;
    label: string;
    onBlur?: React.FocusEventHandler<T>;
    onChange?: React.ChangeEventHandler<T>;
    isSmall?: boolean;
}

export interface FormFieldBase<T> extends React.AllHTMLAttributes <T> {
    errorMessage?: string;
    hasError?: boolean;
    hintText?: string;
    label: string;
    onBlur?: React.FocusEventHandler<T>;
    onChange?: React.ChangeEventHandler<T>;
}

export interface TextInputBase<T> extends FormFieldBase<T> {
    countThreshold?: number;
    maxlength?: number;
}
