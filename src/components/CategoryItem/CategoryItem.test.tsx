import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CategoryItem from './CategoryItem';

const ITEM_TITLE = 'Bananas';
const ITEM_HREF = '#foo';
const ITEM_CONTENT = 'A banana is an elongated, edible fruit—botanically a berry—produced by several kinds of large treelike herbaceous flowering plants in the genus Musa.';

test('category item renders correctly', () => {
    render(
        <CategoryItem title={ITEM_TITLE} href={ITEM_HREF} data-testid="category-item">
            {ITEM_CONTENT}
        </CategoryItem>
    );

    const categoryItem = screen.getByTestId('category-item');
    const title = screen.getByRole('heading');
    const link = screen.getByRole('link');
    const content = categoryItem.querySelector('p');

    expect(categoryItem).toHaveClass('ds_category-item');
    expect(categoryItem.tagName).toEqual('DIV');

    expect(title).toHaveClass('ds_category-item__title');
    expect(title.tagName).toEqual('H2');
    expect(title.textContent).toEqual(ITEM_TITLE);
    expect(title.parentElement).toEqual(categoryItem);

    expect(link).toHaveClass('ds_category-item__link');
    expect(link).toHaveAttribute('href', ITEM_HREF);
    expect(link.textContent).toEqual(ITEM_TITLE);
    expect(link.parentElement).toEqual(title);

    expect(content).toHaveClass('ds_category-item__summary');
    expect(content?.textContent).toEqual(ITEM_CONTENT);
    expect(content?.parentElement).toEqual(categoryItem);
});

test('custom heading level', () => {
    render(
        <CategoryItem title={ITEM_TITLE} href={ITEM_HREF} headingLevel="h3" data-testid="category-item">
            {ITEM_CONTENT}
        </CategoryItem>
    );

    const title = screen.getByRole('heading');
    expect(title.tagName).toEqual('H3');
});

test('custom element', () => {
    render(
        <CategoryItem title={ITEM_TITLE} href={ITEM_HREF} tagName="article" data-testid="category-item">
            {ITEM_CONTENT}
        </CategoryItem>
    );

    const categoryItem = screen.getByTestId('category-item');
    expect(categoryItem.tagName).toEqual('ARTICLE');
});

test('custom link component', () => {
    render(
        <CategoryItem title={ITEM_TITLE} href={ITEM_HREF} tagName="article" data-testid="category-item" linkComponent={
            ({ className, ...props }) => (
                <span role="link" className={className} {...props}/>
            )}>
            {ITEM_CONTENT}
        </CategoryItem>
    );

    const link = screen.getByRole('link');

    expect(link?.tagName).toEqual('SPAN');
    expect(link?.textContent).toEqual(ITEM_TITLE);
});

test('passing additional props', () => {
    render(
        <CategoryItem data-test="foo" data-testid="category-item"/>
    );

    const categoryItem = screen.getByTestId('category-item');
    expect(categoryItem?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <CategoryItem className="foo" data-testid="category-item"/>
    );

    const categoryItem = screen.getByTestId('category-item');
    expect(categoryItem).toHaveClass('foo');
});
