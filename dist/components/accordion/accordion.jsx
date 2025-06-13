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
exports.AccordionItem = void 0;
const react_1 = __importStar(require("react"));
const wrapper_tag_1 = __importDefault(require("../../common/wrapper-tag"));
// @ts-ignore
const accordion_1 = __importDefault(require("@scottish-government/design-system/src/components/accordion/accordion"));
let accordionItemCounter = 0;
const AccordionItem = ({ children, headerLevel = 'h3', id: rawId, open = false, title, ...props }) => {
    accordionItemCounter = accordionItemCounter + 1;
    const processedId = rawId || `accordion-item-${accordionItemCounter}`;
    return (<div className="ds_accordion-item" id={processedId} {...props}>
            <input aria-labelledby={`panel-${processedId}-heading`} className={[
            'ds_accordion-item__control',
            'visually-hidden'
        ].join(' ')} defaultChecked={open} id={`${processedId}-control`} type="checkbox"/>
            <div className="ds_accordion-item__header">
                <wrapper_tag_1.default id={`panel-${processedId}-heading`} className="ds_accordion-item__title" tagName={headerLevel}>
                    {title}
                </wrapper_tag_1.default>
                <span className='ds_accordion-item__indicator'/>
                <label className="ds_accordion-item__label" htmlFor={`${processedId}-control`}>
                    <span className="visually-hidden">Show this section</span>
                </label>
            </div>
            <div className="ds_accordion-item__body">
                {children}
            </div>
        </div>);
};
exports.AccordionItem = AccordionItem;
const Accordion = ({ children, headerLevel = 'h3', hideOpenAll, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new accordion_1.default(ref.current).init();
        }
    }, [ref]);
    if (!children) {
        hideOpenAll = true;
    }
    function processChild(child) {
        return react_1.default.cloneElement(child, { headerLevel: headerLevel });
    }
    return (<div className='ds_accordion' ref={ref} {...props}>
            {!hideOpenAll && (<button className={[
                'ds_accordion__open-all',
                'ds_link',
                'js-open-all'
            ].join(' ')} type='button'>
                    Open all
                    {' '}
                    <span className="visually-hidden">sections</span>
                </button>)}

            {react_1.Children.map(children, child => processChild(child))}
        </div>);
};
Accordion.displayName = 'Accordion';
exports.AccordionItem.displayName = 'AccordionItem';
exports.default = Accordion;
