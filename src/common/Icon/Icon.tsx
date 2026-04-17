import React from 'react';
import * as Icons from '../../images/icons';
import { IconProps } from './types';
import clsx from 'clsx';

const Icon = ({
    ariaLabel,
    className,
    isFilled,
    icon,
    iconSize
}: IconProps) => {
    const IconComponent = Icons[icon];

    return (
        <IconComponent
            aria-hidden={ariaLabel ? undefined : true}
            aria-label={ariaLabel}
            className={clsx([
                    'ds_icon',
                    className,
                    isFilled && 'ds_icon--fill',
                    iconSize && `ds_icon--${iconSize}`
            ])}
        />
    );
};

Icon.displayName = 'Icon';

export default Icon;
