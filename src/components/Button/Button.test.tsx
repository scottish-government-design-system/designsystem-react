import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Button from './Button';

test('renders correctly', () => {
    render(
        <Button>Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('ds_button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button.tagName).toEqual('BUTTON');
    expect(button.textContent).toEqual('Button text');
});

test('secondary button', () => {
    render(
        <Button buttonStyle="secondary">Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('ds_button--secondary');
});

test('disabled button', () => {
    render(
        <Button disabled>Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('disabled');
});

test('fixed-width button', () => {
    render(
        <Button width="fixed">Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('ds_button--fixed');
});

test('max-width button', () => {
    render(
        <Button width="max">Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('ds_button--max');
});

test('small button', () => {
    render(
        <Button isSmall>Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('ds_button--small');
});

test('button with icon', () => {
    render(
        <Button icon="ChevronRight">Button text</Button>
    );

    const button = screen.getByRole('button');
    const icon = within(button).getByRole('img', { hidden: true });

    expect(button).toHaveClass('ds_button--has-icon');
    expect(icon).toBeInTheDocument();
});

test('button with icon (left)', () => {
    render(
        <Button icon="ChevronLeft" isIconLeft>Button text</Button>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass('ds_button--has-icon', 'ds_button--has-icon--left');
});

test('button only icon', () => {
    render(
        <Button icon="Search" isIconOnly>Button text</Button>
    );

    const button = screen.getByRole('button');
    const buttonText = within(button).getByText('Button text');

    expect(button).not.toHaveClass('ds_button--has-icon');
    expect(buttonText).toHaveClass('visually-hidden');
});

test('link styled as button', () => {
    render(
        <Button href="#foo">Button text</Button>
    );

    const button = screen.getByRole('link');
    expect(button.tagName).toEqual('A');
    expect(button).toHaveAttribute('href', '#foo');
    expect(button).not.toHaveAttribute('type');
});

test('button styled as link', () => {
    render(
        <Button hasLinkStyle>Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('ds_link');
    expect(button).not.toHaveClass('ds_button');
    expect(button.tagName).toEqual('BUTTON');
});

test('passing additional props', () => {
    render(
        <Button data-test="foo">Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Button className="foo">Button text</Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('foo', 'ds_button');
});
