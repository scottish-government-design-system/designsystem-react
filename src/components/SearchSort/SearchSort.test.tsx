import { test, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SearchSort from './SearchSort';

const SELECT_ID = 'sort-by';
const LABEL_TEXT = 'Sort by';

test('renders correctly', () => {
    render(
        <SearchSort data-testid="search-sort">
        </SearchSort>
    );

    const searchSort = screen.getByTestId('search-sort');
    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentElement;
    const label = selectWrapper?.previousElementSibling;
    const selectArrow = select.nextElementSibling;
    const button = within(searchSort).getByRole('button');

    expect(select).toHaveClass('ds_select');
    expect(select.id).toEqual(SELECT_ID);
    expect(select).toHaveAttribute('name', SELECT_ID);

    expect(selectWrapper).toHaveClass('ds_select-wrapper');
    expect(selectWrapper?.tagName).toEqual('DIV');

    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', SELECT_ID);
    expect(label).toHaveTextContent(LABEL_TEXT);

    expect(selectArrow).toHaveClass('ds_select-arrow');
    expect(selectArrow).toHaveAttribute('aria-hidden');
    expect(selectArrow?.textContent).toEqual('');

    expect(searchSort).toBeInTheDocument();
    expect(searchSort).toHaveClass('ds_sort-options');
    expect(searchSort.tagName).toEqual('DIV');

    expect(button).toHaveClass('ds_button', 'ds_button--small', 'ds_button--secondary');
    expect(button).toHaveTextContent('Apply sort');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button.previousElementSibling).toEqual(selectWrapper);
});

test('custom id and label', () => {
    const CUSTOM_ID = 'custom-sort-by';
    const CUSTOM_LABEL = 'Custom sort by';

    render(
        <SearchSort id={CUSTOM_ID} label={CUSTOM_LABEL} data-testid="search-sort">
        </SearchSort>
    );

    const select = screen.getByRole('combobox');
    const selectWrapper = select.parentElement;
    const label = selectWrapper?.previousElementSibling;

    expect(select.id).toEqual(CUSTOM_ID);
    expect(select).toHaveAttribute('name', CUSTOM_ID);
    expect(label).toHaveAttribute('for', CUSTOM_ID);
    expect(label).toHaveTextContent(CUSTOM_LABEL);
});

test('event handler onApply', async () => {
    const onApply = vi.fn();
    render(
        <SearchSort onApply={onApply} data-testid="search-sort">
        </SearchSort>
    );

    const button = within(screen.getByTestId('search-sort')).getByRole('button');
    await button.click();
    expect(onApply).toHaveBeenCalled();
});

test('passing additional props', () => {
    render(
        <SearchSort data-test="foo" data-testid="search-sort">
        </SearchSort>
    );

    const searchSort = screen.getByTestId('search-sort');
    expect(searchSort.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SearchSort className="foo" data-testid="search-sort">
        </SearchSort>
    );

    const searchSort = screen.getByTestId('search-sort');
    expect(searchSort).toHaveClass('foo', 'ds_sort-options');
});

test('renders options correctly', () => {
    const OPTION_VALUE_1 = 'relevance';
    const OPTION_TEXT_1 = 'Most relevant';
    const OPTION_VALUE_2 = 'date';
    const OPTION_TEXT_2 = 'Updated (newest)';
    const OPTION_VALUE_3 = 'adate';
    const OPTION_TEXT_3 = 'Updated (oldest)';

    render(
        <SearchSort data-testid="search-sort">
            <SearchSort.Option value={OPTION_VALUE_1}>{OPTION_TEXT_1}</SearchSort.Option>
            <SearchSort.Option value={OPTION_VALUE_2}>{OPTION_TEXT_2}</SearchSort.Option>
            <SearchSort.Option value={OPTION_VALUE_3}>{OPTION_TEXT_3}</SearchSort.Option>
        </SearchSort>
    );

    const select = screen.getByRole('combobox');
    const options = within(select).getAllByRole('option');

    expect(options).toHaveLength(4);

    expect(options[0]).toHaveTextContent('');
    expect(options[0]).toHaveAttribute('value', '');

    expect(options[1]).toHaveTextContent(OPTION_TEXT_1);
    expect(options[1]).toHaveAttribute('value', OPTION_VALUE_1);

    expect(options[2]).toHaveTextContent(OPTION_TEXT_2);
    expect(options[2]).toHaveAttribute('value', OPTION_VALUE_2);

    expect(options[3]).toHaveTextContent(OPTION_TEXT_3);
    expect(options[3]).toHaveAttribute('value', OPTION_VALUE_3);
});
