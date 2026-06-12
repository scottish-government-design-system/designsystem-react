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
import { AbstractNotificationMessageProps } from '../../common/AbstractNotificationMessage/types';
declare const ConfirmationMessage: {
    ({ ariaLive, children, className, headingLevel, isDismissable, title, ...props }: AbstractNotificationMessageProps): import("react").JSX.Element;
    displayName: string;
};
export default ConfirmationMessage;
