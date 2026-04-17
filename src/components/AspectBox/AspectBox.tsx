import React, { Children, useRef } from 'react';
import { AspectBoxProps } from './types';
import clsx from 'clsx';

const AspectBox = ({
    children,
    className,
    ratio,
    ...props
}: AspectBoxProps) => {
    const ref = useRef(null);

    function processChild(child: React.JSX.Element) {
        if (['img', 'svg', 'picture'].includes(child.type)) {
            return React.cloneElement(child, { className: 'ds_aspect-box__inner' });
        }
    }

    let ratioClassName;
    switch (ratio) {
        case '1:1':
        case 'square':
            ratioClassName = 'ds_aspect-box--square'
            break;
        case '4:3':
            ratioClassName = 'ds_aspect-box--43'
            break;
        case '21:9':
            ratioClassName = 'ds_aspect-box--219'
            break;
        default:
            ratioClassName = ''
            break;
    }

    return (
        <div
            className={clsx([
                'ds_aspect-box',
                ratioClassName,
                className
            ])}
            ref={ref}
            {...props}
        >
            {Children.map(children, child => processChild(child as React.JSX.Element))}
        </div>
    );
};

AspectBox.displayName = 'AspectBox';

export default AspectBox;
