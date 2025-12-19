import { ErrorMessageProps } from "./types";

const ErrorMessage = ({
    children,
    className,
    id,
    ...props
}: ErrorMessageProps) => {
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
