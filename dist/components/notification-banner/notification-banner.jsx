"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-ignore
const notification_banner_1 = __importDefault(require("@scottish-government/design-system/src/components/notification-banner/notification-banner"));
const button_1 = __importDefault(require("../button/button"));
const icon_1 = __importDefault(require("../../common/icon"));
const screen_reader_text_1 = __importDefault(require("../../common/screen-reader-text"));
const NotificationBanner = ({ children, close, icon, iconColour, iconInverse, title = 'Information', ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new notification_banner_1.default(ref.current).init();
        }
    }, [ref]);
    return (<div className="ds_notification  ds_reversed" data-module="ds-notification" ref={ref} {...props}>
            <div className="ds_wrapper">
                <div className={[
            'ds_notification__content',
            close && 'ds_notification__content--has-close'
        ].join(' ')}>
                    <h2 className="visually-hidden">{title}</h2>

                    {icon &&
            <span className={[
                    'ds_notification__icon',
                    iconInverse && 'ds_notification__icon--inverse',
                    iconColour && 'ds_notification__icon--colour'
                ].join(' ')} aria-hidden="true">
                            <icon_1.default icon="priority_high"/>
                        </span>}

                    <div className="ds_notification__text">
                        {children}
                    </div>

                    {close &&
            <button_1.default className="ds_notification__close js-close-notification">
                            <screen_reader_text_1.default>Close this notification</screen_reader_text_1.default>
                            <icon_1.default fill icon="close" aria-hidden="true"/>
                        </button_1.default>}
                </div>
            </div>
        </div>);
};
NotificationBanner.displayName = 'NotificationBanner';
exports.default = NotificationBanner;
