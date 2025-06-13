"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icon_1 = __importDefault(require("../../common/icon"));
const screen_reader_text_1 = __importDefault(require("../../common/screen-reader-text"));
const wrapper_tag_1 = __importDefault(require("../../common/wrapper-tag"));
const Button = ({ children, buttonStyle, icon, iconLeft, iconOnly = false, href, small, styleAsLink, type = 'button', width, ...props }) => {
    // determine which HTML tag to use
    let tagName = 'button';
    if (href) {
        tagName = 'a';
    }
    return (<wrapper_tag_1.default tagName={tagName} className={[
            !styleAsLink ? 'ds_button' : 'ds_link',
            width && `ds_button--${width}`,
            buttonStyle && `ds_button--${buttonStyle}`,
            small && 'ds_button--small',
            (icon && !iconOnly) ? 'ds_button--has-icon' : undefined,
            iconLeft && 'ds_button--has-icon--left'
        ].join(' ')} href={href} {...(tagName === 'button' ? { type: type } : {})} {...props}>
            {iconOnly ? <screen_reader_text_1.default>{children}</screen_reader_text_1.default> : children}

            {icon && <icon_1.default icon={icon}/>}
        </wrapper_tag_1.default>);
};
Button.displayName = 'Button';
exports.default = Button;
