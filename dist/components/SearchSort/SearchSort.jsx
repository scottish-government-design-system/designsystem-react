"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("../Button"));
const Select_1 = __importDefault(require("../Select"));
const Option = ({ children, value }) => {
    return (<option value={value}>
            {children}
        </option>);
};
const SearchSort = ({ children, className, id = 'sort-by', label = 'Sort by', onApply, ...props }) => {
    return (<div className={[
            'ds_sort-options',
            className
        ].join(' ')} {...props}>
            <Select_1.default id={id} label={label}>
                {children}
            </Select_1.default>

            <Button_1.default onClick={onApply} isSmall buttonStyle="secondary" type="submit">Apply sort</Button_1.default>
        </div>);
};
SearchSort.displayName = 'SearchSort';
Option.displayName = 'SearchSort.Option';
SearchSort.Option = Option;
exports.default = SearchSort;
