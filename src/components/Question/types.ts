type QuestionTags = 'div' | 'fieldset';

export interface QuestionProps extends React.AllHTMLAttributes<HTMLElement> {
    errorMessage?: string;
    hasError?: boolean;
    hintText?: string;
    legend?: string;
    tagName: QuestionTags;
}
