import ErrorMessage from '../ErrorMessage';
import HintText from '../../common/HintText'
import WrapperTag from '../../common/WrapperTag';
import { QuestionProps } from './types';

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
    return (
        <WrapperTag
            tagName={tagName}
            className={[
                'ds_question',
                hasError && 'ds_question--error',
                className
            ].join(' ')}
            {...props}
        >
            {legend && <legend>{legend}</legend>}
            {hintText && <HintText>{hintText}</HintText>}
            {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {children}
        </WrapperTag>
    );
};

Question.displayName = 'Question';

export default Question;
