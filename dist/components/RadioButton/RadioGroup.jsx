"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const context_1 = require("../../utils/context");
const RadioGroup = ({ children, className, isInline, isSmall, name, ...props }) => {
    return (<div className={[
            'ds_radios',
            'ds_field-group',
            isInline && 'ds_field-group--inline',
            className
        ].join(' ')} {...props}>
            <context_1.CheckboxRadioContext value={{ isSmall: !!isSmall, name }}>
                {children}
            </context_1.CheckboxRadioContext>
        </div>);
};
RadioGroup.displayName = 'RadioGroup';
exports.default = RadioGroup;
