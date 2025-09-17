import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';

test('radio group renders correctly', () => {
    render(
        <RadioGroup name="foo" data-testid="radiogroup">
            <RadioButton id="banana" label="Banana" />
        </RadioGroup>
    );
    const radioGroup = screen.getByTestId('radiogroup');
    expect(radioGroup).toHaveClass('ds_radios', 'ds_field-group');
    expect(radioGroup).not.toHaveClass('ds_field-group--inline');

    const radio = screen.getByRole('radio');
    const radioContainer = radio.parentElement;
    expect(radioContainer).not.toHaveClass('ds_radio--small');
});

test('radio group passes all expected item params', () => {
    const RADIO_NAME = 'radioname';

    render(
        <RadioGroup name={RADIO_NAME} isSmall>
            <RadioButton id="banana" />
            <p>foo</p>
        </RadioGroup>
    );

    const radio = screen.getByRole('radio');
    const radioContainer = radio.parentElement;
    expect(radio).toHaveAttribute('name', RADIO_NAME);
    expect(radioContainer).toHaveClass('ds_radio--small');
});

test('inline radio group', () => {
    render(
        <RadioGroup isInline>
            <RadioButton id="banana" />
        </RadioGroup>
    );

    const radio = screen.getAllByRole('radio')[0];
    const groupContainer = radio.parentElement?.parentElement;
    expect(groupContainer).toHaveClass('ds_field-group--inline');
});

test('passing additional props', () => {
    render(
        <RadioGroup data-test="foo" data-testid="radiogroup"/>
    );

    const radioGroup = screen.getByTestId('radiogroup');
    expect(radioGroup?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <RadioGroup className="foo" data-testid="radiogroup"/>
    );

    const radioGroup = screen.getByTestId('radiogroup');
    expect(radioGroup).toHaveClass('foo');
});
