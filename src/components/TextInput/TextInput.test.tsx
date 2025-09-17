import { test, expect, vi } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

const INPUT_ID = 'text-input';
const LABEL_TEXT = 'First name';

test('text input renders correctly', () => {
    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
        />
    );

    const textInput = screen.getByRole('textbox');
    const label = screen.getByText(LABEL_TEXT);

    expect(textInput).toHaveClass('ds_input');
    expect(textInput).toHaveAttribute('id', INPUT_ID);
    expect(textInput).toHaveAttribute('name', INPUT_ID);
    expect(textInput).toHaveAttribute('type', 'text');
    expect(textInput.tagName).toEqual('INPUT');

    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', INPUT_ID);
    expect(label.tagName).toEqual('LABEL');
    expect(label.textContent).toEqual(LABEL_TEXT);

    expect(textInput.previousSibling).toEqual(label);
});

test('text input with custom class(es)', () => {
    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            className="foo bar"
        />
    );

    const textInput = screen.getByRole('textbox');

    expect(textInput).toHaveClass('ds_input', 'foo', 'bar');
});

test('text input with character count', () => {
    const MAX_LENGTH = 100;

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            maxlength={MAX_LENGTH}
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentElement;

    expect(textInputWrapper).toHaveAttribute('data-maxlength', MAX_LENGTH.toString());
    expect(textInputWrapper).toHaveAttribute('data-module', 'ds-character-count');
});

test('text input with character count and threshold', () => {
    const MAX_LENGTH = 100;
    const COUNT_THRESHOLD = 80;

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            maxlength={MAX_LENGTH}
            countThreshold={COUNT_THRESHOLD}
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentElement;

    expect(textInputWrapper).toHaveAttribute('data-threshold', COUNT_THRESHOLD.toString());
});

test('text input with width', () => {
    const INPUT_WIDTH = 'fixed-10';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            width={INPUT_WIDTH}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveClass(`ds_input--${INPUT_WIDTH}`);
});

test('text input with currency', () => {
    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            isCurrency
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentElement;

    expect(textInputWrapper?.tagName).toEqual('DIV')
    expect(textInputWrapper).toHaveClass('ds_currency-wrapper');
    expect(textInputWrapper).not.toHaveAttribute('data-symbol');
});

test('text input with custom currency symbol', () => {
    const CURRENCY_SYMBOL = '@';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            currencySymbol={CURRENCY_SYMBOL}
            isCurrency
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentElement;

    expect(textInputWrapper).toHaveAttribute('data-symbol', CURRENCY_SYMBOL);
});

test('text input with button', () => {
    const BUTTON_TEXT = 'Search';
    const BUTTON_ICON = 'Search';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            buttonIcon={BUTTON_ICON}
            buttonText={BUTTON_TEXT}
            hasButton
        />
    );

    const textInput = screen.getByRole('textbox');
    const textInputWrapper = textInput.parentElement;
    const button = screen.getByRole('button');
    const buttonTextElement = within(button).getByText(BUTTON_TEXT);
    const buttonIconElement = within(button).getByRole('img', { hidden: true });

    expect(textInputWrapper).toHaveClass('ds_input__wrapper', 'ds_input__wrapper--has-icon ');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('ds_button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button.tagName).toEqual('BUTTON');
    expect(buttonTextElement).toHaveClass('visually-hidden');
    expect(buttonTextElement.tagName).toEqual('SPAN');

    expect(buttonIconElement).toBeInTheDocument();
});

test('text input with hint text', () => {
    const HINT_TEXT = 'hint text';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            hintText={HINT_TEXT}
        />
    );

    const hintTextEl = screen.getByText(HINT_TEXT);
    const textInput = screen.getByRole('textbox');

    expect(hintTextEl).toBeInTheDocument();
    expect(textInput).toHaveAttribute('aria-describedby', hintTextEl.id);
});

test('text input with custom name', () => {
    const INPUT_NAME = 'foo';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            name={INPUT_NAME}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('name', INPUT_NAME);
});

test('text input with blur function', () => {
    const ONBLUR_FUNCTION = vi.fn();

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            onBlur={ONBLUR_FUNCTION}
        />
    );

    const textInput = screen.getByRole('textbox');

    fireEvent.blur(textInput);

    expect(ONBLUR_FUNCTION).toHaveBeenCalled();
});

test('text input with change function', () => {
    const ONCHANGE_FUNCTION = vi.fn();

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            onChange={ONCHANGE_FUNCTION}
        />
    );

    const textInput = screen.getByRole('textbox');

    fireEvent.change(textInput, {target: {value: 'foo'}});

    expect(ONCHANGE_FUNCTION).toHaveBeenCalled();
});

test('text input with placeholder text', () => {
    const PLACEHOLDER_TEXT = 'foo';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            placeholder={PLACEHOLDER_TEXT}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('placeholder', PLACEHOLDER_TEXT);
});

test('text input with different type', () => {
    const INPUT_TYPE = 'foo';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            type={INPUT_TYPE}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('type', INPUT_TYPE);
});

test('text input with initial value', () => {
    const INITIAL_VALUE = 'initial value';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            value={INITIAL_VALUE}
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveAttribute('value', INITIAL_VALUE);
});

test('text input with error message', () => {
    const ERROR_MESSAGE_TEXT = 'This is a required field';

    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            errorMessage={ERROR_MESSAGE_TEXT}
            hasError
        />
    );

    const textInput = screen.getByRole('textbox');
    const errorMessageElement = screen.getByText(ERROR_MESSAGE_TEXT);

    expect(textInput).toHaveClass('ds_input--error')
    expect(textInput).toHaveAttribute('aria-describedby', errorMessageElement.id);
    expect(textInput).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
});

test('passing additional props', () => {
    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            data-test="foo"
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <TextInput
            id={INPUT_ID}
            label={LABEL_TEXT}
            className="foo"
        />
    );

    const textInput = screen.getByRole('textbox');
    expect(textInput).toHaveClass('foo', 'ds_input');
});
