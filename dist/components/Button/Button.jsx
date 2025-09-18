"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = __importDefault(require("../../common/Icon"));
const ScreenReaderText_1 = __importDefault(require("../../common/ScreenReaderText"));
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const Button = ({ buttonStyle, children, className, icon, hasLinkStyle, href, isIconLeft, isIconOnly = false, isSmall, type = 'button', width, ...props }) => {
    // determine which HTML tag to use
    let tagName = 'button';
    if (href) {
        tagName = 'a';
    }
    return (<WrapperTag_1.default tagName={tagName} className={[
            !hasLinkStyle ? 'ds_button' : 'ds_link',
            width && `ds_button--${width}`,
            buttonStyle && `ds_button--${buttonStyle}`,
            isSmall && 'ds_button--small',
            (icon && !isIconOnly) ? 'ds_button--has-icon' : undefined,
            isIconLeft && 'ds_button--has-icon--left',
            className
        ].join(' ')} href={href} {...(tagName === 'button' ? { type: type } : {})} {...props}>
            {isIconOnly ? <ScreenReaderText_1.default>{children}</ScreenReaderText_1.default> : children}

            {icon && <Icon_1.default icon={icon}/>}
        </WrapperTag_1.default>);
};
Button.displayName = 'Button';
exports.default = Button;
