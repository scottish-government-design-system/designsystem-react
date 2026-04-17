import React, { useEffect, useRef } from 'react';
import { CheckboxRadioContext } from '../../utils/context';
import DSCheckboxes from '@scottish-government/design-system/src/components/checkbox/checkboxes'
import { CheckboxGroupProps } from './types';
import clsx from 'clsx';

export const CheckboxGroup = ({
    children,
    className,
    isSmall,
    ...props
}: CheckboxGroupProps) => {
    const ref = useRef(null);

    useEffect(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new DSCheckboxes(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className={clsx([
                'ds_checkboxes',
                'ds_field-group',
                className
            ])}
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
