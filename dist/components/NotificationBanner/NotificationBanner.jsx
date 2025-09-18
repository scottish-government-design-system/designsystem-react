"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AbstractNotificationBanner_1 = __importDefault(require("../../common/AbstractNotificationBanner"));
// @ts-ignore
const notification_banner_1 = __importDefault(require("@scottish-government/design-system/src/components/notification-banner/notification-banner"));
const NotificationBanner = ({ children, className, hasColourIcon, hasIcon, hasInverseIcon, isDismissable, title, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new notification_banner_1.default(ref.current).init();
        }
    }, [ref]);
    return (<AbstractNotificationBanner_1.default className={[
            'ds_reversed',
            className
        ].join(' ')} isDismissable={isDismissable} icon={hasIcon ? "PriorityHigh" : undefined} hasColourIcon={hasColourIcon} hasInverseIcon={hasInverseIcon} ref={ref} title="Information" {...props}>
            {children}
        </AbstractNotificationBanner_1.default>);
};
NotificationBanner.displayName = 'NotificationBanner';
NotificationBanner.Buttons = AbstractNotificationBanner_1.default.Buttons;
exports.default = NotificationBanner;
