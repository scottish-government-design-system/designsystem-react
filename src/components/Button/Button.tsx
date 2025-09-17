import Icon from '../../common/Icon';
import ScreenReaderText from '../../common/ScreenReaderText';
import WrapperTag from '../../common/WrapperTag';

const Button = ({
    buttonStyle,
    children,
    className,
    icon,
    hasLinkStyle,
    href,
    isIconLeft,
    isIconOnly = false,
    isSmall,
    type = 'button',
    width,
    ...props
}: SGDS.Component.Button) => {
    // determine which HTML tag to use
    let tagName = 'button';
    if (href) {
        tagName = 'a';
    }

    return (
        <WrapperTag
            tagName={tagName}
            className={[
                !hasLinkStyle ? 'ds_button' : 'ds_link',
                width && `ds_button--${width}`,
                buttonStyle && `ds_button--${buttonStyle}`,
                isSmall && 'ds_button--small',
                (icon && !isIconOnly) ? 'ds_button--has-icon' : undefined,
                isIconLeft && 'ds_button--has-icon--left',
                className
            ].join(' ')}
            href={href}
            {...(tagName === 'button' ? { type: type } : {})}
            {...props}
        >
            {isIconOnly ? <ScreenReaderText>{children}</ScreenReaderText> : children}

            {icon && <Icon icon={icon}/>}
        </WrapperTag>
    )
};

Button.displayName = 'Button';

export default Button;
