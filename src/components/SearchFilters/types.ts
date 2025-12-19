export interface SearchFiltersPanelProps extends  React.AllHTMLAttributes<HTMLElement> {
    activeFilterCount?: number;
    heading: string | React.ReactNode;
    isScrollable?: boolean;
    legend: string;
}

export interface SearchFiltersCheckboxGroupProps {
    children: React.ReactNode,
}

export interface SearchFiltersProps extends React.AllHTMLAttributes<HTMLElement> {
    searchResultsContainerId?: string;
}
