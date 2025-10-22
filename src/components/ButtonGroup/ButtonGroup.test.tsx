import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

test('renders correctly', () => {
    render(
        <ButtonGroup data-testid="button-group">
        </ButtonGroup>
    );

    const buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toBeInTheDocument();
    expect(buttonGroup).toHaveClass('ds_button-group');
    expect(buttonGroup.tagName).toEqual('DIV');
});

test('inline button group', () => {
    render(
        <ButtonGroup isInline data-testid="button-group">

        </ButtonGroup>
    );
    const buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toHaveClass('ds_button-group--inline');
});

test('passing additional props', () => {
    render(
        <ButtonGroup data-test="foo" data-testid="button-group">
        </ButtonGroup>
    );

    const buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ButtonGroup className="foo" data-testid="button-group">
        </ButtonGroup>
    );

    const buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toHaveClass('foo', 'ds_button-group');
});
