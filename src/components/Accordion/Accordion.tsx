import { useEffect, useRef, useId } from 'react';
import DSAccordion from '@scottish-government/design-system/dist/scripts/components/accordion/accordion';
import { AccordionItemProps, AccordionProps } from './types';
import clsx from 'clsx';

let accordionItemCounter = 0;

const AccordionItem = ({
    children,
    className,
    id: rawId,
    isOpen = false,
    heading,
    title,
    ...props
}: AccordionItemProps) => {
    accordionItemCounter = accordionItemCounter + 1;
    const processedId = rawId || `accordion-item-${useId()}`;

    if (title) {
        console.warn(
            'Warning: Using the `title` prop for heading text on an Accordion.Item is deprecated and will be removed in a future release. Please use the `heading` prop instead.'
        );

        heading = heading || title;
    }

    return (
        <details
            className={clsx([
                'ds_accordion-item',
                className
            ])}
            id={processedId}
            open={isOpen}
            {...props}
        >
            <summary className="ds_accordion-item__header">
                {heading}
                <span className="ds_accordion-item__indicator" />
            </summary>
            <div className="ds_accordion-item__body">
                {children}
            </div>
        </details>
    );
};

const Accordion = ({
    children,
    className,
    hideOpenAll,
    isSmall,
    ...props
}: AccordionProps) => {
    const ref = useRef(null);

    useEffect(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new DSAccordion(ref.current).init();
        }
    }, [ref]);

    if (!children) {
        hideOpenAll = true;
    }

    return (
        <div
            className={clsx([
                'ds_accordion',
                isSmall && 'ds_accordion--small',
                className
            ])}
            ref={ref}
            {...props}
        >
            { !hideOpenAll && (
                <button
                className={clsx([
                    'ds_accordion__open-all',
                    'ds_link',
                    'js-open-all'
                ])}
                type='button'
                >
                    Open all
                    {' '}
                    <span className="visually-hidden">sections</span>
                </button>
            )}

            {children}
        </div>
    );
};

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'Accordion.Item';
Accordion.Item = AccordionItem;

export default Accordion;
