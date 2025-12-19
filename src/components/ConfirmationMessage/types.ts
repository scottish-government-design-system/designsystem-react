import { HeadingLevel } from '../../shared-types';

export interface ConfirmationMessageProps extends React.AllHTMLAttributes<HTMLElement> {
    ariaLive: React.AriaAttributes['aria-live'];
    headingLevel: HeadingLevel;
    title: string;
}
