import { test, expect, vi } from 'vitest';
import { within, render, screen, fireEvent } from '@testing-library/react';
import SummaryList from './SummaryList';

const ONCLICK_FUNCTION = vi.fn();
const TITLE = 'Name';
const VALUE_1 = 'Jane Smith';
const VALUE_2 = 'Tony Brown';

const ACTION_HREF = "#foo"
const ACTION_ONCLICK = ONCLICK_FUNCTION;
const ACTION_TEXT = 'Name';
const DESCRIBEDBY_ID = 'q1-name';

test('summary list renders correctly', () => {
    render(
        <SummaryList data-testid="summarylist">
            <SummaryList.Item title="key">
                <SummaryList.Value>value</SummaryList.Value>
                <SummaryList.Value>value2</SummaryList.Value>
                <SummaryList.Value>value3</SummaryList.Value>
                <SummaryList.Action href="foo">foo</SummaryList.Action>
                <SummaryList.Action onclick={() => true}>bar</SummaryList.Action>
            </SummaryList.Item>
        </SummaryList>
    );

    const summaryList = screen.getByTestId('summarylist');

    expect(summaryList).toHaveClass('ds_summary-list');
    expect(summaryList.tagName).toEqual('OL');
});

test('summary list without border', () => {
    render(
        <SummaryList isBorderless/>
    );

    const summaryList = screen.getAllByRole('list')[0];

    expect(summaryList).toHaveClass('ds_summary-list--no-border');
});

test('summary list item renders correctly', () => {
    render(
        <SummaryList.Item title={TITLE}>
            <SummaryList.Value>{VALUE_1}</SummaryList.Value>
            <SummaryList.Action></SummaryList.Action>
        </SummaryList.Item>
    );

    const item = screen.getAllByRole('listitem')[0];
    const key = item.querySelector('.ds_summary-list__key');
    const value = item.querySelector('.ds_summary-list__value');
    const answer = value?.children[0];
    const actions = item.querySelector('.ds_summary-list__actions');

    expect(item).toHaveClass('ds_summary-list__item');

    expect(key?.tagName).toEqual('SPAN');
    expect(key?.textContent).toEqual(TITLE);

    expect(value?.tagName).toEqual('SPAN');

    expect(answer).toHaveClass('ds_summary-list__answer');
    expect(answer?.tagName).toEqual('Q');

    expect(actions?.tagName).toEqual('DIV');

    expect(actions?.querySelector('.ds_link')).toHaveAttribute('aria-describedby', key?.id);
});

test('summary list item with multiple values', () => {
    render(
        <SummaryList.Item title={TITLE}>
            <SummaryList.Value>{VALUE_1}</SummaryList.Value>
            <SummaryList.Value>{VALUE_2}</SummaryList.Value>
        </SummaryList.Item>
    );

    const item = screen.getAllByRole('listitem')[0];
    const value = item.querySelector('.ds_summary-list__value');
    const valueList = value?.children[0];
    const valueListItems = valueList?.children as HTMLCollection;

    expect(valueList).toHaveClass('ds_no-bullets');
    expect(valueList?.tagName).toEqual('UL');

    expect(valueListItems[0].tagName).toEqual('LI');
    expect(valueListItems[0].innerHTML).toEqual(`<q class="ds_summary-list__answer">${VALUE_1}</q>`);
});

test('summary list item with no value', () => {
    render(
        <SummaryList.Item title={TITLE}>
        </SummaryList.Item>
    );

    const item = screen.getAllByRole('listitem')[0];
    const value = item.querySelector('.ds_summary-list__value');

    expect(value?.textContent).toEqual('');
});

test('summary list item with multiple actions', () => {
    const ITEM_ACTIONS = [
        {
            title: 'Change',
            href: '#foo'
        },
        {
            title: 'Delete',
            onclick: ONCLICK_FUNCTION
        }
    ];

    render(
        <SummaryList.Item title={TITLE}>
            <SummaryList.Value>{VALUE_1}</SummaryList.Value>
            <SummaryList.Action href={ITEM_ACTIONS[0].href}>{ITEM_ACTIONS[0].title}</SummaryList.Action>
            <SummaryList.Action onclick={ITEM_ACTIONS[0].onclick}>{ITEM_ACTIONS[1].title}</SummaryList.Action>
        </SummaryList.Item>
    );

    const item = screen.getAllByRole('listitem')[0];
    const actionsElement = item.querySelector('.ds_summary-list__actions');
    const actionsList = within(actionsElement as HTMLElement).getByRole('list')

    expect(actionsList).toHaveClass('ds_summary-list__actions-list');
    expect(actionsList.tagName).toEqual('UL');

    expect(actionsList?.children.length).toEqual(2);
    expect(actionsList?.children[0]).toHaveClass('ds_summary-list__actions-list-item');
    expect(actionsList?.children[0].tagName).toEqual('LI');
    expect(actionsList?.children[0].textContent).toEqual(ITEM_ACTIONS[0].title);
    expect(actionsList?.children[1].textContent).toEqual(ITEM_ACTIONS[1].title);
});

test('passing additional props', () => {
    render(
        <SummaryList data-test="foo" />
    );

    const summaryList = screen.getAllByRole('list')[0];
    expect(summaryList?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SummaryList className="foo" />
    );

    const summaryList = screen.getAllByRole('list')[0];
    expect(summaryList).toHaveClass('foo', 'ds_summary-list');
});
