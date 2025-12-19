import { AllHTMLAttributes } from "react";
import { SearchSortProps } from "./types";
declare const SearchSort: {
    ({ children, className, id, label, onApply, ...props }: SearchSortProps): import("react").JSX.Element;
    displayName: string;
    Option: {
        ({ children, value }: AllHTMLAttributes<HTMLOptionElement>): import("react").JSX.Element;
        displayName: string;
    };
};
export default SearchSort;
