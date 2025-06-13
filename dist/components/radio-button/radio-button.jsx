"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const hint_text_1 = __importDefault(require("../../common/hint-text"));
const Radio = ({ checked, hintText, id, label, name, onBlur, onChange, small }) => {
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
    return (<div className={[
            'ds_radio',
            small && 'ds_radio--small'
        ].join(' ')}>
            <input aria-describedby={hintText ? hintTextId : undefined} className="ds_radio__input" defaultChecked={!!checked} id={id} name={name} onBlur={handleBlur} onChange={handleChange} type="radio"/>
            <label className="ds_radio__label" htmlFor={id}>{label}</label>
            {hintText && <hint_text_1.default id={hintTextId} text={hintText}/>}
        </div>);
};
exports.Radio = Radio;
const RadioGroup = ({ inline, items, name, small, ...props }) => {
    return (<div className={[
            'ds_radios',
            'ds_field-group',
            inline && 'ds_field-group--inline'
        ].join(' ')} {...props}>

            {items && items.map((item, index) => (<exports.Radio checked={item.checked} hintText={item.hintText} id={item.id} key={'radio' + index} label={item.label} name={name} onBlur={item.onBlur} onChange={item.onChange} small={small || item.small}/>))}
        </div>);
};
exports.Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';
exports.default = RadioGroup;
