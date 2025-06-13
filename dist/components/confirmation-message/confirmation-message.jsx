"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icon_1 = __importDefault(require("../../common/icon"));
const wrapper_tag_1 = __importDefault(require("../../common/wrapper-tag"));
const ConfirmationMessage = ({ ariaLive = 'polite', children, headerLevel = 'h3', title }) => {
    return (<div aria-live={ariaLive} className="ds_confirmation-message">
            <icon_1.default className="ds_confirmation-message__icon" icon="check_circle" iconSize="24"/>

            <wrapper_tag_1.default className="ds_confirmation-message__title" tagName={headerLevel}>
                {title}
            </wrapper_tag_1.default>
            {children && <div className="ds_confirmation-message__body">
                {children}
            </div>}
        </div>);
};
ConfirmationMessage.displayName = 'ConfirmationMessage';
exports.default = ConfirmationMessage;
