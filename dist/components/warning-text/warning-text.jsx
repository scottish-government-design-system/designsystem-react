"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WarningText = ({ children, ...props }) => {
    return (<div className="ds_warning-text" {...props}>
            <strong className="ds_warning-text__icon" aria-hidden="true"></strong>
            <strong className="visually-hidden">Warning</strong>
            <div className="ds_warning-text__text">
                {children}
            </div>
        </div>);
};
WarningText.displayName = 'WarningText';
exports.default = WarningText;
