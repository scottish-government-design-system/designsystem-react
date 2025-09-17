import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Accordion from './Accordion';

const ACCORDION_ID = 'my-accordion';
const ACCORDION_ITEM_ID = 'my-accordion-item';
const TITLE_TEXT = 'Healthcare for veterans';
const CONTENT_TEXT = `Veterans are entitled to the same healthcare as any citizen. And there
    are health care options and support available specifically for veterans`;

test('accordion renders correctly', () => {
    const DEFAULT_HEADING_LEVEL = 'h3';

    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID}>
            <Accordion.Item id="accordion-1" title="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </Accordion.Item>
            <Accordion.Item isOpen id="accordion-2" title="Employability for veterans">
                <p>If you&apos;re looking for a job, there are several organisations that can help
                    you <a href="#accordion-link">find a job or develop new skills</a>.</p>
            </Accordion.Item>
            <Accordion.Item id="accordion-3" title="Housing for veterans">
                <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
                    there&apos;s support specifically for veterans.</p>
            </Accordion.Item>
        </Accordion>
    );

    const accordion = screen.getByTestId(ACCORDION_ID);
    const openAllButton = document.querySelector('.ds_accordion__open-all');
    const firstAccordionTitle = document.querySelector('.ds_accordion-item__title');

    expect(accordion).toHaveClass('ds_accordion');
    expect(accordion.tagName).toEqual('DIV');

    expect(openAllButton).toHaveClass('ds_accordion__open-all', 'ds_link', 'js-open-all');
    expect(openAllButton).toHaveAttribute('type', 'button');
    expect(openAllButton?.textContent).toEqual('Open all sections');
    expect(openAllButton?.innerHTML).toEqual('Open all <span class="visually-hidden">sections</span>');

    expect(firstAccordionTitle?.tagName).toEqual(DEFAULT_HEADING_LEVEL.toUpperCase());
});

test('accordion without open all', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} hideOpenAll>
            <Accordion.Item id="accordion-1" title="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </Accordion.Item>
            <Accordion.Item id="accordion-2" title="Employability for veterans">
                <p>If you&apos;re looking for a job, there are several organisations that can help
                    you <a href="#accordion-link">find a job or develop new skills</a>.</p>
            </Accordion.Item>
            <Accordion.Item id="accordion-3" title="Housing for veterans">
                <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
                    there&apos;s support specifically for veterans.</p>
            </Accordion.Item>
        </Accordion>
    );

    const openAllButton = document.querySelector('.ds_accordion__open-all');

    expect(openAllButton).toBeNull();
});

test('empty accordion has no open all', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} hideOpenAll>
        </Accordion>
    );

    const openAllButton = document.querySelector('.ds_accordion__open-all');

    expect(openAllButton).toBeNull();
})

test('accordion with custom heading level', () => {
    const HEADING_LEVEL = 'h2';

    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} headingLevel={HEADING_LEVEL}>
            <Accordion.Item id="accordion-1" title="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </Accordion.Item>
        </Accordion>
    );

    const firstAccordionTitle = document.querySelector('.ds_accordion-item__title');
    expect(firstAccordionTitle?.tagName).toEqual(HEADING_LEVEL.toUpperCase());
});

test('passing additional props to accordion', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} data-test="foo">
        </Accordion>
    );

    const accordion = screen.getByTestId(ACCORDION_ID);
    expect(accordion?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} className="foo">
        </Accordion>
    );

    const accordion = screen.getByTestId(ACCORDION_ID);
    expect(accordion).toHaveClass('foo', 'ds_accordion');
});

test('accordion item renders correctly', () => {
    render(
        <Accordion.Item id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} title={TITLE_TEXT}>
            <p>{CONTENT_TEXT}</p>
        </Accordion.Item>
    );

    const accordionItem = screen.getByTestId(ACCORDION_ITEM_ID);
    const input = within(accordionItem).getByRole('checkbox');
    const header = document.querySelector('.ds_accordion-item__header');
    const title = header?.querySelector('.ds_accordion-item__title');
    const indicator = header?.querySelector('.ds_accordion-item__indicator');
    const label = header?.querySelector('.ds_accordion-item__label');
    const body = document.querySelector('.ds_accordion-item__body');

    expect(accordionItem).toHaveClass('ds_accordion-item');
    expect(accordionItem).toHaveAttribute('id', ACCORDION_ITEM_ID);

    expect(input).toHaveClass('ds_accordion-item__control', 'visually-hidden')
    expect(input).toHaveAttribute('id', `${ACCORDION_ITEM_ID}-control`);

    expect(header?.tagName).toEqual('DIV');

    expect(title).toHaveAttribute('id', `panel-${ACCORDION_ITEM_ID}-heading`);
    expect(title?.tagName).toEqual('H3');
    expect(title?.textContent).toEqual(TITLE_TEXT);

    expect(indicator?.tagName).toEqual('SPAN');

    expect(label).toHaveAttribute('for', input.id);
    expect(label?.tagName).toEqual('LABEL');
    expect(label?.textContent).toEqual('Show this section');
    expect(label?.children[0]).toHaveClass('visually-hidden');

    expect(body?.innerHTML).toEqual(`<p>${CONTENT_TEXT}</p>`);
});

test('accordion items without ID are given unique IDs', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} hideOpenAll>
            <Accordion.Item data-testid="item1" title="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </Accordion.Item>
            <Accordion.Item data-testid="item2" title="Employability for veterans">
                <p>If you&apos;re looking for a job, there are several organisations that can help
                    you <a href="#accordion-link">find a job or develop new skills</a>.</p>
            </Accordion.Item>
        </Accordion>
    );

    const accordionItem1 = screen.getByTestId('item1');
    const accordionItem2 = screen.getByTestId('item2');

    expect(accordionItem1).toHaveAttribute('id');
    expect(accordionItem2).toHaveAttribute('id');
    expect(accordionItem1.id).not.toEqual(accordionItem2.id);
});

test('open accordion item', () => {
    render(
        <Accordion.Item isOpen id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} title={TITLE_TEXT}>
            <p>{CONTENT_TEXT}</p>
        </Accordion.Item>
    );

    const accordionItem = screen.getByTestId(ACCORDION_ITEM_ID);
    const input = within(accordionItem).getByRole('checkbox');

    expect(input).toHaveAttribute('checked');
});

test('passing additional props to accordion item', () => {
    render(
        <Accordion.Item id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} title="Healthcare for veterans" data-test="foo">
            <p>Veterans are entitled to the same healthcare as any citizen. And there
                are health care options and support available specifically for veterans.</p>
            <p>If you have a health condition that’s related to your service, you’re
                entitled to priority treatment based on clinical need.</p>
        </Accordion.Item>
    );

    const accordionItem = screen.getByTestId(ACCORDION_ITEM_ID);
    expect(accordionItem.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Accordion.Item id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} title="Healthcare for veterans" className="foo">
            <p>Veterans are entitled to the same healthcare as any citizen. And there
                are health care options and support available specifically for veterans.</p>
            <p>If you have a health condition that’s related to your service, you’re
                entitled to priority treatment based on clinical need.</p>
        </Accordion.Item>
    );

    const accordionItem = screen.getByTestId(ACCORDION_ITEM_ID);
    expect(accordionItem).toHaveClass('foo', 'ds_accordion-item');
});
