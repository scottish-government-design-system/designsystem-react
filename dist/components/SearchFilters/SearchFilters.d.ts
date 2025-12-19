import { SearchFiltersPanelProps, SearchFiltersCheckboxGroupProps, SearchFiltersProps } from "./types";
export declare const FilterPanel: {
    ({ activeFilterCount, children, isScrollable, legend, heading, ...props }: SearchFiltersPanelProps): import("react").JSX.Element;
    displayName: string;
};
declare const Filters: {
    ({ children, searchResultsContainerId, ...props }: SearchFiltersProps): import("react").JSX.Element;
    Panel: {
        ({ activeFilterCount, children, isScrollable, legend, heading, ...props }: SearchFiltersPanelProps): import("react").JSX.Element;
        displayName: string;
    };
    CheckboxGroup: {
        ({ children, ...props }: SearchFiltersCheckboxGroupProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default Filters;
