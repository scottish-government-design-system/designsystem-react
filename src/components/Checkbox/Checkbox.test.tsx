import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('individual checkbox renders correctly', () => {
    render(
        <Checkbox label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');
    const checkboxContainer = checkbox.parentElement;
    const label = screen.getByText('Pension Credit');

    expect(checkboxContainer).toHaveClass('ds_checkbox');
    expect(checkbox.tagName).toEqual('INPUT');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox.id).toEqual('pensioncredit');
    expect(checkbox).toHaveAttribute('name', checkbox.id);
    expect(checkbox).toHaveClass('ds_checkbox__input');
    expect(label).toHaveAttribute('for', checkbox.id);
    expect(checkbox).not.toHaveAttribute('aria-describedby');
    expect(label).toHaveClass('ds_checkbox__label');
});

test('checked checkbox', () => {
    render(
        <Checkbox checked label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('checked')
});

test('exclusive checkbox', () => {
    render(
        <Checkbox isExclusive label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');
    const separator = checkbox.parentElement?.previousSibling;

    expect(checkbox).toHaveAttribute('data-behaviour', 'exclusive');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('ds_checkbox-separator');
    expect(separator?.textContent).toEqual('or');
});

test('checkbox with blur fn', () => {
    const ONBLUR_FUNCTION = vi.fn();

    render(
        <Checkbox onBlur={ONBLUR_FUNCTION} label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.blur(checkbox);

    expect(ONBLUR_FUNCTION).toHaveBeenCalled();
});

test('checkbox with change fn', () => {
    const ONCHANGE_FUNCTION = vi.fn();

    render(
        <Checkbox onChange={ONCHANGE_FUNCTION} label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(ONCHANGE_FUNCTION).toHaveBeenCalled();
});

test('checkbox with hint text', () => {
    render(
        <Checkbox hintText="hint text" label="Pension Credit" id="pensioncredit" />
    );

    const hintText = screen.getByText('hint text');
    const checkbox = screen.getByRole('checkbox');

    expect(hintText).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('aria-describedby', hintText.id);
});

test('small checkbox', () => {
    render(
        <Checkbox isSmall label="Pension Credit" id="pensioncredit" />
    );

    const checkbox = screen.getByRole('checkbox');
    const checkboxContainer = checkbox.parentElement;

    expect(checkboxContainer).toHaveClass('ds_checkbox--small');
});
