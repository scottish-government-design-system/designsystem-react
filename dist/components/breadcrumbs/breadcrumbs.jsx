"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Breadcrumb = ({ hidden, href, title }) => {
    return (<li className={[
            'ds_breadcrumbs__item',
            hidden && 'visually-hidden'
        ].join(' ')}>

            {href ? (<a className="ds_breadcrumbs__link" href={href}>
                {title}
            </a>) : (title)}
        </li>);
};
/**
 * @param {boolean} hideLastItem
 * @param {Array} items
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Breadcrumbs = ({ hideLastItem, items, ...props }) => {
    return (<nav aria-label="Breadcrumb" {...props}>
            <ol className="ds_breadcrumbs">
                {items && items.map((item, index) => (<Breadcrumb title={item.title} href={item.href} hidden={(hideLastItem) && index + 1 === items.length} key={'breadcrumb' + index}/>))}
            </ol>
        </nav>);
};
Breadcrumbs.displayName = 'Breadcrumbs';
exports.default = Breadcrumbs;
