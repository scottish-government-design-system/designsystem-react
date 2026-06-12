import { HeadingLevel, IconName } from '../../shared-types';

export interface AbstractNotificationMessageProps extends React.AllHTMLAttributes<HTMLDivElement> {
    ariaLive?: React.AriaAttributes['aria-live'];
    headingLevel?: HeadingLevel;
    icon?: IconName;
    isDismissable?: boolean;
    title?: string;
    ref?: React.Ref<HTMLDivElement>;
}