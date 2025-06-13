"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-ignore
const back_to_top_1 = __importDefault(require("@scottish-government/design-system/src/components/back-to-top/back-to-top"));
const icon_1 = __importDefault(require("../../common/icon"));
const BackToTop = ({ href = '#page-top', ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new back_to_top_1.default(ref.current).init();
        }
    }, [ref]);
    return (<div className='ds_back-to-top' ref={ref} {...props}>
            <a href={href} className="ds_back-to-top__button">Back to top
                <icon_1.default className="ds_back-to-top__icon" icon="arrow_upward"/>
            </a>
       </div>);
};
BackToTop.displayName = 'BackToTop';
exports.default = BackToTop;
