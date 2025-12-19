import { IconName } from '../../shared-types';

export interface AbstractNotificationBannerProps extends React.AllHTMLAttributes<HTMLDivElement> {
    hasIcon?: boolean;
    hasColourIcon?: boolean;
    hasInverseIcon?: boolean;
    icon?: IconName;
    isDismissable?: boolean;
    title?: string;
    ref?: React.Ref<HTMLDivElement>;
}

export interface AbstractNotificationBannerButtonsProps extends React.AllHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
