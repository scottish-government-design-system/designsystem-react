const ErrorMessage = ({
    children,
    className,
    id,
    text,
    ...props
}: SGDS.Component.ErrorMessage) => {
    return (
        <p
            className={[
                'ds_question__error-message',
                className
            ].join(' ')}
            id={id}
            {...props}
        >
            {text}
            {children}
        </p>
    );
};

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
