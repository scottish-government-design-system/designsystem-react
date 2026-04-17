import { useEffect, useRef } from 'react';
import Icon from '../../common/Icon';
import DSBackToTop from '@scottish-government/design-system/src/components/back-to-top/back-to-top';
import { BackToTopProps } from './types';
import clsx from 'clsx';

const BackToTop = ({
    className,
    href = '#page-top',
    ...props
}: BackToTopProps) => {
    const ref = useRef(null);

    useEffect(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new DSBackToTop(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className={clsx([
                'ds_back-to-top',
                className
            ])}
            ref={ref}
            {...props}
        >
            <a href={href} className="ds_back-to-top__button">Back to top
                <Icon className="ds_back-to-top__icon" icon="ArrowUpward"/>
            </a>
       </div>
    );
};

BackToTop.displayName = 'BackToTop';

export default BackToTop;
