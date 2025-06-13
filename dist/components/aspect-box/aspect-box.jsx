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
const aspect_box_fallback_1 = __importDefault(require("@scottish-government/design-system/src/components/aspect-box/aspect-box-fallback"));
const AspectBox = ({ children, ratio, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new aspect_box_fallback_1.default(ref.current).init();
        }
    }, [ref]);
    function processChild(child) {
        if (['img', 'svg', 'picture'].includes(child.type)) {
            return react_1.default.cloneElement(child, { className: 'ds_aspect-box__inner' });
        }
    }
    let ratioClassName;
    switch (ratio) {
        case '1:1':
        case 'square':
            ratioClassName = 'ds_aspect-box--square';
            break;
        case '4:3':
            ratioClassName = 'ds_aspect-box--43';
            break;
        case '21:9':
            ratioClassName = 'ds_aspect-box--219';
            break;
        default:
            ratioClassName = '';
            break;
    }
    return (<div className={[
            'ds_aspect-box',
            `${ratioClassName}`
        ].join(' ')} ref={ref} {...props}>
            {react_1.Children.map(children, child => processChild(child))}
        </div>);
};
AspectBox.displayName = 'AspectBox';
exports.default = AspectBox;
