import React, { useEffect, useRef } from 'react';
import { CheckboxRadioContext } from '../../utils/context';

// @ts-ignore
import DSCheckboxes from '@scottish-government/design-system/src/forms/checkbox/checkboxes'

export const CheckboxGroup = ({
    children,
    className,
    isSmall,
    ...props
}: SGDS.Component.Checkbox.Group) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSCheckboxes(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className={[
                'ds_checkboxes',
                'ds_field-group',
                className
            ].join(' ')}
            data-module="ds-checkboxes"
            ref={ref}
            {...props}
        >
            <CheckboxRadioContext value={{isSmall: !!isSmall, name: ''}}>
                {children}
            </CheckboxRadioContext>
        </div>
    )
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
