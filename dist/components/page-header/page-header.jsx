"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PageHeader = ({ children, label, title, ...props }) => {
    return (<header className="ds_page-header" {...props}>
            {label && <span className="ds_page-header__label  ds_content-label">{label}</span>}
            <h1 className="ds_page-header__title">{title}</h1>

            {children}
        </header>);
};
PageHeader.displayName = 'PageHeader';
exports.default = PageHeader;
