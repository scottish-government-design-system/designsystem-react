import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('individual radio renders correctly', () => {
    render(
        <RadioButton name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');
    const radioContainer = radio.parentElement;
    const label = screen.getByText('Pension Credit');

    expect(radioContainer).toHaveClass('ds_radio');
    expect(radioContainer).not.toHaveClass('ds_radio--small');
    expect(radio.tagName).toEqual('INPUT');
    expect(radio).toHaveAttribute('type', 'radio');
    expect(radio.id).toEqual('pensioncredit');
    expect(radio).toHaveAttribute('name', 'benefitType');
    expect(radio).toHaveClass('ds_radio__input');
    expect(label).toHaveAttribute('for', radio.id);
    expect(radio).not.toHaveAttribute('aria-describedby');
    expect(label).toHaveClass('ds_radio__label');
});

test('checked radio', () => {
    render(
        <RadioButton name="benefitType" checked label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');

    expect(radio).toHaveAttribute('checked')
});

test('radio with blur fn', () => {
    const ONBLUR_FUNCTION = vi.fn();

    render(
        <RadioButton onBlur={ONBLUR_FUNCTION} name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');

    fireEvent.blur(radio);

    expect(ONBLUR_FUNCTION).toHaveBeenCalled();
});

test('radio with change fn', () => {
    const ONCHANGE_FUNCTION = vi.fn();

    render(
        <RadioButton onChange={ONCHANGE_FUNCTION} name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');

    fireEvent.click(radio);

    expect(ONCHANGE_FUNCTION).toHaveBeenCalled();
});

test('radio with hint text', () => {
    render(
        <RadioButton hintText="hint text" name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const hintText = screen.getByText('hint text');
    const radio = screen.getByRole('radio');

    expect(hintText).toBeInTheDocument();
    expect(radio).toHaveAttribute('aria-describedby', hintText.id);
});

test('small radio', () => {
    render(
        <RadioButton isSmall name="benefitType" label="Pension Credit" id="pensioncredit" />
    );

    const radio = screen.getByRole('radio');
    const radioContainer = radio.parentElement;

    expect(radioContainer).toHaveClass('ds_radio--small');
});
