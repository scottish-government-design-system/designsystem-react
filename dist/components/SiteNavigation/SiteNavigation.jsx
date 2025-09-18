"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item = ({ children, isCurrent = false, href, linkComponent }) => {
    const classNames = ['ds_site-navigation__link'];
    let ariaCurrent;
    if (isCurrent) {
        classNames.push('ds_current');
        ariaCurrent = 'page';
    }
    function processChildren(children) {
        if (linkComponent) {
            return linkComponent({ className: classNames.join(' '), href, children });
        }
        else if (href) {
            return <a href={href} aria-current={ariaCurrent ? ariaCurrent : undefined} className={classNames.join(' ')}>{children}</a>;
        }
    }
    return (<li className="ds_site-navigation__item">
            {processChildren(children)}
        </li>);
};
const SiteNavigation = ({ children, className, ...props }) => {
    return (<nav className={[
            'ds_site-navigation',
            className
        ].join(' ')} {...props}>
            <ul className="ds_site-navigation__list">
                {children}
            </ul>
        </nav>);
};
SiteNavigation.displayName = 'SiteNavigation';
SiteNavigation.Item = Item;
Item.displayName = 'SiteNavigation.Item';
exports.default = SiteNavigation;
