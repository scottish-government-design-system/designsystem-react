import ErrorMessage from '../ErrorMessage/ErrorMessage';
import HintText from '../../common/HintText';

const Select = function ({
    children,
    className,
    defaultValue,
    errorMessage,
    hasError,
    hintText,
    id,
    label,
    name,
    onBlur,
    onChange,
    placeholder,
    width,
    ...props
}: SGDS.Component.Select) {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const describedbys: string[] = [];

    if (hintText) { describedbys.push(hintTextId) };
    if (errorMessage) { describedbys.push(errorMessageId) };

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
        <>
            <label className="ds_label" htmlFor={id}>{label}</label>
            {hintText && <HintText id={hintTextId} text={hintText} />}
            {errorMessage && <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>}
            <div
                className={[
                    "ds_select-wrapper",
                    hasError && 'ds_input--error',
                    width && `ds_input--${width}`,
                    className
                ].join(' ')}
                {...props}
            >
                <select
                    aria-describedby={describedbys.join(' ')}
                    aria-invalid={hasError}
                    className="ds_select"
                    defaultValue={defaultValue}
                    id={id}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                >
                    <option value="">{placeholder}</option>
                    {children}
                </select>
                <span className="ds_select-arrow" aria-hidden="true"></span>
            </div>
        </>
    );
};

Select.displayName = 'Select';

export default Select;
