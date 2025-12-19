import { useContext } from 'react';

import HintText from '../../common/HintText';
import { CheckboxRadioContext } from '../../utils/context';
import { RadioButtonProps } from './types';

const RadioButton = ({
    checked,
    hintText,
    id,
    isSmall,
    label,
    name,
    onBlur,
    onChange
}: RadioButtonProps) => {
    const hintTextId = `hint-text-${id}`;

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
    name = name || useContext(CheckboxRadioContext).name;

    return (
        <div
            className={[
                'ds_radio',
                isSmall && 'ds_radio--small'
            ].join(' ')}>
            <input
                aria-describedby={hintText ? hintTextId : undefined}
                className="ds_radio__input"
                defaultChecked={!!checked}
                id={id}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                type="radio" />
            <label
                className="ds_radio__label"
                htmlFor={id}
            >{label}</label>
            {hintText && <HintText id={hintTextId}>{hintText}</HintText>}
        </div>
    );
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
