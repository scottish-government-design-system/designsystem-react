import { SiteNavigationItemProps, SiteNavigationProps } from "./types";
import clsx from 'clsx';

const Item = ({
    children,
    isCurrent = false,
    href,
    linkComponent
}: SiteNavigationItemProps) => {
    const classNames = ['ds_site-navigation__link'];
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
            return <span className={classNamesString}>{children}</span>;
        }
    }

    return (
        <li
            className="ds_site-navigation__item"
        >
            {processChildren(children)}
        </li>
    );
};

const SiteNavigation = ({
    children,
    className,
    ...props
}: SiteNavigationProps) => {
    return (
        <nav
            className={clsx([
                'ds_site-navigation',
                className
            ])}
            {...props}
        >
            <ul className="ds_site-navigation__list">
                {children}
            </ul>
        </nav>
    );
};

SiteNavigation.displayName = 'SiteNavigation';
SiteNavigation.Item = Item;
Item.displayName = 'SiteNavigation.Item';

export default SiteNavigation;
