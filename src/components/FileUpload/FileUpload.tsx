import { useEffect, useRef } from 'react';
import { FileUploadProps } from './types';
import ErrorMessage from '../ErrorMessage';
import HintText from '../../common/HintText';
import DSFileUpload from '@scottish-government/design-system/src/components/file-upload/file-upload'

const FileUpload = ({
    accept,
    capture,
    className,
    errorMessage,
    hasError,
    hintText,
    id,
    isMultiple,
    label,
    name,
    onBlur,
    onChange,
    text,
    ...props
}: FileUploadProps) => {
    const ref = useRef(null);

    const errorMessageId = `error-message-${id}`;
    const hintTextId = `hint-text-${id}`;
    const describedbys: string[] = [];

    if (hintText) { describedbys.push(hintTextId) };
    if (errorMessage) { describedbys.push(errorMessageId) };

    const options = {
        text: text
    }

    useEffect(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new DSFileUpload(ref.current, options).init();
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
        <div className={[
                'ds_file-upload',
                className
            ].join(' ')}
            ref={ref}
            {...props}
        >
            <label className="ds_label" htmlFor={id}>{label}</label>
            {hintText && <HintText id={hintTextId}>{hintText}</HintText>}
            {errorMessage && <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>}
            <input
                accept={accept}
                aria-describedby={describedbys.length ? describedbys.join(' ') : undefined}
                aria-invalid={hasError}
                capture={capture}
                className={[
                    'ds_file-upload__input',
                    hasError ? 'ds_file-upload__input--error' : ''
                ].join(' ')}
                id={id}
                multiple={isMultiple}
                name={name || id}
                onBlur={handleBlur}
                onChange={handleChange}
                type="file"
            />
        </div>
    );
};

FileUpload.displayName = 'FileUpload';

export default FileUpload;
