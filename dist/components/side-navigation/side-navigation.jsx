"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.List = void 0;
const react_1 = require("react");
// @ts-ignore
const side_navigation_1 = __importDefault(require("@scottish-government/design-system/src/components/side-navigation/side-navigation"));
const List = function ({ items, root }) {
    return (<ul className="ds_side-navigation__list" id={root ? 'side-navigation-root' : undefined}>
            {items && items.map((item, index) => (<exports.Link title={item.title} href={item.href} items={item.items} current={item.current} key={'sidenavitem' + index}/>))}
        </ul>);
};
exports.List = List;
const Link = function ({ current = false, href, items, title }) {
    return (<li className={[
            'ds_side-navigation__item',
            items && 'ds_side-navigation__item--has-children'
        ].join(' ')}>
            {current ?
            <span className="ds_side-navigation__link  ds_current">{title}</span> :
            <a href={href} className="ds_side-navigation__link">{title}</a>}

            {items && <exports.List items={items}/>}
        </li>);
};
exports.Link = Link;
const SideNavigation = function ({ children, items, ...props }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new side_navigation_1.default(ref.current).init();
        }
    }, [ref]);
    return (<nav aria-label="Sections" className="ds_side-navigation" data-module="ds-side-navigation" ref={ref} {...props}>
            <input type="checkbox" className="fully-hidden  js-toggle-side-navigation" id="show-side-navigation" aria-controls="side-navigation-root"/>
            <label className="ds_side-navigation__expand  ds_link" htmlFor="show-side-navigation">
                <span className="visually-hidden">Show all</span> Pages in this section
                <span className="ds_side-navigation__expand-indicator"></span>
            </label>

            {items && <exports.List root items={items}/>}
        </nav>);
};
SideNavigation.displayName = 'SideNavigation';
exports.Link.displayName = 'SideNavLink';
exports.List.displayName = 'SideNavList';
exports.default = SideNavigation;
