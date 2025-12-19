import React from 'react';
import { CheckboxRadioContext } from '../../utils/context';
import { RadioGroupProps } from './types';

const RadioGroup = ({
    children,
    className,
    isInline,
    isSmall,
    name = '',
    ...props
}: RadioGroupProps) => {
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
            <CheckboxRadioContext value={{ isSmall: !!isSmall, name}}>
                {children}
            </CheckboxRadioContext>
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
