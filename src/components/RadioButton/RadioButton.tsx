import { useContext } from 'react';

import HintText from '../../common/HintText';
import { CheckboxRadioContext } from '../../utils/context';

const RadioButton = ({
    checked,
    hintText,
    id,
    isSmall,
    label,
    name,
    onBlur,
    onChange
}: SGDS.Component.RadioButton) => {
    const hintTextId = `hint-text-${id}`;

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
            {hintText && <HintText id={hintTextId} text={hintText} />}
        </div>
    );
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
