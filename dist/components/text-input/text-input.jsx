"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-ignore
const character_count_1 = __importDefault(require("@scottish-government/design-system/src/forms/character-count/character-count"));
const button_1 = __importDefault(require("../button/button"));
const conditional_wrapper_1 = __importDefault(require("../../common/conditional-wrapper"));
const error_message_1 = __importDefault(require("../error-message/error-message"));
const hint_text_1 = __importDefault(require("../../common/hint-text"));
const TextInput = ({ buttonIcon, buttonText, children, className, countThreshold, width, currency, currencySymbol, error, errorMessage, hasButton = false, hintText, id, label, maxlength, name, onBlur, onChange, placeholder, type = 'text', value, ...props }) => {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = (0, react_1.useRef)(null);
    const inputWrapperClasses = `${hasButton ? 'ds_input__wrapper  ds_input__wrapper--has-icon' : ''} ${currency ? 'ds_currency-wrapper' : ''}`;
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
            <conditional_wrapper_1.default condition={hasButton || typeof currency !== 'undefined' && currency} wrapper={(children) => <div className={inputWrapperClasses} data-symbol={currencySymbol}>{children}</div>}>
                <input aria-describedby={describedbys.join(' ')} className={[
            'ds_input',
            className,
            error ? 'ds_input--error' : '',
            width ? `ds_input--${width}` : '',
        ].join(' ')} defaultValue={value} id={id} maxLength={maxlength} name={name || id} onBlur={handleBlur} onChange={handleChange} placeholder={placeholder} type={type} {...props}/>
                {hasButton && (buttonText || buttonIcon) && <button_1.default iconOnly icon={buttonIcon}>{buttonText}</button_1.default>}
            </conditional_wrapper_1.default>
        </conditional_wrapper_1.default>);
};
TextInput.displayName = 'TextInput';
exports.default = TextInput;
