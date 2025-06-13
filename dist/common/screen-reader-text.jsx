"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScreenReaderText = ({ children, ...props }) => {
    return (<span className="visually-hidden" {...props}>
            {children}
        </span>);
};
ScreenReaderText.displayName = 'ScreenReaderText';
exports.default = ScreenReaderText;
