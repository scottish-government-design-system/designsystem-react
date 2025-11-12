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
// @ts-ignore
const skip_links_1 = __importDefault(require("@scottish-government/design-system/src/components/skip-links/skip-links"));
const Link = ({ children, fragmentId }) => {
    return (<li className="ds_skip-links__item">
            <a href={`#${fragmentId}`} className="ds_skip-links__link">{children}</a>
        </li>);
};
const SkipLinks = ({ children, mainContentId = 'main-content', mainLinkText = 'Skip to main content', isStatic, ...props }) => {
    (0, react_1.useEffect)(() => {
        skip_links_1.default.init();
    });
    return (<div className={[
            'ds_skip-links',
            isStatic && 'ds_skip-links--static',
        ].join(' ')} {...props}>
            <ul className="ds_skip-links__list">
                {children ? children : <Link fragmentId={mainContentId}>{mainLinkText}</Link>}
            </ul>
        </div>);
};
SkipLinks.displayName = 'SkipLinks';
Link.displayName = 'SkipLinks.Link';
SkipLinks.Link = Link;
exports.default = SkipLinks;
