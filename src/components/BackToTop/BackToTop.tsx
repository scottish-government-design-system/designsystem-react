import { useEffect, useRef } from 'react';
import Icon from '../../common/Icon';
// @ts-expect-error no types from core SGDS
import DSBackToTop from '@scottish-government/design-system/src/components/back-to-top/back-to-top';
import { BackToTopProps } from './types';

const BackToTop = ({
    className,
    href = '#page-top',
    ...props
}: BackToTopProps) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSBackToTop(ref.current).init();
        }
    }, [ref]);

    return (
        <div
            className={[
                'ds_back-to-top',
                className
            ].join(' ')}
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
