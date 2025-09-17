import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ContentsNav from './ContentsNav';

const ITEM_HREF = '#foo';
const ITEM_TITLE = 'My content';
const LABEL_TEXT = 'Pages in this guide';

test('contents nav renders correctly', () => {
    render(
        <ContentsNav ariaLabel={LABEL_TEXT}>
            <ContentsNav.Item>Apply for Blue Badge</ContentsNav.Item>
            <ContentsNav.Item href="#1">Eligibility</ContentsNav.Item>
            <ContentsNav.Item href="#2">Using your Blue Badge</ContentsNav.Item>
            <ContentsNav.Item href="#3">Report a lost, stolen or misuesd Blue Badge</ContentsNav.Item>
            <ContentsNav.Item href="#4">Changing or handing back a Blue Badge</ContentsNav.Item>
        </ContentsNav>
    )

    const contentsNav = screen.getByRole('navigation');
    const contentsNavTitle = within(contentsNav).getByRole('heading');
    const contentsNavList = within(contentsNav).getByRole('list');

    expect(contentsNav).toHaveClass('ds_contents-nav');
    expect(contentsNav.ariaLabel).toEqual(LABEL_TEXT);
    expect(contentsNav.tagName).toEqual('NAV');
    expect(contentsNavTitle).toHaveClass('ds_contents-nav__title');
    expect(contentsNavTitle.textContent).toEqual('Contents');
    expect(contentsNavList).toHaveClass('ds_contents-nav__list');
    expect(contentsNavList.tagName).toEqual('UL');
});

test('contents nav with custom title', () => {
    const TITLE_TEXT = 'My title';

    render(
        <ContentsNav title={TITLE_TEXT} />
    );

    const contentsNav = screen.getByRole('navigation');
    const contentsNavTitle = within(contentsNav).getByRole('heading');
    expect(contentsNavTitle.textContent).toEqual(TITLE_TEXT);
});

test('contents nav item', () => {
    render(
        <ContentsNav.Item href={ITEM_HREF}>{ITEM_TITLE}</ContentsNav.Item>
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByRole('link');

    expect(listItem).toHaveClass('ds_contents-nav__item');
    expect(listItem.tagName).toEqual('LI');
    expect(link).toHaveClass('ds_contents-nav__link');
    expect(link.tagName).toEqual('A');
    expect(link.textContent).toEqual(ITEM_TITLE);
    expect(link).toHaveAttribute('href', ITEM_HREF);
});

test('contents nav item without href', () => {
    render(
        <ContentsNav.Item>{ITEM_TITLE}</ContentsNav.Item>
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(ITEM_TITLE);

    expect(link.tagName).toEqual('SPAN');
    expect(link).not.toHaveClass('ds_current');
});

test('current contents nav item with href', () => {
    render(
        <ContentsNav.Item isCurrent href={ITEM_HREF}>{ITEM_TITLE}</ContentsNav.Item>
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(ITEM_TITLE);

    expect(link.tagName).toEqual('A');
    expect(link).toHaveClass('ds_current');
});

test('current contents nav item without href', () => {
    render(
        <ContentsNav.Item isCurrent>{ITEM_TITLE}</ContentsNav.Item>
    );

    const listItem = screen.getByRole('listitem');
    const link = within(listItem).getByText(ITEM_TITLE);

    expect(link.tagName).toEqual('SPAN');
    expect(link).toHaveClass('ds_current');
});

test('contents nav item with custom element', () => {
    render(
        <ContentsNav.Item href="category" linkComponent={
            ({ className, ...props }) => (
                <strong role="link" className={className} {...props}/>
            )}>
            {ITEM_TITLE}
        </ContentsNav.Item>
    );


    const item = screen.getByRole('listitem');
    const link = within(item).queryByRole('link');

    expect(link?.tagName).toEqual('STRONG');
    expect(link?.textContent).toEqual(ITEM_TITLE);
});

test('passing additional props', () => {
    render(
        <ContentsNav data-test="foo"/>
    )

    const contentsNav = screen.getByRole('navigation');
    expect(contentsNav?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ContentsNav className="foo"/>
    )

    const contentsNav = screen.getByRole('navigation');
    expect(contentsNav).toHaveClass('foo', 'ds_contents-nav');
});
