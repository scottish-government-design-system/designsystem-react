import { ErrorMessageProps } from "./types";
import clsx from 'clsx';

const ErrorMessage = ({
    children,
    className,
    id,
    ...props
}: ErrorMessageProps) => {
    return (
        <p
            className={clsx([
                'ds_question__error-message',
                className
            ])}
            id={id}
            {...props}
        >
            {children}
        </p>
    );
};

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
