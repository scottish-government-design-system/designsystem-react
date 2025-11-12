export declare const FilterPanel: {
    ({ activeFilterCount, children, isScrollable, legend, heading, ...props }: SGDS.Component.SearchFilters.Panel): import("react").JSX.Element;
    displayName: string;
};
declare const Filters: {
    ({ children, searchResultsContainerId, ...props }: SGDS.Component.SearchFilters): import("react").JSX.Element;
    Panel: {
        ({ activeFilterCount, children, isScrollable, legend, heading, ...props }: SGDS.Component.SearchFilters.Panel): import("react").JSX.Element;
        displayName: string;
    };
    CheckboxGroup: {
        ({ children, ...props }: any): import("react").JSX.Element;
        displayName: string;
    };
};
export default Filters;
