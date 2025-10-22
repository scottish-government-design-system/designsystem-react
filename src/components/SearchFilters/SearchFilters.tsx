import Accordion from "../Accordion/Accordion";
import Button from "../Button/Button";
import SkipLinks from "../SkipLinks/SkipLinks";
import ConditionalWrapper from "../../common/ConditionalWrapper";
import CheckboxGroup from "../Checkbox/CheckboxGroup";

export const FilterPanel = ({
    activeFilterCount = 0,
    children,
    isScrollable = false,
    legend,
    heading = 'Filter',
    ...props
}: SGDS.Component.SearchFilters.Panel) => {
    const headingWithCount = <>
        {heading}
        {activeFilterCount > 0 && <div className="ds_search-filters__filter-count">({activeFilterCount} selected)</div>}
    </>;

    return (
        <Accordion.Item heading={headingWithCount} {...props}>
            <fieldset>
                <legend className="visually-hidden">{legend}</legend>

                <ConditionalWrapper
                    condition={isScrollable}
                    wrapper={(children: React.JSX.Element) => <div className="ds_search-filters__scrollable">{children}</div>}
                >
                    {children}
                </ConditionalWrapper>
            </fieldset>
        </Accordion.Item>
    );
};

const FilterCheckboxGroup = ({
    children,
    ...props
}: any) => {
    return (
        <CheckboxGroup
            className="ds_search-filters__checkboxes"
            isSmall
            {...props}
        >
            {children}
        </CheckboxGroup>
    );
};

const Filters = ({
    children,
    searchResultsContainerId = 'search-results',
    ...props
}: SGDS.Component.SearchFilters) => {
    return (
        <div className="ds_search-filters" {...props}>
            <div className="ds_details  ds_no-margin" data-module="ds-details">
                <input id="filters-toggle" type="checkbox" className="ds_details__toggle  visually-hidden"/>
                <label htmlFor="filters-toggle" className="ds_details__summary">
                    Search filters
                </label>

                <SkipLinks isStatic>
                    <SkipLinks.Link fragmentId={searchResultsContainerId}>Skip to results</SkipLinks.Link>
                </SkipLinks>

                <div className="ds_details__text">
                    <form id="filters">
                        <h2 className="ds_search-filters__title  ds_h4">Filter by</h2>

                        <Accordion className="ds_!_margin-top--0" isSmall hideOpenAll>
                            {children}
                        </Accordion>

                        <Button isSmall width="max" className="ds_no-margin">Apply filter</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

Filters.Panel = FilterPanel;
Filters.CheckboxGroup = FilterCheckboxGroup;
FilterCheckboxGroup.displayName = 'Filters.CheckboxGroup';
FilterPanel.displayName = 'Filters.Panel';

export default Filters;
