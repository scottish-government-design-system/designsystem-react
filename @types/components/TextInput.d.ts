declare namespace SGDS.Component {
    interface TextInput extends TextInputBase<HTMLInputElement> {
        buttonIcon?: IconName,
        buttonText?: string,
        className?: string,
        currencySymbol?: string,
        hasButton?: boolean,
        isCurrency?: boolean,
        type?: string,
        width?: InputWidth
    }
}
