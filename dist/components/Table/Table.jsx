"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-expect-error no types from core SGDS
const table_1 = __importDefault(require("@scottish-government/design-system/src/components/table/table"));
const Table = ({ children, className, smallscreen, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new table_1.default().init();
        }
    }, [ref]);
    return (<table className={[
            'ds_table',
            className
        ].join(' ')} data-smallscreen={smallscreen} ref={ref} {...props}>
            {children}
        </table>);
};
Table.displayName = 'Table';
exports.default = Table;
