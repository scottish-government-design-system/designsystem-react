'use client';

import React, { Children, useEffect, useRef } from 'react';
import Icon from '../../common/Icon';
import SiteNavigation from '../SiteNavigation/SiteNavigation';

// @ts-ignore
import DSMobileMenu from '@scottish-government/design-system/src/components/site-navigation/site-navigation';

const Brand = ({
    children,
    homeUrl = '/',
    linkComponent,
    siteTitle
}: SGDS.Component.SiteHeader.Brand) => {
    function processChildren(children: React.ReactNode) {
        const image = React.cloneElement(children as React.ReactElement<HTMLImageElement>, { className: 'ds_site-branding__logo-image' });

        if (linkComponent) {
            return linkComponent({ className: 'ds_site-branding__logo  ds_site-branding__link', href: homeUrl, children: image });
        } else if (homeUrl) {
            return <a href={homeUrl} className="ds_site-branding__logo  ds_site-branding__link">{image}</a>;
        }
    }

    return (
        <>
            {processChildren(children)}

            {siteTitle &&
                <div className="ds_site-branding__title">
                    {siteTitle}
                </div>
            }
        </>
    );
}

const Navigation = ({
    children
}: any) => {
    return children;
}

const Phase = ({
    children
}: any) => {
    return children;
}

const Search = ({
    children
}: any) => {
    return children;
}

const SiteHeader = ({
    children,
    ...props
}: SGDS.Component.SiteHeader) => {
    const mobileMenuRef = useRef(null);

    let branding: React.ReactNode;
    let navigation: React.ReactNode;
    let mobileNavigation: React.ReactNode;
    let phase: React.ReactNode;
    let search: React.ReactNode;

    // assign to slots
    Children.forEach(children, (child: React.ReactNode) => {
        const thisChild = child as React.ReactElement<any>;
        if (thisChild && thisChild.type === Brand) {
            branding = thisChild;
        } else if (thisChild && thisChild.type === Navigation) {
            navigation = thisChild;

            if (thisChild.props.children.type === SiteNavigation) {
                mobileNavigation = React.cloneElement(thisChild.props.children as React.ReactElement<SGDS.Component.SiteNavigation>, { className: 'ds_site-navigation--mobile', id: 'mobile-navigation', ref: mobileMenuRef});
            }
        } else if (thisChild && thisChild.type === Phase) {
            phase = thisChild;
        } else if (thisChild && thisChild.type === Search) {
            search = thisChild;
        }
    });

    useEffect(() => {
        if (mobileMenuRef.current) {
            new DSMobileMenu(mobileMenuRef.current).init();
        }
    }, [mobileMenuRef]);

    return (
        <header className="ds_site-header" {...props}>
            <div className="ds_wrapper">
                <div className="ds_site-header__content">
                    <div className="ds_site-branding">
                        {branding}
                    </div>

                    {mobileNavigation &&
                        <>
                            <div className="ds_site-header__controls">
                                <label aria-controls="mobile-navigation" className="ds_site-header__control  js-toggle-menu" htmlFor="menu">
                                    <span className="ds_site-header__control-text">Menu</span>
                                    <Icon isFilled className="ds_site-header__control-icon" icon="Menu" aria-hidden="true" />
                                    <Icon isFilled className="ds_site-header__control-icon  ds_site-header__control-icon--active-icon" icon="Close" aria-hidden="true" />
                                </label>
                            </div>

                            <input className="ds_site-navigation__toggle" id="menu" type="checkbox" />
                        </>
                    }

                    {mobileNavigation}

                    <div className="ds_site-header__search">{search}</div>
                </div>
            </div>

            {phase}

            {navigation &&
                <div className="ds_site-header__navigation">
                    <div className="ds_wrapper">
                        {navigation}
                    </div>
                </div>
            }
        </header>
    );
};

SiteHeader.Brand = Brand;
SiteHeader.Navigation = Navigation;
SiteHeader.Phase = Phase;
SiteHeader.Search = Search;

SiteHeader.displayName = 'SiteHeader';
Brand.displayName = 'SiteHeader.Brand';
Navigation.displayName = 'SiteHeader.Navigation';
Phase.displayName = 'SiteHeader.Phase';
Search.displayName = 'SiteHeader.Search';

export default SiteHeader;
