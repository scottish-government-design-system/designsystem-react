"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-ignore
const character_count_1 = __importDefault(require("@scottish-government/design-system/src/forms/character-count/character-count"));
const Button_1 = __importDefault(require("../Button/Button"));
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const ErrorMessage_1 = __importDefault(require("../ErrorMessage/ErrorMessage"));
const HintText_1 = __importDefault(require("../../common/HintText"));
const TextInput = ({ buttonIcon, buttonText, children, className, countThreshold, width, isCurrency, currencySymbol, errorMessage, hasButton = false, hasError, hintText, id, label, maxlength, name, onBlur, onChange, placeholder, type = 'text', value, ...props }) => {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = (0, react_1.useRef)(null);
    const inputWrapperClasses = `${hasButton ? 'ds_input__wrapper  ds_input__wrapper--has-icon' : ''} ${isCurrency ? 'ds_currency-wrapper' : ''}`;
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
    return (<ConditionalWrapper_1.default condition={typeof maxlength !== 'undefined' && maxlength > 0} wrapper={(children) => <div ref={ref} data-threshold={countThreshold} data-module="ds-character-count">{children}</div>}>
            <label className="ds_label" htmlFor={id}>{label}</label>
            {hintText && <HintText_1.default id={hintTextId} text={hintText}/>}
            {errorMessage && <ErrorMessage_1.default id={errorMessageId}>{errorMessage}</ErrorMessage_1.default>}
            <ConditionalWrapper_1.default condition={hasButton || typeof isCurrency !== 'undefined' && isCurrency} wrapper={(children) => <div className={inputWrapperClasses} data-symbol={currencySymbol}>{children}</div>}>
                <input aria-describedby={describedbys.join(' ')} aria-invalid={hasError} className={[
            'ds_input',
            className,
            hasError ? 'ds_input--error' : '',
            width ? `ds_input--${width}` : '',
        ].join(' ')} defaultValue={value} id={id} maxLength={maxlength} name={name || id} onBlur={handleBlur} onChange={handleChange} placeholder={placeholder} type={type} {...props}/>
                {hasButton && (buttonText || buttonIcon) && <Button_1.default isIconOnly icon={buttonIcon}>{buttonText}</Button_1.default>}
            </ConditionalWrapper_1.default>
        </ConditionalWrapper_1.default>);
};
TextInput.displayName = 'TextInput';
exports.default = TextInput;
