"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessage = ({ children, className, id, ...props }) => {
    return (<p className={[
            'ds_question__error-message',
            className
        ].join(' ')} id={id} {...props}>
            {children}
        </p>);
};
ErrorMessage.displayName = 'ErrorMessage';
exports.default = ErrorMessage;
