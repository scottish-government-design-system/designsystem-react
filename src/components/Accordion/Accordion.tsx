import React, { createContext, useContext, useEffect, useRef, useId } from 'react';
import WrapperTag from '../../common/WrapperTag';
// @ts-ignore
import DSAccordion from '@scottish-government/design-system/src/components/accordion/accordion';

let accordionItemCounter = 0;
const AccordionHeadingLevelContext = createContext('h3');

const AccordionItem = ({
    children,
    className,
    id: rawId,
    isOpen = false,
    heading,
    title,
    ...props
}: SGDS.Component.Accordion.Item) => {
    accordionItemCounter = accordionItemCounter + 1;
    const processedId = rawId || `accordion-item-${useId()}`;

    let headingLevel = useContext(AccordionHeadingLevelContext);

    if (title) {
        console.warn(
            'Warning: Using the `title` prop for heading text on an Accordion.Item is deprecated and will be removed in a future release. Please use the `heading` prop instead.'
        );

        heading = heading || title;
    }

    return (
        <div
            className={[
                'ds_accordion-item',
                className
            ].join(' ')}
            id={processedId}
            {...props}
        >
            <input
                aria-labelledby={`panel-${processedId}-heading`}
                className={[
                    'ds_accordion-item__control',
                    'visually-hidden'
                ].join(' ')}
                defaultChecked={isOpen}
                id={`${processedId}-control`}
                type="checkbox"
            />
            <div className="ds_accordion-item__header">
                <WrapperTag
                    id={`panel-${processedId}-heading`}
                    className="ds_accordion-item__title"
                    tagName={headingLevel}
                >
                    {heading}
                </WrapperTag>
                <span className="ds_accordion-item__indicator" />
                <label
                    className="ds_accordion-item__label"
                    htmlFor={`${processedId}-control`}
                >
                    <span className="visually-hidden">Show this section</span>
                </label>
            </div>
            <div className="ds_accordion-item__body">
                {children}
            </div>
        </div>
    );
};

const Accordion = ({
    children,
    className,
    headingLevel = 'h3',
    hideOpenAll,
    isSmall,
    ...props
}: SGDS.Component.Accordion) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSAccordion(ref.current).init();
        }
    }, [ref]);

    if (!children) {
        hideOpenAll = true;
    }

    return (
        <div
            className={[
                'ds_accordion',
                isSmall ? 'ds_accordion--small' : '',
                className
            ].join(' ')}
            ref={ref}
            {...props}
        >
            { !hideOpenAll && (
                <button
                className={[
                    'ds_accordion__open-all',
                    'ds_link',
                    'js-open-all'
                ].join(' ')}
                type='button'
                >
                    Open all
                    {' '}
                    <span className="visually-hidden">sections</span>
                </button>
            )}

            <AccordionHeadingLevelContext value={headingLevel}>
                {children}
            </AccordionHeadingLevelContext>
        </div>
    );
};

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'Accordion.Item';
Accordion.Item = AccordionItem;

export default Accordion;
