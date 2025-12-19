"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HintText = ({ children, id, ...props }) => {
    return (<p className="ds_hint-text" id={id} {...props}>
            {children}
        </p>);
};
HintText.displayName = 'HintText';
exports.default = HintText;
