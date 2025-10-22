const ButtonGroup = ({
    children,
    className,
    isInline,
    ...props
}: SGDS.Component.ButtonGroup) => {
    return (
        <div className={[
            "ds_button-group",
            isInline ? "ds_button-group--inline" : undefined,
            className
        ].join(' ')} { ...props } >
            {children}
        </div>
    );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
