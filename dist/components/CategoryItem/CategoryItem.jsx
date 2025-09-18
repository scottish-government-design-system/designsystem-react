"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const CategoryItem = ({ children, className, headingLevel = 'h2', href, linkComponent, tagName = 'div', title, ...props }) => {
    const LINK_CLASS = 'ds_category-item__link';
    function getLinkElement(children) {
        if (linkComponent) {
            return linkComponent({ className: LINK_CLASS, href, children });
        }
        else if (href) {
            return <a href={href} className={LINK_CLASS}>{children}</a>;
        }
    }
    return (<WrapperTag_1.default tagName={tagName} className={[
            'ds_category-item',
            className
        ].join(' ')} {...props}>
            <WrapperTag_1.default className="ds_category-item__title" tagName={headingLevel}>
                <ConditionalWrapper_1.default condition={typeof href !== 'undefined'} wrapper={(children) => getLinkElement(children)}>
                    {title}
                </ConditionalWrapper_1.default>
            </WrapperTag_1.default>

            {children &&
            <p className="ds_category-item__summary">
                    {children}
                </p>}
        </WrapperTag_1.default>);
};
CategoryItem.displayName = 'CategoryItem';
exports.default = CategoryItem;
