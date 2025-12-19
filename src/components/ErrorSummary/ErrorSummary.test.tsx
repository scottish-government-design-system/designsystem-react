import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ErrorSummary from './ErrorSummary';

const ERROR_FRAGMENT_ID = 'did-resolve';
const ERROR_TEXT = 'Did this resolve your issue?';

test('error summary renders correctly', () => {
    render(
        <ErrorSummary data-testid="errorsummary"/>
    );

    const errorSummaryElement = screen.getByTestId('errorsummary');
    const errorSummaryTitle = within(errorSummaryElement).getByRole('heading');
    const errorSummaryList = within(errorSummaryElement).getByRole('list');

    expect(errorSummaryElement).toHaveClass('ds_error-summary');
    expect(errorSummaryElement).toHaveAttribute('role', 'alert');
    expect(errorSummaryElement).toHaveAttribute('aria-labelledby', errorSummaryTitle.id);
    expect(errorSummaryElement.tagName).toEqual('DIV');

    expect(errorSummaryTitle).toHaveClass('ds_error-summary__title');
    expect(errorSummaryTitle).toHaveAttribute('id');
    expect(errorSummaryTitle.tagName).toEqual('H2');
    expect(errorSummaryTitle.textContent).toEqual('There is a problem');

    expect(errorSummaryList).toHaveClass('ds_error-summary__list');
    expect(errorSummaryList.tagName).toEqual('UL');
});

test('error summary with custom title', () => {
    const TITLE_TEXT = 'Foo';

    render(
        <ErrorSummary data-testid="errorsummary" title={TITLE_TEXT}/>
    );

    const errorSummaryElement = screen.getByTestId('errorsummary');
    const errorSummaryTitle = within(errorSummaryElement).getByRole('heading');

    expect(errorSummaryTitle.textContent).toEqual(TITLE_TEXT);
});

test('error summary item with link', () => {
    render(
        <ErrorSummary.Item fragmentId={ERROR_FRAGMENT_ID}>{ERROR_TEXT}</ErrorSummary.Item>
    );

    const errorSummaryItem = screen.getByRole('listitem');
    const errorSummaryLink = within(errorSummaryItem).queryByRole('link');

    expect(errorSummaryItem.tagName).toEqual('LI');

    expect(errorSummaryLink).toBeInTheDocument();
    expect(errorSummaryLink).toHaveAttribute('href', '#' + ERROR_FRAGMENT_ID);
    expect(errorSummaryLink?.tagName).toEqual('A');
    expect(errorSummaryLink?.textContent).toEqual(ERROR_TEXT);
});

test('error summary item with no link', () => {
    render(
        <ErrorSummary.Item>{ERROR_TEXT}</ErrorSummary.Item>
    );

    const errorSummaryItem = screen.getByRole('listitem');
    const errorSummaryLink = within(errorSummaryItem).queryByRole('link');

    expect(errorSummaryItem.tagName).toEqual('LI');

    expect(errorSummaryLink).not.toBeInTheDocument();
    expect(errorSummaryItem?.textContent).toEqual(ERROR_TEXT);
});

test('error summary item with custom element', () => {
    render(
        <ErrorSummary.Item fragmentId={ERROR_FRAGMENT_ID} linkComponent={
            ({ ...props }) => (
                <strong role="link" {...props}/>
            )}>
            {ERROR_TEXT}
        </ErrorSummary.Item>
    );

    const errorSummaryItem = screen.getByRole('listitem');
    const errorSummaryLink = within(errorSummaryItem).queryByRole('link');

    expect(errorSummaryItem.tagName).toEqual('LI');

    expect(errorSummaryLink).toBeInTheDocument();
    expect(errorSummaryLink).toHaveAttribute('href', '#' + ERROR_FRAGMENT_ID);
    expect(errorSummaryLink?.tagName).toEqual('STRONG');
    expect(errorSummaryLink?.textContent).toEqual(ERROR_TEXT);
});

test('passing additional props', () => {
    render(
        <ErrorSummary data-testid="errorsummary" data-test="foo"/>
    )

    const errorSummaryElement = screen.getByTestId('errorsummary');
    expect(errorSummaryElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ErrorSummary data-testid="errorsummary" className="foo"/>
    )

    const errorSummaryElement = screen.getByTestId('errorsummary');
    expect(errorSummaryElement).toHaveClass('foo', 'ds_error-summary');
});
