import ErrorMessage from '../ErrorMessage/ErrorMessage';
import HintText from '../../common/HintText';
import WrapperTag from '../../common/WrapperTag';

const Question = function ({
    children,
    className,
    errorMessage,
    hasError,
    hintText,
    legend,
    tagName = 'div',
    ...props
}: SGDS.Component.Question) {
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
            {hintText && <HintText text={hintText} />}
            {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {children}
        </WrapperTag>
    );
};

Question.displayName = 'Question';

export default Question;
