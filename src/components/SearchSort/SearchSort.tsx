import { AllHTMLAttributes } from "react";
import Button from "../Button";
import Select from "../Select";
import { SearchSortProps } from "./types";

const Option = ({
    children,
    value
}: AllHTMLAttributes<HTMLOptionElement>) => {
    return (
        <option value={value}>
            {children}
        </option>
    );
}

const SearchSort = ({
    children,
    className,
    id = 'sort-by',
    label = 'Sort by',
    onApply,
    ...props
}: SearchSortProps) => {
    return (
        <div
            className={[
                'ds_sort-options',
                className
            ].join(' ')}
            {...props}
        >
            <Select id={id} label={label}>
                {children}
            </Select>

            <Button onClick={onApply} isSmall buttonStyle="secondary" type="submit">Apply sort</Button>
        </div>
    );
};

SearchSort.displayName = 'SearchSort';
Option.displayName = 'SearchSort.Option';
SearchSort.Option = Option;

export default SearchSort;
