"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionLink = ({ children, describedby, href, linkComponent, onclick }) => {
    const CLASSNAME = 'ds_link';
    function processChildren(children) {
        if (linkComponent) {
            return linkComponent({ className: CLASSNAME, href, children, onClick: onclick, 'aria-describedby': describedby });
        }
        else if (href) {
            return <a aria-describedby={describedby} onClick={onclick} href={href} className={CLASSNAME}>{children}</a>;
        }
        else {
            return <button type="button" aria-describedby={describedby} onClick={onclick} className={CLASSNAME}>{children}</button>;
        }
    }
    return (processChildren(children));
};
ActionLink.displayName = 'ActionLink';
exports.default = ActionLink;
