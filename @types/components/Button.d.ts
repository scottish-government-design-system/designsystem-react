declare namespace SGDS.Component {
    type ButtonStyle = 'primary' | 'secondary';
    type ButtonType = 'submit' | 'reset' | 'button';
    type ButtonWidth = 'fluid' | 'fixed' | 'max';

    interface Button extends React.AllHTMLAttributes<HTMLButtonElement> {
        hasLinkStyle?: boolean,
        href?: string,
        icon?: IconName,
        isIconLeft?: boolean
        isIconOnly?: boolean,
        isSmall?: boolean,
        buttonStyle?: ButtonStyle,
        type?: ButtonType
        width?: ButtonWidth
    }
}
