import React, { useEffect, useRef } from 'react';
// @ts-expect-error no types from core SGDS
import DSHideThisPage from '@scottish-government/design-system/src/components/hide-this-page/hide-this-page';
import { HideThisPageProps } from './types';

const HideThisPage = ({
    className,
    escapeUrl = 'https://www.bbc.co.uk/weather',
    ...props
}: HideThisPageProps) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSHideThisPage().init();

            const HIDE_THIS_PAGE_DIV_ID = 'hide-this-page-instruction';
            if (!document.getElementById(HIDE_THIS_PAGE_DIV_ID)) {
                const htpDiv = document.createElement('div');
                htpDiv.id = HIDE_THIS_PAGE_DIV_ID;
                htpDiv.classList.add('visually-hidden');
                htpDiv.classList.add('ds_hide-page');
                htpDiv.innerHTML = '<p>To leave the page quickly, press the escape key.</p>';
                document.body.prepend(htpDiv);
            }

            document.body.classList.add('ds_has-hide-page');
        }
    }, [ref]);

    return (
        <div
            className={[
                'ds_hide-page',
                className
            ].join(' ')}
            ref={ref}
            {...props}
        >
            <a href={escapeUrl} className="ds_hide-page__button  ds_button  js-hide-page">
                <strong>Hide this page</strong>
                <span className="visually-hidden  js-enabled-text">Or press escape key to hide this page</span>
            </a>
            <p className="ds_hide-page__text  js-enabled-text">Or press Esc key</p>
        </div>
    );
};

HideThisPage.displayName = 'HideThisPage';

export default HideThisPage;
