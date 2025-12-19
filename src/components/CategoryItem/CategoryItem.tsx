import ConditionalWrapper from "../../common/ConditionalWrapper";
import WrapperTag from "../../common/WrapperTag";
import { CategoryItemProps } from "./types";

const CategoryItem = ({
    children,
    className,
    headingLevel = 'h2',
    href,
    linkComponent,
    tagName = 'div',
    title,
    ...props
}: CategoryItemProps) => {
    const LINK_CLASS = 'ds_category-item__link';

    function getLinkElement(children: React.ReactNode) {
        let linkElement;
        if (linkComponent) {
            linkElement = linkComponent({ className: LINK_CLASS, href, children });
        } else {
            linkElement = <a href={href} className={LINK_CLASS}>{children}</a>;
        }
        return linkElement as React.JSX.Element;
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
