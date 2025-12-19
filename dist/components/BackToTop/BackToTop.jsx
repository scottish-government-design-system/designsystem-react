"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Icon_1 = __importDefault(require("../../common/Icon"));
// @ts-expect-error no types from core SGDS
const back_to_top_1 = __importDefault(require("@scottish-government/design-system/src/components/back-to-top/back-to-top"));
const BackToTop = ({ className, href = '#page-top', ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new back_to_top_1.default(ref.current).init();
        }
    }, [ref]);
    return (<div className={[
            'ds_back-to-top',
            className
        ].join(' ')} ref={ref} {...props}>
            <a href={href} className="ds_back-to-top__button">Back to top
                <Icon_1.default className="ds_back-to-top__icon" icon="ArrowUpward"/>
            </a>
       </div>);
};
BackToTop.displayName = 'BackToTop';
exports.default = BackToTop;
