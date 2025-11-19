"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-ignore
const date_picker_1 = __importDefault(require("@scottish-government/design-system/src/components/date-picker/date-picker"));
const ErrorMessage_1 = __importDefault(require("../ErrorMessage"));
const TextInput_1 = __importDefault(require("../TextInput"));
const DatePicker = ({ className, dateSelectCallback, disabledDates, errorMessage, hasError, hintText, id, iconPath = './', label, maxDate, minDate, multiple, name, onBlur, onChange, value, width = 'fixed-10', ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new date_picker_1.default(ref.current, {
                dateSelectCallback,
                imagePath: iconPath
            }).init();
        }
    }, [ref, dateSelectCallback, iconPath]);
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
            "ds_datepicker",
            multiple && "ds_datepicker--multiple",
            className
        ].join(' ')} data-disableddates={disabledDates} data-maxdate={maxDate} data-mindate={minDate} data-module="ds-datepicker" ref={ref} {...props}>
            {(multiple ? (<fieldset className="ds_datepicker__input-wrapper">
                    <legend>{label}</legend>
                    {errorMessage && <ErrorMessage_1.default>{errorMessage}</ErrorMessage_1.default>}
                    <div>
                        <TextInput_1.default className="js-datepicker-date" hasError={!!hasError} id={id + "-day"} hintText={hintText} label="Day" name={name + "-day"} onBlur={handleBlur} onChange={handleChange} value={value?.split('/')[0]} width="fixed-2"/>
                    </div>

                    <div>
                        <TextInput_1.default className="js-datepicker-month" hasError={!!hasError} id={id + "-month"} hintText={hintText} label="Month" name={name + "-month"} onBlur={handleBlur} onChange={handleChange} value={value?.split('/')[1]} width="fixed-2"/>
                    </div>

                    <div>
                        <TextInput_1.default className="js-datepicker-year" hasError={!!hasError} id={id + "-year"} hintText={hintText} label="Year" name={name + "-year"} onBlur={handleBlur} onChange={handleChange} value={value?.split('/')[2]} width="fixed-4"/>
                    </div>
                </fieldset>) : (<TextInput_1.default hasError={!!hasError} errorMessage={errorMessage} id={id} hasButton hintText={hintText} label={label} name={name} onBlur={handleBlur} onChange={handleChange} placeholder="dd/mm/yyyy" value={value} width={width}/>))}
        </div>);
};
DatePicker.displayName = 'DatePicker';
exports.default = DatePicker;
