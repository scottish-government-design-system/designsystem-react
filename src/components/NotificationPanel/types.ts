import { HeadingLevel } from '../../shared-types';

export interface NotificationPanelProps extends React.AllHTMLAttributes<HTMLDivElement> {
    ariaLive?: React.AriaAttributes['aria-live'];
    headingLevel?: HeadingLevel;
    title: string;
}
