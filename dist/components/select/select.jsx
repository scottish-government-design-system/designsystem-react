"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_message_1 = __importDefault(require("../error-message/error-message"));
const hint_text_1 = __importDefault(require("../../common/hint-text"));
const Option = function ({ text, value }) {
    return (<option value={value}>{text}</option>);
};
const Select = function ({ defaultValue, error, errorMessage, hintText, id, label, name, onBlur, onChange, options, placeholder, width, ...props }) {
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
            {hintText && <hint_text_1.default id={hintTextId} text={hintText}/>}
            {errorMessage && <error_message_1.default id={errorMessageId} text={errorMessage}/>}
            <div className={[
            "ds_select-wrapper",
            error && 'ds_input--error',
            width && `ds_input--${width}`,
        ].join(' ')} {...props}>
                <select aria-describedby={describedbys.join(' ')} className="ds_select" defaultValue={defaultValue} id={id} name={name || id} onBlur={handleBlur} onChange={handleChange}>
                    <option value="">{placeholder}</option>
                    {options && options.map((option, index) => (<Option value={option.value} text={option.text} key={`option-${index}`}/>))}
                </select>
                <span className="ds_select-arrow" aria-hidden="true"></span>
            </div>
        </>);
};
Select.displayName = 'Select';
exports.default = Select;
