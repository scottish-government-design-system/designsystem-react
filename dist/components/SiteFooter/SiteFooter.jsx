"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const License = ({ children, ...props }) => {
    return (<div className="ds_site-footer__copyright" {...props}>
            {children}
        </div>);
};
const Links = ({ children, ...props }) => {
    return (<ul className="ds_site-footer__site-items" {...props}>
            {children}
        </ul>);
};
const Link = ({ children, href, linkComponent, ...props }) => {
    function processChildren(children) {
        if (linkComponent) {
            return linkComponent({ href, children });
        }
        else if (href) {
            return <a href={href}>{children}</a>;
        }
        else {
            return children;
        }
    }
    return <li className="ds_site-items__item" {...props}>
        {processChildren(children)}
    </li>;
};
const Org = ({ href, title, children, ...props }) => {
    children = react_1.Children.map(children, child => {
        let thisChild = child;
        if (thisChild && ['img', 'svg', 'picture'].includes(thisChild.type)) {
            return react_1.default.cloneElement(thisChild, { className: 'ds_site-footer__org-logo' });
        }
        else {
            return child;
        }
    });
    return (<div className="ds_site-footer__org" {...props}>
            <ConditionalWrapper_1.default condition={typeof href !== 'undefined'} wrapper={(children) => <a className="ds_site-footer__org-link" title={title} href={href}>{children}</a>}>
                {children}
            </ConditionalWrapper_1.default>
        </div>);
};
const SiteFooter = ({ children, className, ...props }) => {
    return (<footer className={[
            "ds_site-footer",
            className
        ].join(' ')} {...props}>
            <div className="ds_wrapper">
                <div className="ds_site-footer__content">
                    {children}
                </div>
            </div>
        </footer>);
};
SiteFooter.Links = Links;
SiteFooter.Link = Link;
SiteFooter.License = License;
SiteFooter.Org = Org;
SiteFooter.displayName = 'SiteFooter';
Links.displayName = 'SiteFooter.Links';
Link.displayName = 'SiteFooter.Link';
License.displayName = 'SiteFooter.License';
Org.displayName = 'SiteFooter.Org';
exports.default = SiteFooter;
