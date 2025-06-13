"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-ignore
const character_count_1 = __importDefault(require("@scottish-government/design-system/src/forms/character-count/character-count"));
const conditional_wrapper_1 = __importDefault(require("../../common/conditional-wrapper"));
const error_message_1 = __importDefault(require("../error-message/error-message"));
const hint_text_1 = __importDefault(require("../../common/hint-text"));
const Textarea = ({ countThreshold, error, errorMessage, hintText, id, label, maxlength, name, onBlur, onChange, placeholder, rows = 4, value, ...props }) => {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = (0, react_1.useRef)(null);
    const describedbys = [];
    if (hintText) {
        describedbys.push(hintTextId);
    }
    ;
    if (errorMessage) {
        describedbys.push(errorMessageId);
    }
    ;
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new character_count_1.default(ref.current).init();
        }
    }, [ref]);
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
    return (<conditional_wrapper_1.default condition={typeof maxlength !== 'undefined' && maxlength > 0} wrapper={(children) => <div ref={ref} data-threshold={countThreshold} data-module="ds-character-count">{children}</div>}>
            <label className="ds_label" htmlFor={id}>{label}</label>
            {hintText && <hint_text_1.default id={hintTextId} text={hintText}/>}
            {errorMessage && <error_message_1.default id={errorMessageId} text={errorMessage}/>}

            <textarea aria-describedby={describedbys.join(' ')} className={[
            'ds_input',
            error && 'ds_input--error',
        ].join(' ')} defaultValue={value} id={id} maxLength={maxlength} name={name || id} onBlur={handleBlur} onChange={handleChange} placeholder={placeholder} rows={rows} {...props}/>

        </conditional_wrapper_1.default>);
};
Textarea.displayName = 'Textarea';
exports.default = Textarea;
