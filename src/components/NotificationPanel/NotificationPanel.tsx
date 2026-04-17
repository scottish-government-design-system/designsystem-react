import WrapperTag from '../../common/WrapperTag';
import { NotificationPanelProps } from './types';
import clsx from 'clsx';

const NotificationPanel = function ({
    ariaLive,
    children,
    className,
    headingLevel = 'h1',
    title,
    ...props
}: NotificationPanelProps) {
    return (
        <div
            aria-live={ariaLive}
            className={clsx([
                'ds_notification-panel',
                className
            ])}
            {...props}
        >
            <WrapperTag
                className="ds_notification-panel__title"
                tagName={headingLevel}
            >
                {title}
            </WrapperTag>
            <div className="ds_notification-panel__content">
                {children}
            </div>
        </div>
    );
};

NotificationPanel.displayName = 'NotificationPanel';

export default NotificationPanel;
