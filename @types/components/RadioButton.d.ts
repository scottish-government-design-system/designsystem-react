declare namespace SGDS.Component {
    namespace RadioButton {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
            isInline?: boolean,
            name: string,
            isSmall?: boolean
        }
    }

    interface RadioButton extends CheckboxRadioBase<HTMLInputElement> {
        id: string,
        name: string
    }
}
