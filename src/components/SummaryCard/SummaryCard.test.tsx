import { test, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SummaryCard from './SummaryCard';
import SummaryList from '../SummaryList';

const ONCLICK_FUNCTION = vi.fn();

const ACTIONS = [
    {
        title: 'Change',
        href: '#foo'
    },
    {
        title: 'Delete',
        onclick: ONCLICK_FUNCTION
    }
];

const TITLE_TEXT = 'Joe Bloggs';

test('summary card renders correctly', () => {
    render(
        <SummaryCard
            data-testid="foo"
            title={TITLE_TEXT}
        >
            <SummaryCard.Action href={ACTIONS[0].href}>{ACTIONS[0].title}</SummaryCard.Action>
            <SummaryList data-testid="bar" />
        </SummaryCard>
    );

    const summaryCard = screen.getByTestId('foo');
    const title = within(summaryCard).getByRole('heading');
    const header = title.parentElement as HTMLElement;
    const content = header?.nextElementSibling as HTMLElement;
    const action = within(header).getByRole('link');

    expect(summaryCard).toHaveClass('ds_summary-card');

    expect(header).toHaveClass('ds_summary-card__header');
    expect(header?.tagName).toEqual('DIV');

    expect(title).toHaveClass('ds_summary-card__header-title');
    expect(title?.tagName).toEqual('H3');
    expect(title.textContent).toEqual(TITLE_TEXT);

    expect(action).toHaveAttribute('aria-describedby', title.id);

    expect(content).toHaveClass('ds_summary-card__content');
    expect(content?.tagName).toEqual('DIV');
});

test('custom heading level', () => {
    render(
        <SummaryCard
            data-testid="foo"
            headingLevel="h2"
            title={TITLE_TEXT}
        />
    );

    const summaryCard = screen.getByTestId('foo');
    const title = within(summaryCard).getByRole('heading');

    expect(title?.tagName).toEqual('H2');
});

test('summary card with multiple actions renders actions as a list', () => {
    render(
        <SummaryCard
            data-testid="foo"
            title={TITLE_TEXT}
        >
            <SummaryCard.Action href={ACTIONS[0].href}>{ACTIONS[0].title}</SummaryCard.Action>
            <SummaryCard.Action onclick={ACTIONS[1].onclick}>{ACTIONS[1].title}</SummaryCard.Action>
            <SummaryList data-testid="bar" />
        </SummaryCard>
    );

    const summaryCard = screen.getByTestId('foo');
    const title = within(summaryCard).getByRole('heading');
    const header = title.parentElement as HTMLElement;
    const actionsList = within(header).getByRole('list')

    expect(actionsList?.tagName).toEqual('UL');
    expect(actionsList.children[0]).toHaveClass('ds_summary-card__actions-list-item');
    expect(actionsList.children[0].tagName).toEqual('LI');
});

test('passing additional props', () => {
    render(
        <SummaryCard
            data-testid="foo"
            title={TITLE_TEXT}
            data-test="foo"
        />
    );

    const summaryCard = screen.getByTestId('foo');
    expect(summaryCard?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SummaryCard
            data-testid="foo"
            title={TITLE_TEXT}
            className="foo"
        />
    );

    const summaryCard = screen.getByTestId('foo');
    expect(summaryCard).toHaveClass('foo', 'ds_summary-card');
});
