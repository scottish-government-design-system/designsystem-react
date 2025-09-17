import React from 'react';
import { CheckboxRadioContext } from '../../utils/context';

const RadioGroup = ({
    children,
    className,
    isInline,
    isSmall,
    name,
    ...props
}: SGDS.Component.RadioButton.Group) => {
    return (
        <div
            className={[
                'ds_radios',
                'ds_field-group',
                isInline && 'ds_field-group--inline',
                className
            ].join(' ')}
            {...props}
        >
            <CheckboxRadioContext value={{ isSmall: !!isSmall, name }}>
                {children}
            </CheckboxRadioContext>
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
