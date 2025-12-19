import { useContext } from 'react';
import { CheckboxRadioContext } from '../../utils/context';

import HintText from '../../common/HintText';
import { CheckboxProps } from './types';

const Checkbox = ({
    checked,
    hintText,
    id,
    isSmall,
    isExclusive,
    label,
    name,
    onBlur,
    onChange
}: CheckboxProps) => {
    const hintTextId = `hint-text-${id}`;
    const behaviour = isExclusive && 'exclusive';

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

    isSmall = isSmall || useContext(CheckboxRadioContext).isSmall;

    return (
        <>
            {isExclusive && <p className="ds_checkbox-separator">or</p>}
            <div
                className={[
                    'ds_checkbox',
                    isSmall && 'ds_checkbox--small'
                ].join(' ')}>

                <input
                    aria-describedby={hintText ? hintTextId : undefined}
                    className="ds_checkbox__input"
                    data-behaviour={behaviour}
                    defaultChecked={!!checked}
                    id={id}
                    name={name || id}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="checkbox" />
                <label
                    className="ds_checkbox__label"
                    htmlFor={id}
                >{label}</label>
                {hintText && <HintText id={hintTextId}>{hintText}</HintText>}
            </div>
        </>
    );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
