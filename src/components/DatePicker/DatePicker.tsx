import { useEffect, useRef } from 'react';
import DSDatePicker from '@scottish-government/design-system/src/components/date-picker/date-picker';
import ErrorMessage from '../ErrorMessage';
import TextInput from '../TextInput';
import { DatePickerProps } from './types';

const DatePicker = ({
    className,
    dateSelectCallback,
    disabledDates,
    errorMessage,
    hasError,
    hintText,
    id,
    label,
    maxDate,
    minDate,
    multiple,
    name,
    onBlur,
    onChange,
    value,
    width = 'fixed-10',
    ...props
}: DatePickerProps) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSDatePicker(ref.current, {
                dateSelectCallback
            }).init();
        }
    }, [ref, dateSelectCallback]);

    function handleBlur(event: React.FocusEvent) {
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }

    function handleChange(event: React.ChangeEvent) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    return (
        <div
            className={[
                "ds_datepicker",
                multiple && "ds_datepicker--multiple",
                className
            ].join(' ')}
            data-disableddates={disabledDates}
            data-maxdate={maxDate}
            data-mindate={minDate}
            data-module="ds-datepicker"
            ref={ref}
            {...props}
        >
            {(multiple ? (
                <fieldset className="ds_datepicker__input-wrapper">
                    <legend>{label}</legend>
                    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    <div>
                        <TextInput
                            className="js-datepicker-date"
                            hasError={!!hasError}
                            id={id + "-day"}
                            hintText={hintText}
                            label="Day"
                            name={name + "-day"}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={value?.split('/')[0]}
                            width="fixed-2"
                        />
                    </div>

                    <div>
                        <TextInput
                            className="js-datepicker-month"
                            hasError={!!hasError}
                            id={id + "-month"}
                            hintText={hintText}
                            label="Month"
                            name={name + "-month"}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={value?.split('/')[1]}
                            width="fixed-2"
                        />
                    </div>

                    <div>
                        <TextInput
                            className="js-datepicker-year"
                            hasError={!!hasError}
                            id={id + "-year"}
                            hintText={hintText}
                            label="Year"
                            name={name + "-year"}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={value?.split('/')[2]}
                            width="fixed-4"
                        />
                    </div>
                </fieldset>
            ) : (
                <TextInput
                    hasError={!!hasError}
                    errorMessage={errorMessage}
                    id={id}
                    hasButton
                    hintText={hintText}
                    label={label}
                    name={name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="dd/mm/yyyy"
                    value={value}
                    width={width}
                />
            ))}
        </div>
    );
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
