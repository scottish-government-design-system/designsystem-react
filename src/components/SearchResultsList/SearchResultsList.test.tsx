import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchResultsList from './SearchResultsList';

test('search results list renders correctly', () => {
    render(
        <SearchResultsList>
        </SearchResultsList>
    );

    const searchResultsList = screen.getByRole('list');

    expect(searchResultsList.tagName).toEqual('OL');
    expect(searchResultsList).toHaveClass('ds_search-results__list');
});

test('search results list with "start" param', () => {
    const START_VALUE = 3;

    render(
        <SearchResultsList start={START_VALUE}>
        </SearchResultsList>
    );

    const searchResultsList = screen.getByRole('list');

    expect(searchResultsList).toHaveAttribute('start', START_VALUE.toString());
});

test('search results list with "data-total" param', () => {
    const TOTAL_VALUE = 1234;

    render(
        <SearchResultsList data-total={TOTAL_VALUE}>
        </SearchResultsList>
    );

    const searchResultsList = screen.getByRole('list');

    expect(searchResultsList).toHaveAttribute('data-total', TOTAL_VALUE.toString());
});

test('passing additional props', () => {
    render(
        <SearchResultsList data-test="foo">
        </SearchResultsList>
    );

    const searchResultsList = screen.getByRole('list');
    expect(searchResultsList?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SearchResultsList className="foo">
        </SearchResultsList>
    );

    const searchResultsList = screen.getByRole('list');
    expect(searchResultsList).toHaveClass('foo');
});
