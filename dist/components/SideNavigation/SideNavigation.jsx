"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-ignore
const side_navigation_1 = __importDefault(require("@scottish-government/design-system/src/components/side-navigation/side-navigation"));
const SideNavigationList = function ({ children, isRoot }) {
    return (<ul className="ds_side-navigation__list" id={isRoot ? 'side-navigation-root' : undefined}>
            {children}
        </ul>);
};
const SideNavigationItem = function ({ children, href, isCurrent = false, linkComponent, title }) {
    const LINK_CLASS = 'ds_side-navigation__link';
    return (<li className={[
            'ds_side-navigation__item',
            children && 'ds_side-navigation__item--has-children'
        ].join(' ')}>
            {isCurrent ?
            <span className={LINK_CLASS + ' ds_current'}>{title}</span> :
            linkComponent ? linkComponent({ className: LINK_CLASS, href, children: title }) :
                <a href={href} className={LINK_CLASS}>{title}</a>}

            {children}
        </li>);
};
const SideNavigation = function ({ children, className, ...props }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current && children) {
            new side_navigation_1.default(ref.current).init();
        }
    }, [ref]);
    return (<nav aria-label="Sections" className={[
            'ds_side-navigation',
            className
        ].join(' ')} data-module="ds-side-navigation" ref={ref} {...props}>
            <input type="checkbox" className="fully-hidden  js-toggle-side-navigation" id="show-side-navigation" aria-controls="side-navigation-root"/>
            <label className="ds_side-navigation__expand  ds_link" htmlFor="show-side-navigation">
                <span className="visually-hidden">Show all</span> Pages in this section
                <span className="ds_side-navigation__expand-indicator"></span>
            </label>

            {children}
        </nav>);
};
SideNavigation.displayName = 'SideNavigation';
SideNavigationItem.displayName = 'SideNavigation.Item';
SideNavigationList.displayName = 'SideNavigation.List';
SideNavigation.Item = SideNavigationItem;
SideNavigation.List = SideNavigationList;
exports.default = SideNavigation;
