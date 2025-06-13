"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InsetText = ({ children, ...props }) => {
    return (<div className="ds_inset-text" {...props}>
            <div className="ds_inset-text__text">
                {children}
            </div>
        </div>);
};
InsetText.displayName = 'InsetText';
exports.default = InsetText;
