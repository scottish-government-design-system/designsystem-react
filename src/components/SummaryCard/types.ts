import { HeadingLevel } from '../../shared-types';

export interface SummaryCardProps extends React.AllHTMLAttributes<HTMLElement> {
    headingLevel?: HeadingLevel;
    title: string;
}
