import { useEffect, useRef } from 'react';
// @ts-expect-error no types from core SGDS
import DSCharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';
import ConditionalWrapper from '../../common/ConditionalWrapper';
import ErrorMessage from '../ErrorMessage';
import HintText from '../../common/HintText';
import { TextInputBase } from '../../shared-types';

const Textarea = ({
    className,
    countThreshold,
    errorMessage,
    hasError,
    hintText,
    id,
    label,
    maxlength,
    name,
    onBlur,
    onChange,
    placeholder,
    rows = 4,
    value,
    ...props
}: TextInputBase<HTMLTextAreaElement>) => {
    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const ref = useRef(null);
    const describedbys: string[] = [];

    if (hintText) { describedbys.push(hintTextId) };
    if (errorMessage) { describedbys.push(errorMessageId) };

    useEffect(() => {
        if (ref.current) {
            new DSCharacterCount(ref.current).init();
        }
    }, [ref]);

    function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
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

            <textarea
                aria-describedby={describedbys.join(' ')}
                aria-invalid={hasError}
                className={[
                    'ds_input',
                    hasError && 'ds_input--error',
                    className
                ].join(' ')}
                defaultValue={value}
                id={id}
                maxLength={maxlength}
                name={name || id}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={placeholder}
                rows={rows}
                {...props}
            />

        </ConditionalWrapper>
    );
};

Textarea.displayName = 'Textarea';

export default Textarea;
