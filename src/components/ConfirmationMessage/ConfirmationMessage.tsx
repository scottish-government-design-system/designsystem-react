/**
 * @deprecated
 *
 * This component has been deprecated, please use ConfirmationNotification instead
 *
 * Before:
 *
 * `<ConfirmationMessage />`
 *
 * After:
 *
 * `<ConfirmationNotification />`
 *
 * @deprecatedSince 1.1.0
 *
*/

import ConfirmationNotification from '..//ConfirmationNotification';
import { AbstractNotificationMessageProps } from '../../common/AbstractNotificationMessage/types';

const ConfirmationMessage = ({
    ariaLive,
    children,
    className,
    headingLevel,
    isDismissable,
    title,
    ...props
}: AbstractNotificationMessageProps) => {
    
    return (
        <ConfirmationNotification
            ariaLive={ariaLive}
            className={className}
            headingLevel={headingLevel}
            isDismissable={isDismissable}
            title={title}
            {...props}
        >
            {children}
        </ConfirmationNotification>
    );
};

ConfirmationMessage.displayName = 'ConfirmationMessage';

export default ConfirmationMessage;
