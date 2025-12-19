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
// @ts-expect-error no types from core SGDS
const hide_this_page_1 = __importDefault(require("@scottish-government/design-system/src/components/hide-this-page/hide-this-page"));
const HideThisPage = ({ className, escapeUrl = 'https://www.bbc.co.uk/weather', ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new hide_this_page_1.default().init();
            const HIDE_THIS_PAGE_DIV_ID = 'hide-this-page-instruction';
            if (!document.getElementById(HIDE_THIS_PAGE_DIV_ID)) {
                const htpDiv = document.createElement('div');
                htpDiv.id = HIDE_THIS_PAGE_DIV_ID;
                htpDiv.classList.add('visually-hidden');
                htpDiv.classList.add('ds_hide-page');
                htpDiv.innerHTML = '<p>To leave the page quickly, press the escape key.</p>';
                document.body.prepend(htpDiv);
            }
            document.body.classList.add('ds_has-hide-page');
        }
    }, [ref]);
    return (<div className={[
            'ds_hide-page',
            className
        ].join(' ')} ref={ref} {...props}>
            <a href={escapeUrl} className="ds_hide-page__button  ds_button  js-hide-page">
                <strong>Hide this page</strong>
                <span className="visually-hidden  js-enabled-text">Or press escape key to hide this page</span>
            </a>
            <p className="ds_hide-page__text  js-enabled-text">Or press Esc key</p>
        </div>);
};
HideThisPage.displayName = 'HideThisPage';
exports.default = HideThisPage;
