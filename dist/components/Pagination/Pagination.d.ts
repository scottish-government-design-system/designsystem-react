import { PaginationPageProps, PaginationProps } from "./types";
export declare const Page: ({ ariaLabel, children, className, href, isCurrent, linkComponent, onClick }: PaginationPageProps) => import("react").JSX.Element;
export declare const Ellipsis: () => import("react").JSX.Element;
declare const Pagination: {
    ({ ariaLabel, className, onClick, padding, page, pattern, totalPages, linkComponent, ...props }: PaginationProps): import("react").JSX.Element;
    displayName: string;
};
export default Pagination;
