import { test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

const ACCORDION_ID = 'my-accordion';
const ACCORDION_ITEM_ID = 'my-accordion-item';
const TITLE_TEXT = 'Healthcare for veterans';
const CONTENT_TEXT = `Veterans are entitled to the same healthcare as any citizen. And there
    are health care options and support available specifically for veterans`;

test('accordion renders correctly', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID}>
            <Accordion.Item id="accordion-1" heading="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </Accordion.Item>
            <Accordion.Item isOpen id="accordion-2" heading="Employability for veterans">
                <p>If you&apos;re looking for a job, there are several organisations that can help
                    you <a href="#accordion-link">find a job or develop new skills</a>.</p>
            </Accordion.Item>
            <Accordion.Item id="accordion-3" heading="Housing for veterans">
                <p>If you need <a href="#accordion-link">help finding a place to live</a>{' '}
                    there&apos;s support specifically for veterans.</p>
            </Accordion.Item>
        </Accordion>
    );

    const accordion = screen.getByTestId(ACCORDION_ID);
    const openAllButton = document.querySelector('.ds_accordion__open-all');

    expect(accordion).toHaveClass('ds_accordion');
    expect(accordion.tagName).toEqual('DIV');

    expect(openAllButton).toHaveClass('ds_accordion__open-all', 'ds_link', 'js-open-all');
    expect(openAllButton).toHaveAttribute('type', 'button');
    expect(openAllButton?.textContent).toEqual('Open all sections');
    expect(openAllButton?.innerHTML).toEqual('Open all <span class="visually-hidden">sections</span>');
});

test('accordion without open all', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} hideOpenAll>
            <Accordion.Item id="accordion-1" heading="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </Accordion.Item>
            <Accordion.Item id="accordion-2" heading="Employability for veterans">
                <p>If you&apos;re looking for a job, there are several organisations that can help
                    you <a href="#accordion-link">find a job or develop new skills</a>.</p>
            </Accordion.Item>
            <Accordion.Item id="accordion-3" heading="Housing for veterans">
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

test('instantiating/initialising DS component script', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} data-test="foo">
        </Accordion>
    )

    const accordion = screen.getByTestId(ACCORDION_ID);
    expect(accordion).toHaveClass('js-initialised');
    expect(accordion).toHaveClass('js-instantiated');
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
        <Accordion.Item id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} heading={TITLE_TEXT}>
            <p>{CONTENT_TEXT}</p>
        </Accordion.Item>
    );

    const accordionItem = screen.getByTestId(ACCORDION_ITEM_ID);
    const header = document.querySelector('.ds_accordion-item__header');
    const indicator = header?.querySelector('.ds_accordion-item__indicator');
    const body = document.querySelector('.ds_accordion-item__body');

    expect(accordionItem).toHaveClass('ds_accordion-item');
    expect(accordionItem).toHaveAttribute('id', ACCORDION_ITEM_ID);
    expect(accordionItem.tagName).toEqual('DETAILS');

    expect(header?.tagName).toEqual('SUMMARY');
    expect(header?.textContent).toEqual(TITLE_TEXT);

    expect(indicator?.tagName).toEqual('SPAN');

    expect(body?.innerHTML).toEqual(`<p>${CONTENT_TEXT}</p>`);
});

test('accordion items without ID are given unique IDs', () => {
    render(
        <Accordion id={ACCORDION_ID} data-testid={ACCORDION_ID} hideOpenAll>
            <Accordion.Item data-testid="item1" heading="Healthcare for veterans">
                <p>Veterans are entitled to the same healthcare as any citizen. And there
                    are health care options and support available specifically for veterans.</p>
                <p>If you have a health condition that’s related to your service, you’re
                    entitled to priority treatment based on clinical need.</p>
            </Accordion.Item>
            <Accordion.Item data-testid="item2" heading="Employability for veterans">
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
        <Accordion.Item isOpen id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} heading={TITLE_TEXT}>
            <p>{CONTENT_TEXT}</p>
        </Accordion.Item>
    );

    const accordionItem = screen.getByTestId(ACCORDION_ITEM_ID);
    expect(accordionItem).toHaveAttribute('open');
});

test('small accordion item', () => {
    render(
        <Accordion isSmall data-testid={ACCORDION_ID}>
            <Accordion.Item id={ACCORDION_ITEM_ID} heading={TITLE_TEXT}>
                <p>{CONTENT_TEXT}</p>
            </Accordion.Item>
        </Accordion>
    );

    const accordionItem = screen.getByTestId(ACCORDION_ID);

    expect(accordionItem).toHaveClass('ds_accordion--small');
});

test('deprecated title prop still works with warning', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(
        <Accordion.Item id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} title={TITLE_TEXT}>
            <p>{CONTENT_TEXT}</p>
        </Accordion.Item>
    );

    const header = document.querySelector('.ds_accordion-item__header');

    expect(header?.textContent).toEqual(TITLE_TEXT);
    expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Warning: Using the `title` prop for heading text on an Accordion.Item is deprecated and will be removed in a future release. Please use the `heading` prop instead.'
    );

    consoleWarnSpy.mockRestore();
});

test('passing additional props to accordion item', () => {
    render(
        <Accordion.Item id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} heading="Healthcare for veterans" data-test="foo">
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
        <Accordion.Item id={ACCORDION_ITEM_ID} data-testid={ACCORDION_ITEM_ID} heading="Healthcare for veterans" className="foo">
            <p>Veterans are entitled to the same healthcare as any citizen. And there
                are health care options and support available specifically for veterans.</p>
            <p>If you have a health condition that’s related to your service, you’re
                entitled to priority treatment based on clinical need.</p>
        </Accordion.Item>
    );

    const accordionItem = screen.getByTestId(ACCORDION_ITEM_ID);
    expect(accordionItem).toHaveClass('foo', 'ds_accordion-item');
});
