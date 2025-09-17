import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SiteNavigation from './SiteNavigation';

const LINK_HREF = '#about';
const LINK_TEXT = 'About';

test('renders correctly', () => {
    render(
        <SiteNavigation>
            <SiteNavigation.Item href="#about">About</SiteNavigation.Item>
            <SiteNavigation.Item href="#get-started">Get started</SiteNavigation.Item>
            <SiteNavigation.Item href="#styles">Styles</SiteNavigation.Item>
            <SiteNavigation.Item href="#components">Components</SiteNavigation.Item>
            <SiteNavigation.Item href="#patterns">Patterns</SiteNavigation.Item>
            <SiteNavigation.Item href="#guidance">Guidance</SiteNavigation.Item>
        </SiteNavigation>
    );

    const nav = screen.getByRole('navigation');
    const list = within(nav).getByRole('list');

    // check nav
    expect(nav).toHaveClass('ds_site-navigation');
    expect(nav.tagName).toEqual('NAV');

    // check list
    expect(list.tagName).toEqual('UL');
    expect(list).toHaveClass('ds_site-navigation__list');
});

test('site navigation link renders correctly', () => {
    render(
        <SiteNavigation.Item href={LINK_HREF}>{LINK_TEXT}</SiteNavigation.Item>
    );

    const listItem =screen.getByRole('listitem');
    const link = within(listItem).getByRole('link');

    expect(listItem).toHaveClass('ds_site-navigation__item');

    expect(link).toHaveClass('ds_site-navigation__link');
    expect(link).not.toHaveClass('ds_current');
    expect(link.textContent).toEqual(LINK_TEXT);
    expect(link).toHaveAttribute('href', LINK_HREF)
});

test('site navigation link with custom element', () => {
    render(
        <SiteNavigation.Item href={LINK_HREF} linkComponent={
            ({ className, ...props }) => (
                <strong role="link" className={className} {...props}/>
            )}>
            {LINK_TEXT}
        </SiteNavigation.Item>
    );

    const item = screen.getByRole('listitem');
    const link = within(item).queryByRole('link');

    expect(link?.tagName).toEqual('STRONG');
    expect(link?.textContent).toEqual(LINK_TEXT);
});

test('highlights current item', () => {
    render(
        <SiteNavigation.Item href={LINK_HREF} isCurrent>{LINK_TEXT}</SiteNavigation.Item>
    );

    const link = screen.getByRole('link');

    expect(link).toHaveClass('ds_current');
});

test('passing additional props', () => {
    render(
        <SiteNavigation data-test="foo"/>
    );

    const nav = screen.getByRole('navigation');
    expect(nav.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SiteNavigation className="foo"/>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('foo', 'ds_site-navigation');
});
