import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SideNavigation from './SideNavigation';

test('side navigation renders correctly', () => {
    render(
        <SideNavigation>
            <SideNavigation.List isRoot>
                <SideNavigation.Item href="#apples" title="Apples">
                    <SideNavigation.List>
                        <SideNavigation.Item href="#green-apples" title="Green apples">
                            <SideNavigation.List>
                                <SideNavigation.Item href="#bramley" title="Bramley" isCurrent/>
                                <SideNavigation.Item href="#granny-smith" title="Granny smith"/>
                            </SideNavigation.List>
                        </SideNavigation.Item>
                        <SideNavigation.Item href="#red-apples" title="Red apples"/>
                    </SideNavigation.List>
                </SideNavigation.Item>
                <SideNavigation.Item href="#bananas" title="Bananas" />
                <SideNavigation.Item href="#cherries" title="Cherries" />
                <SideNavigation.Item href="#dates" title="Dates"/>
            </SideNavigation.List>
        </SideNavigation>
    );

    const sideNavigation = screen.getByRole('navigation');
    const toggle = within(sideNavigation).getByRole('checkbox');
    const label = document.querySelector('.ds_side-navigation__expand');
    const rootList = within(sideNavigation).getAllByRole('list')[0];

    expect(sideNavigation).toHaveClass('ds_side-navigation');
    expect(sideNavigation).toHaveAttribute('aria-label', 'Sections');

    expect(toggle).toHaveClass('fully-hidden', 'js-toggle-side-navigation');
    expect(toggle).toHaveAttribute('id', 'show-side-navigation');
    expect(toggle).toHaveAttribute('aria-controls', 'side-navigation-root');

    expect(label).toHaveClass('ds_link');
    expect(label).toHaveAttribute('for', toggle.id);
    expect(label?.textContent).toEqual('Show all Pages in this section');

    expect(rootList).toHaveAttribute('id', 'side-navigation-root');
});

test('side nav link renders correctly', () => {
    render(
        <SideNavigation.Item href="#green-apples" title="Green apples" />
    );

    const item = screen.getByRole('listitem');
    const link = within(item).getByRole('link');

    expect(item).toHaveClass('ds_side-navigation__item');

    expect(link).toHaveClass('ds_side-navigation__link');
    expect(link).toHaveAttribute('href', '#green-apples');
    expect(link.textContent).toEqual('Green apples');
});

test('current side nav item without link renders correctly', () => {
    render(
        <SideNavigation.Item href="#green-apples" title="Green apples" isCurrent />
    );

    const item = screen.getByRole('listitem');
    const span = within(item).getByText('Green apples');

    expect(span).toHaveClass('ds_side-navigation__link', 'ds_current');
    expect(span.tagName).toEqual('SPAN');
});

test('side nav link with children', () => {
    render(
        <SideNavigation.Item href="#green-apples" title="Green apples">
            <SideNavigation.List>
                <SideNavigation.Item href="#bramley" title="Bramley" />
            </SideNavigation.List>
        </SideNavigation.Item>
    );

    const childList = screen.getByRole('list');
    const childItem = within(childList).getByRole('listitem');
    const childLink = within(childItem).getByRole('link');

    expect(childList).toHaveClass('ds_side-navigation__list');

    // check properties of first child link
    expect(childItem).toHaveClass('ds_side-navigation__item');
    expect(childLink).toHaveClass('ds_side-navigation__link');
    expect(childLink).toHaveAttribute('href', '#bramley');
    expect(childLink.textContent).toEqual('Bramley');
});

test('side nav link with custom element', () => {
    const LINK_TEXT = 'Green apples'

    render(
        <SideNavigation.Item href="#green-apples" title={LINK_TEXT} linkComponent={
            ({ className, ...props }) => (
                <span role="link" className={className} {...props}/>
            )}/>
    );

    const item = screen.getByRole('listitem');
    const link = within(item).queryByRole('link');

    expect(link?.tagName).toEqual('SPAN');
    expect(link?.textContent).toEqual(LINK_TEXT);
});

test('passing additional props', () => {
    render(
        <SideNavigation data-test="foo" />
    );

    const sideNavigation = screen.getByRole('navigation');
    expect(sideNavigation?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SideNavigation className="foo" />
    );

    const sideNavigation = screen.getByRole('navigation');
    expect(sideNavigation).toHaveClass('foo', 'ds_side-navigation');
});
