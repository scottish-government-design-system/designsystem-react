import ConditionalWrapper from "../../common/ConditionalWrapper";
import WrapperTag from "../../common/WrapperTag";

const CategoryItem = ({
    children,
    className,
    headingLevel = 'h2',
    href,
    linkComponent,
    tagName = 'div',
    title,
    ...props
}: SGDS.Component.CategoryItem) => {
    const LINK_CLASS = 'ds_category-item__link';

    function getLinkElement(children: React.ReactNode) {
        if (linkComponent) {
            return linkComponent({ className: LINK_CLASS, href, children });
        } else if (href) {
            return <a href={href} className={LINK_CLASS}>{children}</a>;
        }
    }

    return (
        <WrapperTag
            tagName={tagName}
            className={[
                'ds_category-item',
                className
            ].join(' ')}
            {...props}
        >
            <WrapperTag
                className="ds_category-item__title"
                tagName={headingLevel}
            >
                <ConditionalWrapper
                    condition={typeof href !== 'undefined'}
                    wrapper={(children: React.JSX.Element) => getLinkElement(children)}
                >
                    {title}
                </ConditionalWrapper>
            </WrapperTag>

            {children &&
                <p className="ds_category-item__summary">
                    {children}
                </p>
            }
        </WrapperTag>
    );
};

CategoryItem.displayName = 'CategoryItem';

export default CategoryItem;
