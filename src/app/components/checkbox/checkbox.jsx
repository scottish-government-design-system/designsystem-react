import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DSCheckboxes from '../../../../node_modules/@scottish-government/design-system/src/forms/checkbox/checkboxes'
import HintText from '../common/hint-text';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const CheckboxGroup = function ({
    children,
    ...props
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSCheckboxes(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className="ds_checkboxes ds_field-group"
            data-module="ds-checkboxes"
            ref={ref}
            {...props}
        >
            {children}
        </div>
    )
};
CheckboxGroup.propTypes = {
    children: PropTypes.element
};

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Checkbox = function ({
    checked,
    hintText,
    id,
    exclusive,
    label,
    name,
    small
}) {
    const hintTextId = `hint-text-${id}`;
    const behaviour = exclusive && 'exclusive';

    return (
        <>
            {exclusive && <p className="ds_checkbox-separator">or</p>}
            <div
                className={[
                    'ds_checkbox',
                    small && 'ds_checkbox--small'
                ].join(' ')}>

                <input data-behaviour={behaviour} defaultChecked={!!checked} className="ds_checkbox__input" id={id} name={name || id} type="checkbox" />
                <label className="ds_checkbox__label" htmlFor={id} aria-describedby={hintTextId}>{label}</label>
                {hintText && <HintText id={hintTextId} text={hintText} />}
            </div>
        </>
    );
};
Checkbox.propTypes = {
    checked: PropTypes.bool,
    hintText: PropTypes.string,
    id: PropTypes.string.isRequired,
    exclusive: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    small: PropTypes.bool
};

export default Checkbox;
