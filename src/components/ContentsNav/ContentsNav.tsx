import React from 'react';
import { ContentsNavItemProps, ContentsNavProps } from './types';
import clsx from 'clsx';

const ContentsNavItem = ({
    children,
    isCurrent,
    href,
    linkComponent
}: ContentsNavItemProps) => {
    const classNames = ['ds_contents-nav__link'];
    let ariaCurrent: React.AriaAttributes["aria-current"];

    if (isCurrent) {
        classNames.push('ds_current');
        ariaCurrent = 'page';
    }

    const classNamesString = clsx(classNames);

    function processChildren(children: React.ReactNode) {
        if (linkComponent) {
            return linkComponent({ className: classNamesString, href, children });
        } else if (href) {
            return <a href={href} aria-current={ariaCurrent ? ariaCurrent : undefined} className={classNamesString}>{children}</a>;
        } else {
            return <span aria-current={ariaCurrent ? ariaCurrent : undefined} className={classNamesString}>{children}</span>;
        }
    }

    return (
        <li
            className="ds_contents-nav__item"
        >
            {processChildren(children)}
        </li>
    );
};

const ContentsNav = ({
    ariaLabel = 'Pages in this section',
    children,
    className,
    title = 'Contents',
    ...props
}: ContentsNavProps) => {
    return (
        <nav
            aria-label={ariaLabel}
            className={clsx([
                'ds_contents-nav',
                className
            ])}
            {...props}
        >
            <h2 className="ds_contents-nav__title">{title}</h2>

            <ul className="ds_contents-nav__list">
                {children}
            </ul>
        </nav>
    );
};

ContentsNav.displayName = 'ContentsNav';
ContentsNavItem.displayName = 'ContentsNav.Item';
ContentsNav.Item = ContentsNavItem;

export default ContentsNav;
