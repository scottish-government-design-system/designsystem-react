"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const wrapper_tag_1 = __importDefault(require("../../common/wrapper-tag"));
const Link = ({ title, current, href }) => {
    // determine which HTML tag to use
    const tagName = href && !current ? 'a' : 'span';
    return (<li aria-current={current && 'page' || undefined} className="ds_contents-nav__item">
            <wrapper_tag_1.default tagName={tagName} className={[
            'ds_contents-nav__link',
            current && 'ds_current'
        ].join(' ')} href={!current ? href : undefined}>
                {title}
            </wrapper_tag_1.default>
        </li>);
};
exports.Link = Link;
const ContentsNav = function ({ items, label = 'Pages in this section', title = 'Contents', ...props }) {
    return (<nav aria-label={label} className="ds_contents-nav" {...props}>
            <h2 className="ds_contents-nav__title">{title}</h2>
            <ul className="ds_contents-nav__list">
                {items && items.map((item, index) => (<exports.Link current={item.current} href={item.href} title={item.title} key={'link' + index}/>))}
            </ul>
        </nav>);
};
ContentsNav.displayName = 'ContentsNav';
exports.default = ContentsNav;
