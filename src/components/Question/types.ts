type QuestionTags = 'div' | 'fieldset';

export interface QuestionProps extends React.AllHTMLAttributes<HTMLElement> {
    errorMessage?: string | React.ReactNode;
    hasError?: boolean;
    hintText?: string | React.ReactNode;
    legend?: string;
    tagName?: QuestionTags;
}
