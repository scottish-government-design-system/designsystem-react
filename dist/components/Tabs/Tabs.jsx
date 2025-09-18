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
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
// @ts-ignore
const tabs_1 = __importDefault(require("@scottish-government/design-system/src/components/tabs/tabs"));
const TabItem = ({ isBorderless, children, className, id, tabLabel, ...props }) => {
    return (<div className={[
            'ds_tabs__content',
            !isBorderless && 'ds_tabs__content--bordered',
            className
        ].join(' ')} id={id} {...props}>
            {children}
        </div>);
};
const TabListItem = ({ children, href }) => {
    return (<li className="ds_tabs__tab">
            <a className="ds_tabs__tab-link" href={href}>{children}</a>
        </li>);
};
const Tabs = ({ baseId = 'tabs', children, className, headingLevel = 'h2', isBorderless, isManual = false, title = 'Contents', ...props }) => {
    const ref = (0, react_1.useRef)(null);
    const headingId = `${baseId}-heading`;
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new tabs_1.default(ref.current).init();
        }
    }, [ref]);
    const processedItems = react_1.Children.map(children, child => {
        const thisChild = child;
        if (thisChild && thisChild.type === TabItem) {
            return react_1.default.cloneElement(thisChild, {
                isBorderless: !!isBorderless,
                id: thisChild.props.id || `${baseId}-${(0, react_1.useId)()}`,
            });
        }
    });
    const tabListItems = react_1.Children.map(processedItems, child => {
        if (child && child.type === TabItem) {
            return <TabListItem href={`#${child.props.id}`}>{child.props.tabLabel}</TabListItem>;
        }
    });
    return (<div className={[
            'ds_tabs',
            isManual && 'ds_tabs--manual',
            className
        ].join(' ')} ref={ref} {...props}>
            <WrapperTag_1.default id={headingId} className="ds_tabs__title" tagName={headingLevel}>
                {title}
            </WrapperTag_1.default>

            <ul className="ds_tabs__list" aria-labelledby={headingId}>
                {tabListItems}
            </ul>

            {processedItems}
        </div>);
};
Tabs.displayName = 'Tabs';
TabItem.displayName = 'Tabs.Item';
Tabs.Item = TabItem;
exports.default = Tabs;
