"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfirmationNotification_1 = __importDefault(require("..//ConfirmationNotification"));
const ConfirmationMessage = ({ ariaLive, children, className, headingLevel, isDismissable, title, ...props }) => {
    return (<ConfirmationNotification_1.default ariaLive={ariaLive} className={className} headingLevel={headingLevel} isDismissable={isDismissable} title={title} {...props}>
            {children}
        </ConfirmationNotification_1.default>);
};
ConfirmationMessage.displayName = 'ConfirmationMessage';
exports.default = ConfirmationMessage;
