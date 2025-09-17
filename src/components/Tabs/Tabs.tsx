import React, { Children, useEffect, useRef, useId } from 'react';
import WrapperTag from '../../common/WrapperTag';
// @ts-ignore
import DSTabs from '@scottish-government/design-system/src/components/tabs/tabs';

const TabItem = ({
    isBorderless,
    children,
    className,
    id,
    tabLabel,
    ...props
}: SGDS.Component.Tabs.Item) => {
    return (
        <div
            className={[
                'ds_tabs__content',
                !isBorderless && 'ds_tabs__content--bordered',
                className
            ].join(' ')}
            id={id}
            {...props}
        >
            {children}
        </div>
    );
};

const TabListItem = ({
    children,
    href
}: SGDS.Component.Tabs.TabListItem) => {
    return (
        <li className="ds_tabs__tab">
            <a className="ds_tabs__tab-link" href={href}>{children}</a>
        </li>
    );
}

const Tabs = ({
    baseId = 'tabs',
    children,
    className,
    headingLevel = 'h2',
    isBorderless,
    isManual = false,
    title = 'Contents',
    ...props
}: SGDS.Component.Tabs) => {
    const ref = useRef(null);

    const headingId = `${baseId}-heading`;

    useEffect(() => {
        if (ref.current) {
            new DSTabs(ref.current).init();
        }
    }, [ref]);

    const processedItems = Children.map(children, child => {
        const thisChild = child as React.ReactElement<SGDS.Component.Tabs.Item>;

        if (thisChild && thisChild.type === TabItem) {
            return React.cloneElement(thisChild, {
                isBorderless: !!isBorderless,
                id: thisChild.props.id || `${baseId}-${useId()}`,
            });
        }
    });

    const tabListItems = Children.map(processedItems, child => {
        if (child && child.type === TabItem) {
            return <TabListItem href={`#${child.props.id}`}>{child.props.tabLabel}</TabListItem>
        }
    });

    return (
        <div
            className={[
                'ds_tabs',
                isManual && 'ds_tabs--manual',
                className
            ].join(' ')}
            ref={ref}
            {...props}
        >
            <WrapperTag
                id={headingId}
                className="ds_tabs__title"
                tagName={headingLevel}
            >
                {title}
            </WrapperTag>

            <ul className="ds_tabs__list" aria-labelledby={headingId}>
                {tabListItems}
            </ul>

            {processedItems}
        </div>
    );
};

Tabs.displayName = 'Tabs';
TabItem.displayName = 'Tabs.Item';
Tabs.Item = TabItem;

export default Tabs;
