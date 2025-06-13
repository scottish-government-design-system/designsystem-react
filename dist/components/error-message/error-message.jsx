"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessage = ({ children, id, text, ...props }) => {
    return (<p className={[
            'ds_question__error-message',
        ].join(' ')} dangerouslySetInnerHTML={text ? { __html: text } : undefined} id={id} {...props}>
            {!text ? children : null}
        </p>);
};
ErrorMessage.displayName = 'ErrorMessage';
exports.default = ErrorMessage;
