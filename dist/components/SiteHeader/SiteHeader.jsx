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
const Icon_1 = __importDefault(require("../../common/Icon"));
const SiteNavigation_1 = __importDefault(require("../SiteNavigation"));
// @ts-ignore
const site_navigation_1 = __importDefault(require("@scottish-government/design-system/src/components/site-navigation/site-navigation"));
const Brand = ({ children, homeUrl = '/', linkComponent, siteTitle }) => {
    function processChildren(children) {
        const image = react_1.default.cloneElement(children, { className: 'ds_site-branding__logo-image' });
        if (linkComponent) {
            return linkComponent({ className: 'ds_site-branding__logo  ds_site-branding__link', href: homeUrl, children: image });
        }
        else if (homeUrl) {
            return <a href={homeUrl} className="ds_site-branding__logo  ds_site-branding__link">{image}</a>;
        }
    }
    return (<>
            {processChildren(children)}

            {siteTitle &&
            <div className="ds_site-branding__title">
                    {siteTitle}
                </div>}
        </>);
};
const Navigation = ({ children }) => {
    return children;
};
const Phase = ({ children }) => {
    return children;
};
const Search = ({ children }) => {
    return children;
};
const SiteHeader = ({ children, ...props }) => {
    const mobileMenuRef = (0, react_1.useRef)(null);
    let branding;
    let navigation;
    let mobileNavigation;
    let phase;
    let search;
    // assign to slots
    react_1.Children.forEach(children, (child) => {
        const thisChild = child;
        if (thisChild && thisChild.type === Brand) {
            branding = thisChild;
        }
        else if (thisChild && thisChild.type === Navigation) {
            navigation = thisChild;
            if (thisChild.props.children.type === SiteNavigation_1.default) {
                mobileNavigation = react_1.default.cloneElement(thisChild.props.children, { className: 'ds_site-navigation--mobile', id: 'mobile-navigation', ref: mobileMenuRef });
            }
        }
        else if (thisChild && thisChild.type === Phase) {
            phase = thisChild;
        }
        else if (thisChild && thisChild.type === Search) {
            search = thisChild;
        }
    });
    (0, react_1.useEffect)(() => {
        if (mobileMenuRef.current) {
            new site_navigation_1.default(mobileMenuRef.current).init();
        }
    }, [mobileMenuRef]);
    return (<header className="ds_site-header" {...props}>
            <div className="ds_wrapper">
                <div className="ds_site-header__content">
                    <div className="ds_site-branding">
                        {branding}
                    </div>

                    {mobileNavigation &&
            <>
                            <div className="ds_site-header__controls">
                                <label aria-controls="mobile-navigation" className="ds_site-header__control  js-toggle-menu" htmlFor="menu">
                                    <span className="ds_site-header__control-text">Menu</span>
                                    <Icon_1.default isFilled className="ds_site-header__control-icon" icon="Menu" aria-hidden="true"/>
                                    <Icon_1.default isFilled className="ds_site-header__control-icon  ds_site-header__control-icon--active-icon" icon="Close" aria-hidden="true"/>
                                </label>
                            </div>

                            <input className="ds_site-navigation__toggle" id="menu" type="checkbox"/>
                        </>}

                    {mobileNavigation}

                    <div className="ds_site-header__search">{search}</div>
                </div>
            </div>

            {phase}

            {navigation &&
            <div className="ds_site-header__navigation">
                    <div className="ds_wrapper">
                        {navigation}
                    </div>
                </div>}
        </header>);
};
SiteHeader.Brand = Brand;
SiteHeader.Navigation = Navigation;
SiteHeader.Phase = Phase;
SiteHeader.Search = Search;
SiteHeader.displayName = 'SiteHeader';
Brand.displayName = 'SiteHeader.Brand';
Navigation.displayName = 'SiteHeader.Navigation';
Phase.displayName = 'SiteHeader.Phase';
Search.displayName = 'SiteHeader.Search';
exports.default = SiteHeader;
