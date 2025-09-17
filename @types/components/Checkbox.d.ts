declare namespace SGDS.Component {
    namespace Checkbox {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
            isSmall?: boolean
        }
    }

    interface Checkbox extends CheckboxRadioBase<HTMLInputElement> {
        isExclusive?: boolean
    }
}
