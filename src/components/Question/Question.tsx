import { useId } from 'react';
import { ConditionalWrapper, HintText } from '../../common';
import ErrorMessage from '../ErrorMessage';
import { QuestionProps } from './types';
import clsx from 'clsx';

const Question = function ({
    children,
    className,
    errorMessage,
    hasError,
    hintText,
    legend,
    tagName = 'div',
    ...props
}: QuestionProps) {
    const errorMessageId = `error-message-${useId()}`
    const hintTextId = `hint-text-${useId()}`;
    const describedbys: string[] = [];

    if (hintText) { describedbys.push(hintTextId) };
    if (errorMessage) { describedbys.push(errorMessageId) };

    return (
        <div
            className={clsx([
            'ds_question',
            hasError && 'ds_question--error',
            className
            ])}
            {...props}
        >
            <ConditionalWrapper
                condition={tagName === 'fieldset'}
                wrapper={(children: React.JSX.Element) => <fieldset aria-describedby={describedbys.join(' ')}>{children}</fieldset>}
            >
                {legend && <legend>{legend}</legend>}
                {hintText && <HintText id={hintTextId}>{hintText}</HintText>}
                {hasError && errorMessage && <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>}
                {children}
            </ConditionalWrapper>
        </div>
    );
};

Question.displayName = 'Question';

export default Question;
