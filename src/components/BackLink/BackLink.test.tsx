import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BackLink from './BackLink';

const LINK_HREF = '#home';
const DEFAULT_TEXT = 'Back';

test('back link renders correctly', () => {
    render(
        <BackLink href={LINK_HREF}/>
    );

    const backLink = screen.getByRole('link');

    expect(backLink).toHaveClass('ds_back-link');
    expect(backLink).toHaveAttribute('href', LINK_HREF);
    expect(backLink.tagName).toEqual('A');
    expect(backLink.textContent).toEqual(DEFAULT_TEXT);
});

test('renders back link with custom element', () => {
    render(
        <BackLink href={LINK_HREF} linkComponent={
            ({ className, ...props }) => (
                <span role="link" className={className} {...props}/>
            )}
        />
    );

    const backLink = screen.getByRole('link');

    expect(backLink.tagName).toEqual('SPAN');
    expect(backLink.textContent).toEqual(DEFAULT_TEXT);
});

test('renders back link as span if no href supplied (invalid use)', () => {
    render(
        <BackLink data-testid="no-href"/>
    );

    const backLink = screen.getByTestId('no-href');

    expect(backLink.tagName).toEqual('SPAN');
    expect(backLink.textContent).toEqual(DEFAULT_TEXT);
});

test('back link with custom link text', () => {
    const LINK_TEXT = 'my link text';

    render(
        <BackLink href={LINK_HREF}>
            {LINK_TEXT}
        </BackLink>
    );

    const backLink = screen.getByRole('link');

    expect(backLink).toHaveClass('ds_back-link');
    expect(backLink.textContent).toEqual(LINK_TEXT);
});

test('passing additional props', () => {
    render(
        <BackLink href={LINK_HREF} data-test="foo" />
    );

    const backLink = screen.getByRole('link');
    expect(backLink?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <BackLink href={LINK_HREF} className="foo" />
    );

    const backLink = screen.getByRole('link');
    expect(backLink).toHaveClass('foo');
});
