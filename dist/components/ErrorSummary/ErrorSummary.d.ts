import { ErrorSummaryItemProps, ErrorSummaryProps } from './types';
declare const ErrorSummary: {
    ({ children, className, title, ...props }: ErrorSummaryProps): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, fragmentId, linkComponent }: ErrorSummaryItemProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default ErrorSummary;
