"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const HintText_1 = __importDefault(require("../../common/HintText"));
const context_1 = require("../../utils/context");
const RadioButton = ({ checked, hintText, id, isSmall, label, name, onBlur, onChange }) => {
    const hintTextId = `hint-text-${id}`;
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
    isSmall = isSmall || (0, react_1.useContext)(context_1.CheckboxRadioContext).isSmall;
    name = name || (0, react_1.useContext)(context_1.CheckboxRadioContext).name;
    return (<div className={[
            'ds_radio',
            isSmall && 'ds_radio--small'
        ].join(' ')}>
            <input aria-describedby={hintText ? hintTextId : undefined} className="ds_radio__input" defaultChecked={!!checked} id={id} name={name} onBlur={handleBlur} onChange={handleChange} type="radio"/>
            <label className="ds_radio__label" htmlFor={id}>{label}</label>
            {hintText && <HintText_1.default id={hintTextId} text={hintText}/>}
        </div>);
};
RadioButton.displayName = 'RadioButton';
exports.default = RadioButton;
