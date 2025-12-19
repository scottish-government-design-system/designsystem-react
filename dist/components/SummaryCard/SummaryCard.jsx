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
const WrapperTag_1 = __importDefault(require("../../common/WrapperTag"));
const SummaryCard = ({ children, className, headingLevel = 'h3', title, ...props }) => {
    const actions = [];
    const remainingChildren = [];
    const describedById = (0, react_1.useId)();
    react_1.Children.forEach(children, (child) => {
        const thisChild = child;
        if (thisChild && thisChild.type === ActionLink_1.default) {
            actions.push(react_1.default.cloneElement(thisChild, { describedby: describedById }));
        }
        else {
            remainingChildren.push(thisChild);
        }
    });
    return (<div className={[
            'ds_summary-card',
            className
        ].join(' ')} {...props}>
            <div className="ds_summary-card__header">
                <WrapperTag_1.default className="ds_summary-card__header-title" id={describedById} tagName={headingLevel}>{title}</WrapperTag_1.default>

                {actions &&
            <ConditionalWrapper_1.default condition={actions.length > 1} wrapper={(children) => <ul className="ds_summary-card__actions-list">{children}</ul>}>
                        {actions && actions.map((action, index) => (<ConditionalWrapper_1.default condition={actions.length > 1} wrapper={(children) => <li className="ds_summary-card__actions-list-item">{children}</li>} key={'action' + index}>
                                {action}
                            </ConditionalWrapper_1.default>))}
                    </ConditionalWrapper_1.default>}
            </div>
            <div className="ds_summary-card__content">
                {remainingChildren}
            </div>
        </div>);
};
SummaryCard.displayName = 'SummaryCard';
SummaryCard.Action = ActionLink_1.default;
SummaryCard.Action.displayName = 'SummaryCard.Action';
exports.default = SummaryCard;
