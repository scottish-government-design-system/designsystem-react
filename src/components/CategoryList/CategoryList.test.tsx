import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import CategoryList from './CategoryList';
import CategoryItem from '../CategoryItem/CategoryItem';

test('category list renders correctly', () => {
    render(
        <CategoryList>
            <CategoryItem data-testid="category-item" title="Public transport, bus passes and discounts" href="#foo">Find information about local travel by road, rail and water and National Entitlement Cards.</CategoryItem>
            <CategoryItem title="Parking and Blue Badges" href="#bar">Find out about getting a disabled parking space and information on Blue Badges.</CategoryItem>
            <CategoryItem title="Apply to reduce your driving disqualification period" href="#baz">How to apply to court to reduce your driving ban. Includes who can apply and how much it costs.</CategoryItem>
            <CategoryItem title="Road safety: parking tickets, fines and bans" href="#qux">Find out about the drink-drive limit, how to stay safe on the roads and what to do if you receive parking tickets.</CategoryItem>
        </CategoryList>
    );

    const categoryList = screen.getByRole('list');
    expect(categoryList).toHaveClass('ds_category-list');
    expect(categoryList).not.toHaveClass('ds_category-list--grid');
    expect(categoryList.tagName).toEqual('UL');

    const child = within(categoryList).getByTestId('category-item');
    expect(child.tagName).toEqual('LI');
});

test('ordered category list', () => {
    render(
        <CategoryList isOrdered data-test="foo" />
    );

    const categoryList = screen.getByRole('list');
    expect(categoryList.tagName).toEqual('OL');
});

test('grid category list', () => {
    render(
        <CategoryList isGrid data-test="foo" />
    );

    const categoryList = screen.getByRole('list');
    expect(categoryList).toHaveClass('ds_category-list--grid');
});

test('passing additional props', () => {
    render(
        <CategoryList data-test="foo" />
    );

    const categoryList = screen.getByRole('list');
    expect(categoryList.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <CategoryList className="foo" />
    );

    const categoryList = screen.getByRole('list');
    expect(categoryList).toHaveClass('foo');
});
