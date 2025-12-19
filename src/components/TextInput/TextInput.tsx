import { useEffect, useRef } from 'react';
// @ts-expect-error no types from core SGDS
import DSCharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';
import Button from '../Button';
import ConditionalWrapper from '../../common/ConditionalWrapper';
import ErrorMessage from '../ErrorMessage';
import HintText from '../../common/HintText';
import { TextInputProps } from './types';

const TextInput = ({
    buttonIcon,
    buttonText,
    className,
    countThreshold,
    width,
    isCurrency,
    currencySymbol,
    errorMessage,
    hasButton = false,
    hasError,
    hintText,
    id,
    label,
    maxlength,
    name,
    onBlur,
    onChange,
    placeholder,
    type = 'text',
    value,
    ...props
}: TextInputProps) => {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = useRef(null);
    const inputWrapperClasses = `${hasButton ? 'ds_input__wrapper  ds_input__wrapper--has-icon' : ''} ${isCurrency ? 'ds_currency-wrapper' : ''}`;
    const describedbys: string[] = [];

    if (hintText) { describedbys.push(hintTextId) };
    if (errorMessage) { describedbys.push(errorMessageId) };

    useEffect(() => {
        if (ref.current) {
            new DSCharacterCount(ref.current).init();
        }
    }, [ref]);

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    return (
        <ConditionalWrapper
            condition={typeof maxlength !== 'undefined' && maxlength > 0}
            wrapper={(children: React.JSX.Element) => <div ref={ref} data-threshold={countThreshold} data-module="ds-character-count">{children}</div>}
        >
            <label className="ds_label" htmlFor={id}>{label}</label>
            {hintText && <HintText id={hintTextId}>{hintText}</HintText>}
            {errorMessage && <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>}
            <ConditionalWrapper
                condition={hasButton || typeof isCurrency !== 'undefined' && isCurrency}
                wrapper={(children: React.JSX.Element) => <div className={inputWrapperClasses} data-symbol={currencySymbol}>{children}</div>}
            >
                <input
                    aria-describedby={describedbys.join(' ')}
                    aria-invalid={hasError}
                    className={[
                        'ds_input',
                        className,
                        hasError ? 'ds_input--error' : '',
                        width ? `ds_input--${width}` : '',
                    ].join(' ')}
                    defaultValue={value}
                    id={id}
                    maxLength={maxlength}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={placeholder}
                    type={type}
                    {...props}
                />
                {hasButton && (buttonText || buttonIcon) && <Button isIconOnly icon={buttonIcon}>{buttonText}</Button>}
            </ConditionalWrapper>
        </ConditionalWrapper>
    );
};

TextInput.displayName = 'TextInput';

export default TextInput;
