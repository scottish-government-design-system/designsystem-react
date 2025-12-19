import { SiteNavigationItemProps, SiteNavigationProps } from "./types";

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

    function processChildren(children: React.ReactNode) {
        if (linkComponent) {
            return linkComponent({ className: classNames.join(' '), href, children });
        } else if (href) {
            return <a href={href} aria-current={ariaCurrent ? ariaCurrent : undefined} className={classNames.join(' ')}>{children}</a>;
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
            className={[
                'ds_site-navigation',
                className
            ].join(' ')}
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
