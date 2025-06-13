import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ContentsNav, {Link} from './contents-nav';

test('contents nav renders correctly', () => {
    const items = [
        {
            title: 'Apply for Blue Badge',
            current: true
        },
        {
            title: 'Eligibility',
            href: '#2'
        },
        {
            title: 'Using your Blue Badge',
            href: '#3'
        },
        {
            title: 'Report a lost, stolen or misuesd Blue Badge',
            href: '#4'
        },
        {
            title: 'Changing or handing back a Blue Badge',
            href: '#5'
        }
    ];

    const label = 'Pages in this guide';

    render(
        <ContentsNav label={label} items={items} />
    )

    const contentsNav = screen.getByRole('navigation');
    const contentsNavTitle = within(contentsNav).getByRole('heading');
    const contentsNavList = within(contentsNav).getByRole('list');

    expect(contentsNav).toHaveClass('ds_contents-nav');
    expect(contentsNav.ariaLabel).toEqual(label);
    expect(contentsNav.tagName).toEqual('NAV');
    expect(contentsNavTitle).toHaveClass('ds_contents-nav__title');
    expect(contentsNavTitle.textContent).toEqual('Contents');
    expect(contentsNavList).toHaveClass('ds_contents-nav__list');
    expect(contentsNavList.tagName).toEqual('UL');
    expect(contentsNavList.children.length).toEqual(items.length);
});

test('contents nav with custom title', () => {
    const title = 'My title';

    render(
        <ContentsNav title={title} items={[]} />
    );

    const contentsNav = screen.getByRole('navigation');
    const contentsNavTitle = within(contentsNav).getByRole('heading');
    expect(contentsNavTitle.textContent).toEqual(title);
});

test('contents nav item', () => {
    const href = '#foo';
    const content = 'My content';

    render(
        <Link href={href} title={content} />
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByRole('link');

    expect(listItem).toHaveClass('ds_contents-nav__item');
    expect(listItem.tagName).toEqual('LI');
    expect(link).toHaveClass('ds_contents-nav__link');
    expect(link.tagName).toEqual('A');
    expect(link.textContent).toEqual(content);
    expect(link).toHaveAttribute('href', href);
});

test('contents nav current item with href', () => {
    const href = '#foo';
    const content = 'My content';

    render(
        <Link current href={href} title={content} />
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(content);

    expect(listItem.ariaCurrent).toEqual('page');
    expect(link.tagName).toEqual('SPAN');
    expect(link).toHaveClass('ds_current');
});

test('contents nav current item without href', () => {
    const content = 'My content';

    render(
        <Link current title={content} />
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(content);

    expect(listItem.ariaCurrent).toEqual('page');
    expect(link.tagName).toEqual('SPAN');
    expect(link).toHaveClass('ds_current');
});

test('contents nav item without href', () => {
    const content = 'My content';

    render(
        <Link title={content} />
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(content);

    expect(link.tagName).toEqual('SPAN');
    expect(link).not.toHaveClass('ds_current');
});

test('passing additional props', () => {
    render(
        <ContentsNav data-test="foo" items={[
            {
                title: 'Apply for Blue Badge',
            }
        ]} />
    )

    const contentsNav = screen.getByRole('navigation');
    expect(contentsNav?.dataset.test).toEqual('foo');
});
