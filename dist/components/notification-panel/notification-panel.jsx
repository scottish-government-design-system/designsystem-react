"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper_tag_1 = __importDefault(require("../../common/wrapper-tag"));
const NotificationPanel = function ({ ariaLive, children, headerLevel = 'h1', title, ...props }) {
    return (<div aria-live={ariaLive} className="ds_notification-panel" {...props}>
            <wrapper_tag_1.default className="ds_notification-panel__title" tagName={headerLevel}>
                {title}
            </wrapper_tag_1.default>
            <div className="ds_notification-panel__content">
                {children}
            </div>
        </div>);
};
NotificationPanel.displayName = 'NotificationPanel';
exports.default = NotificationPanel;
