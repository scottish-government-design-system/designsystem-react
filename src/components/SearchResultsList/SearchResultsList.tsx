import { SearchResultsListProps } from "./types";
import clsx from 'clsx';

const SearchResultsList = ({
    children,
    className,
    start,
    totalResults,
    ...props
}: SearchResultsListProps) => {
    return (
        <ol
            className={clsx([
                'ds_search-results__list',
                className
            ])}
            data-total={totalResults}
            start={start}
            {...props}
        >
            {children}
        </ol>
    );
};

SearchResultsList.displayName = 'SearchResultsList';

export default SearchResultsList;
