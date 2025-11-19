"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterPanel = void 0;
const Accordion_1 = __importDefault(require("../Accordion"));
const Button_1 = __importDefault(require("../Button"));
const SkipLinks_1 = __importDefault(require("../SkipLinks"));
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const Checkbox_1 = require("../Checkbox");
const FilterPanel = ({ activeFilterCount = 0, children, isScrollable = false, legend, heading = 'Filter', ...props }) => {
    const headingWithCount = <>
        {heading}
        {activeFilterCount > 0 && <div className="ds_search-filters__filter-count">({activeFilterCount} selected)</div>}
    </>;
    return (<Accordion_1.default.Item heading={headingWithCount} {...props}>
            <fieldset>
                <legend className="visually-hidden">{legend}</legend>

                <ConditionalWrapper_1.default condition={isScrollable} wrapper={(children) => <div className="ds_search-filters__scrollable">{children}</div>}>
                    {children}
                </ConditionalWrapper_1.default>
            </fieldset>
        </Accordion_1.default.Item>);
};
exports.FilterPanel = FilterPanel;
const FilterCheckboxGroup = ({ children, ...props }) => {
    return (<Checkbox_1.CheckboxGroup className="ds_search-filters__checkboxes" isSmall {...props}>
            {children}
        </Checkbox_1.CheckboxGroup>);
};
const Filters = ({ children, searchResultsContainerId = 'search-results', ...props }) => {
    return (<div className="ds_search-filters" {...props}>
            <div className="ds_details  ds_no-margin" data-module="ds-details">
                <input id="filters-toggle" type="checkbox" className="ds_details__toggle  visually-hidden"/>
                <label htmlFor="filters-toggle" className="ds_details__summary">
                    Search filters
                </label>

                <SkipLinks_1.default isStatic>
                    <SkipLinks_1.default.Link fragmentId={searchResultsContainerId}>Skip to results</SkipLinks_1.default.Link>
                </SkipLinks_1.default>

                <div className="ds_details__text">
                    <form id="filters">
                        <h2 className="ds_search-filters__title  ds_h4">Filter by</h2>

                        <Accordion_1.default className="ds_!_margin-top--0" isSmall hideOpenAll>
                            {children}
                        </Accordion_1.default>

                        <Button_1.default isSmall width="max" className="ds_no-margin">Apply filter</Button_1.default>
                    </form>
                </div>
            </div>
        </div>);
};
Filters.Panel = exports.FilterPanel;
Filters.CheckboxGroup = FilterCheckboxGroup;
FilterCheckboxGroup.displayName = 'Filters.CheckboxGroup';
exports.FilterPanel.displayName = 'Filters.Panel';
exports.default = Filters;
