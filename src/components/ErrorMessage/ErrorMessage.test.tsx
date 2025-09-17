import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

const ERROR_TEXT = 'Error message';
const ERROR_ID = 'errormessage';

test('error message renders correctly', () => {

    render(
        <ErrorMessage id={ERROR_ID}>{ERROR_TEXT}</ErrorMessage>
    );

    const errorMessageElement = screen.getByRole('paragraph');

    expect(errorMessageElement).toHaveAttribute('id', ERROR_ID);
    expect(errorMessageElement).toHaveClass('ds_question__error-message');
    expect(errorMessageElement.textContent).toEqual(ERROR_TEXT);
});

test('passing additional props', () => {
    render(
        <ErrorMessage data-test="foo" id={ERROR_ID}>{ERROR_TEXT}</ErrorMessage>
    )

    const errorMessageElement = screen.getByRole('paragraph');
    expect(errorMessageElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ErrorMessage className="foo" id={ERROR_ID}>{ERROR_TEXT}</ErrorMessage>
    )

    const errorMessageElement = screen.getByRole('paragraph');
    expect(errorMessageElement).toHaveClass('foo', 'ds_question__error-message');
});
