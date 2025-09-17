import React from 'react';

const ContentsNavItem = ({
    children,
    isCurrent,
    href,
    linkComponent
}: SGDS.Component.ContentsNav.ContentsNavItem) => {
    const classNames = ['ds_contents-nav__link'];
    let ariaCurrent: React.AriaAttributes["aria-current"];

    if (isCurrent) {
        classNames.push('ds_current');
        ariaCurrent = 'page';
    }

    function processChildren(children: React.ReactNode) {
        if (linkComponent) {
            return linkComponent({ className: classNames.join(' '), href, children });
        } else if (href) {
            return <a href={href} aria-current={ariaCurrent ? ariaCurrent : undefined} className={classNames.join(' ')}>{children}</a>;
        } else {
            return <span aria-current={ariaCurrent ? ariaCurrent : undefined} className={classNames.join(' ')}>{children}</span>;
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
}: SGDS.Component.ContentsNav) => {
    return (
        <nav
            aria-label={ariaLabel}
            className={[
                'ds_contents-nav',
                className
            ].join(' ')}
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
