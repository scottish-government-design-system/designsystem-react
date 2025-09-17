import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

const ICON_NAME = 'Search';

test('icon renders correctly', () => {
    render(
        <Icon data-testid="icon"
            icon={ICON_NAME}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass('ds_icon');
    expect(icon).toHaveAttribute('aria-hidden');
    expect(icon).toHaveAttribute('role', 'img');
    expect(icon.tagName).toEqual('svg');
});

test('icon with class name', () => {
    const CLASSNAME = 'foo';

    render(
        <Icon data-testid="icon"
            icon={ICON_NAME}
            className={CLASSNAME}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass(CLASSNAME);
});

test('icon with fill', () => {
    render(
        <Icon data-testid="icon"
            icon={ICON_NAME}
            isFilled
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass('ds_icon--fill');
});

test('icon with size', () => {
    const ICON_SIZE = 48;

    render(
        <Icon data-testid="icon"
            icon={ICON_NAME}
            iconSize={ICON_SIZE}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveClass(`ds_icon--${ICON_SIZE}`);
});

test('icon with aria label', () => {
    const ARIA_LABEL = 'My icon';

    render(
        <Icon data-testid="icon"
            icon={ICON_NAME}
            ariaLabel={ARIA_LABEL}
        />
    );

    const icon = screen.getByRole('img', {hidden: true});

    expect(icon).toHaveAttribute('aria-label', ARIA_LABEL);
    expect(icon).not.toHaveAttribute('aria-hidden');
});
