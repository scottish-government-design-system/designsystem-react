import React from 'react';
import * as Icons from '../../images/icons';
import { IconProps } from './types';

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
            className={[
                    'ds_icon',
                    className,
                    isFilled && 'ds_icon--fill',
                    iconSize && `ds_icon--${iconSize}`
            ].join(' ')}
        />
    );
};

Icon.displayName = 'Icon';

export default Icon;
