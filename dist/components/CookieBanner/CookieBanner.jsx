"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AbstractNotificationBanner_1 = __importDefault(require("../../common/AbstractNotificationBanner"));
// @ts-expect-error no types from core SGDS
const cookie_notification_js_1 = __importDefault(require("@scottish-government/design-system/src/components/cookie-notification/cookie-notification.js"));
const CookieBanner = ({ children, className, title = 'Information', ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new cookie_notification_js_1.default(ref.current).init();
        }
    }, [ref]);
    return (<>
            <AbstractNotificationBanner_1.default className={[
            'ds_notification--large',
            'ds_notification--cookie',
            'js-initial-cookie-content',
            className
        ].join(' ')} data-module="ds-cookie-notification" ref={ref} title={title} {...props}>
                {children}
            </AbstractNotificationBanner_1.default>
        </>);
};
CookieBanner.displayName = 'CookieBanner';
CookieBanner.Buttons = AbstractNotificationBanner_1.default.Buttons;
CookieBanner.Buttons.displayName = 'CookieBanner.Buttons';
exports.default = CookieBanner;
