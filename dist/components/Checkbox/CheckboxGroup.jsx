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
exports.CheckboxGroup = void 0;
const react_1 = __importStar(require("react"));
const Checkbox_1 = __importDefault(require("./Checkbox"));
// @ts-ignore
const checkboxes_1 = __importDefault(require("@scottish-government/design-system/src/forms/checkbox/checkboxes"));
const CheckboxGroup = ({ children, className, small, ...props }) => {
    function processChild(child) {
        if (child && child.type === Checkbox_1.default) {
            return react_1.default.cloneElement(child, { small: small });
        }
        else {
            return child;
        }
    }
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new checkboxes_1.default(ref.current).init();
        }
    }, [ref]);
    return (<div className={[
            'ds_checkboxes',
            'ds_field-group',
            className
        ].join(' ')} data-module="ds-checkboxes" ref={ref} {...props}>
            {react_1.Children.map(children, child => processChild(child))}
        </div>);
};
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxGroup.displayName = 'CheckboxGroup';
exports.default = exports.CheckboxGroup;
