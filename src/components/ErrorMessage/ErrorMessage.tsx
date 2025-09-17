const ErrorMessage = ({
    children,
    className,
    id,
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
            {children}
        </p>
    );
};

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
