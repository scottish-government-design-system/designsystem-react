"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroup = exports.Checkbox = void 0;
const react_1 = require("react");
// @ts-ignore
const checkboxes_1 = __importDefault(require("@scottish-government/design-system/src/forms/checkbox/checkboxes"));
const hint_text_1 = __importDefault(require("../../common/hint-text"));
const Checkbox = ({ checked, hintText, id, exclusive, label, name, onBlur, onChange, small }) => {
    const hintTextId = `hint-text-${id}`;
    const behaviour = exclusive && 'exclusive';
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
            {exclusive && <p className="ds_checkbox-separator">or</p>}
            <div className={[
            'ds_checkbox',
            small && 'ds_checkbox--small'
        ].join(' ')}>

                <input aria-describedby={hintText ? hintTextId : undefined} className="ds_checkbox__input" data-behaviour={behaviour} defaultChecked={!!checked} id={id} name={name || id} onBlur={handleBlur} onChange={handleChange} type="checkbox"/>
                <label className="ds_checkbox__label" htmlFor={id}>{label}</label>
                {hintText && <hint_text_1.default id={hintTextId} text={hintText}/>}
            </div>
        </>);
};
exports.Checkbox = Checkbox;
/**
 * @param {Object} props - Properties for the element
 * @param {Array} items - Checkboxes
 * @param {boolean} small - Use the small display style for all checkboxes
 * @returns {JSX.Element} - The element
 */
const CheckboxGroup = ({ items, small, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new checkboxes_1.default(ref.current).init();
        }
    }, [ref]);
    return (<div className="ds_checkboxes ds_field-group" data-module="ds-checkboxes" ref={ref} {...props}>
            {items && items.map((item, index) => (<exports.Checkbox exclusive={item.exclusive} checked={item.checked} hintText={item.hintText} id={item.id} key={'checkbox' + index} label={item.label} onBlur={item.onBlur} onChange={item.onChange} small={small || item.small}/>))}
        </div>);
};
exports.CheckboxGroup = CheckboxGroup;
exports.Checkbox.displayName = 'Checkbox';
exports.CheckboxGroup.displayName = 'CheckboxGroup';
exports.default = exports.CheckboxGroup;
