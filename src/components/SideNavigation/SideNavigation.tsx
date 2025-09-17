import { useEffect, useRef } from 'react';
// @ts-ignore
import DSSideNavigation from '@scottish-government/design-system/src/components/side-navigation/side-navigation';

const SideNavigationList = function ({
    children,
    isRoot
}: SGDS.Component.SideNavigation.List) {
    return (
        <ul className="ds_side-navigation__list"
            id={isRoot ? 'side-navigation-root' : undefined }
        >
            {children}
        </ul>
    );
};

const SideNavigationItem = function ({
    children,
    href,
    isCurrent = false,
    linkComponent,
    title
}: SGDS.Component.SideNavigation.Item) {
    const LINK_CLASS = 'ds_side-navigation__link';

    return (
        <li
            className={[
                'ds_side-navigation__item',
                children && 'ds_side-navigation__item--has-children'
            ].join(' ')}
        >
            {isCurrent ?
                <span className={LINK_CLASS + ' ds_current'}>{title}</span> :
                linkComponent ? linkComponent({ className: LINK_CLASS, href, children: title }) :
                <a href={href} className={LINK_CLASS}>{title}</a>
            }

            {children}
        </li>
    );
};

const SideNavigation = function ({
    children,
    className,
    ...props
}: SGDS.Component.SideNavigation) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current && children) {
            new DSSideNavigation(ref.current).init();
        }
    }, [ref]);

    return (
        <nav
            aria-label="Sections"
            className={[
                'ds_side-navigation',
                className
            ].join(' ')}
            data-module="ds-side-navigation"
            ref={ref}
            {...props}
        >
            <input type="checkbox" className="fully-hidden  js-toggle-side-navigation" id="show-side-navigation" aria-controls="side-navigation-root" />
            <label className="ds_side-navigation__expand  ds_link" htmlFor="show-side-navigation">
                <span className="visually-hidden">Show all</span> Pages in this section
                <span className="ds_side-navigation__expand-indicator"></span>
            </label>

            {children}
        </nav>
    );
};

SideNavigation.displayName = 'SideNavigation';
SideNavigationItem.displayName = 'SideNavigation.Item';
SideNavigationList.displayName = 'SideNavigation.List';

SideNavigation.Item = SideNavigationItem;
SideNavigation.List = SideNavigationList;

export default SideNavigation;
