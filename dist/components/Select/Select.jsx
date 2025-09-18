"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorMessage_1 = __importDefault(require("../ErrorMessage/ErrorMessage"));
const HintText_1 = __importDefault(require("../../common/HintText"));
const Select = function ({ children, className, defaultValue, errorMessage, hasError, hintText, id, label, name, onBlur, onChange, placeholder, width, ...props }) {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const describedbys = [];
    if (hintText) {
        describedbys.push(hintTextId);
    }
    ;
    if (errorMessage) {
        describedbys.push(errorMessageId);
    }
    ;
    function handleBlur(event) {
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }
    function handleChange(event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }
    return (<>
            <label className="ds_label" htmlFor={id}>{label}</label>
            {hintText && <HintText_1.default id={hintTextId} text={hintText}/>}
            {errorMessage && <ErrorMessage_1.default id={errorMessageId}>{errorMessage}</ErrorMessage_1.default>}
            <div className={[
            "ds_select-wrapper",
            hasError && 'ds_input--error',
            width && `ds_input--${width}`,
            className
        ].join(' ')} {...props}>
                <select aria-describedby={describedbys.join(' ')} aria-invalid={hasError} className="ds_select" defaultValue={defaultValue} id={id} name={name || id} onBlur={handleBlur} onChange={handleChange}>
                    <option value="">{placeholder}</option>
                    {children}
                </select>
                <span className="ds_select-arrow" aria-hidden="true"></span>
            </div>
        </>);
};
Select.displayName = 'Select';
exports.default = Select;
