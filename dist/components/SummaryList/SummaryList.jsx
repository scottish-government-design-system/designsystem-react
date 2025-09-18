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
const ActionLink_1 = __importDefault(require("../../common/ActionLink"));
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const Item = ({ children, title }) => {
    let values = [];
    let actions = [];
    const describedById = (0, react_1.useId)();
    react_1.Children.forEach(children, (child) => {
        const thisChild = child;
        if (thisChild && thisChild.type === Value) {
            values.push(thisChild);
        }
        else if (thisChild && thisChild.type === ActionLink_1.default) {
            actions.push(react_1.default.cloneElement(thisChild, { describedby: describedById }));
        }
    });
    return (<li className="ds_summary-list__item">
            <span className="ds_summary-list__key" id={describedById}>{title}</span>
            <span className="ds_summary-list__value">
                <ConditionalWrapper_1.default condition={values.length > 1} wrapper={(children) => <ul className="ds_no-bullets">{children}</ul>}>
                     {values && values.map((value, index) => (<ConditionalWrapper_1.default condition={values.length > 1} wrapper={(children) => <li>{children}</li>} key={'answer' + index}>
                            {value}
                        </ConditionalWrapper_1.default>))}
                </ConditionalWrapper_1.default>
            </span>
            {actions &&
            <div className="ds_summary-list__actions">
                    <ConditionalWrapper_1.default condition={actions.length > 1} wrapper={(children) => <ul className="ds_summary-list__actions-list">{children}</ul>}>
                        {actions && actions.map((action, index) => (<ConditionalWrapper_1.default condition={actions.length > 1} wrapper={(children) => <li className="ds_summary-list__actions-list-item">{children}</li>} key={'action' + index}>
                                {action}
                            </ConditionalWrapper_1.default>))}
                    </ConditionalWrapper_1.default>
                </div>}
        </li>);
};
const Value = ({ children }) => {
    return (<q className="ds_summary-list__answer">{children}</q>);
};
const SummaryList = ({ children, className, isBorderless, ...props }) => {
    return (<ol className={[
            'ds_summary-list',
            isBorderless && 'ds_summary-list--no-border',
            className
        ].join(' ')} {...props}>
           {children}
        </ol>);
};
SummaryList.Action = ActionLink_1.default;
SummaryList.Item = Item;
SummaryList.Value = Value;
SummaryList.displayName = 'SummaryList';
SummaryList.Action.displayName = 'SummaryList.Action';
Item.displayName = 'SummaryList.Item';
Value.displayName = 'SummaryList.Value';
exports.default = SummaryList;
