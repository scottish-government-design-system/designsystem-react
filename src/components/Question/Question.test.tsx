import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Question from './Question';

test('question renders correctly (basic q, just a wrapper, invalid example)', () => {
    render(
        <Question>
        </Question>
    );

    const questionElement = document.querySelector('.ds_question');
    expect(questionElement).toBeInTheDocument();
    expect(questionElement?.tagName).toEqual('DIV');
});

test('fieldset question with legend', () => {
    const LEGEND_TEXT = 'My legend';

    render(
        <Question tagName="fieldset" legend={LEGEND_TEXT}>
        </Question>
    );

    const questionElement = screen.getByRole('group');
    const legendElement = within(questionElement).getByText(LEGEND_TEXT);
    expect(questionElement?.tagName).toEqual('FIELDSET');
    expect(legendElement.tagName).toEqual('LEGEND');
});

test('question with hint text', () => {
    const HINT_TEXT = 'My hint text';

    render(
        <Question hintText={HINT_TEXT}>
        </Question>
    );

    const questionElement = document.querySelector('.ds_question');
    const hintTextElement = screen.getByRole('paragraph');
    const firstQuestionChild = document.querySelector('.ds_question')?.childNodes[0]
    expect(hintTextElement).toHaveClass('ds_hint-text');
    expect(hintTextElement.textContent).toEqual(HINT_TEXT);
    expect(hintTextElement).toBe(firstQuestionChild);
    expect(hintTextElement).toHaveAttribute('id');
    expect(questionElement).not.toHaveAttribute('aria-describedby');
});

test('question with error', () => {
    const ERROR_MESSAGE_TEXT = 'My error message';

    render(
        <Question hasError errorMessage={ERROR_MESSAGE_TEXT}>
        </Question>
    );

    const questionElement = document.querySelector('.ds_question');
    const errorMessageElement = questionElement?.querySelector('.ds_question__error-message');

    expect(questionElement).toHaveClass('ds_question--error');
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement?.textContent).toEqual(ERROR_MESSAGE_TEXT);
});

test('fieldset question with hint text', () => {
    const HINT_TEXT = 'My hint text';

    render(
        <Question tagName="fieldset" hintText={HINT_TEXT}>
        </Question>
    );

    const questionElement = document.querySelector('.ds_question');
    const hintTextElement = screen.getByRole('paragraph');
    expect(hintTextElement).toHaveAttribute('id');
    expect(questionElement).toHaveAttribute('aria-describedby', hintTextElement.id);
});

test('fieldset question with error', () => {
    const ERROR_MESSAGE_TEXT = 'My error message';

    render(
        <Question tagName="fieldset" hasError errorMessage={ERROR_MESSAGE_TEXT}>
        </Question>
    );

    const questionElement = document.querySelector('.ds_question');
    const errorMessageElement = questionElement?.querySelector('.ds_question__error-message');
    expect(errorMessageElement).toHaveAttribute('id');
    expect(questionElement).toHaveAttribute('aria-describedby', errorMessageElement?.id);

});

test('passing additional props', () => {
    render(
        <Question data-test="foo">
        </Question>
    )

    const questionElement = document.querySelector('.ds_question') as HTMLElement;
    expect(questionElement?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Question className="foo">
        </Question>
    )

    const questionElement = document.querySelector('.ds_question');
    expect(questionElement).toHaveClass('foo', 'ds_question');
});
