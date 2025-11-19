"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ButtonGroup = ({ children, className, isInline, ...props }) => {
    return (<div className={[
            "ds_button-group",
            isInline ? "ds_button-group--inline" : undefined,
            className
        ].join(' ')} {...props}>
            {children}
        </div>);
};
ButtonGroup.displayName = 'ButtonGroup';
exports.default = ButtonGroup;
