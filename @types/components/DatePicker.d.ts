declare namespace SGDS.Component {
    interface DatePicker extends React.AllHTMLAttributes<HTMLElement> {
        dateSelectCallback?: Function;
        disabledDates?: string,
        hasError?: boolean,
        errorMessage?: string,
        id: string,
        hintText?: string,
        iconPath?: string,
        label: string,
        maxDate?: string,
        minDate?: string,
        isMultiple?: boolean,
        name?: string,
        onBlur?: React.EventHandler<any>,
        onChange?: React.EventHandler<any>,
        value?: string,
        width?: SGDS.InputWidth
    }
}
