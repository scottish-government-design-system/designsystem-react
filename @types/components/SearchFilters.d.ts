declare namespace SGDS.Component {
    namespace SearchFilters {
        interface Panel extends  React.AllHTMLAttributes<HTMLElement> {
            activeFilterCount?: number,
            heading: string | React.ReactNode
            isScrollable?: boolean,
            legend: string,
        }
    }

    interface SearchFilters extends React.AllHTMLAttributes<HTMLElement> {
        searchResultsContainerId?: string
    }
}
