"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HintText = ({ children, id, text, ...props }) => {
    return (<p className="ds_hint-text" dangerouslySetInnerHTML={text ? { __html: text } : undefined} id={id} {...props}>
            {!text ? children : null}
        </p>);
};
HintText.displayName = 'HintText';
exports.default = HintText;
