import React, { useId } from 'react';
import ErrorMessage from '../ErrorMessage';
import HintText from '../../common/HintText'
import WrapperTag from '../../common/WrapperTag';
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
    const describedbys: string[] = [];

    const hintTextId = `hint-text-${useId()}`;
    const errorMessageId = `error-message-${useId()}`

    if (tagName === 'fieldset' && hintText) { describedbys.push(hintTextId) };
    if (tagName === 'fieldset' && errorMessage) { describedbys.push(errorMessageId) };

    return (
        <WrapperTag
            aria-describedby={describedbys.length ? describedbys.join(' ') : undefined}
            className={clsx([
                'ds_question',
                hasError && 'ds_question--error',
                className
            ])}
            tagName={tagName}
            {...props}
        >
            {legend && <legend>{legend}</legend>}
            {hintText && <HintText id={hintTextId}>{hintText}</HintText>}
            {hasError && errorMessage && <ErrorMessage id={errorMessageId}>{errorMessage}</ErrorMessage>}
            {children}
        </WrapperTag>
    );
};

Question.displayName = 'Question';

export default Question;
