import { SearchResultContextProps, SearchResultProps } from './types';
declare const SearchResult: {
    ({ children, href, isPromoted, linkComponent, promotedTitle, title, ...props }: SearchResultProps): import("react").JSX.Element;
    Content: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
        displayName: string;
    };
    Context: {
        ({ children, title }: SearchResultContextProps): import("react").JSX.Element;
        displayName: string;
    };
    ContextItem: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
        displayName: string;
    };
    Media: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
        displayName: string;
    };
    Meta: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): import("react").JSX.Element;
        displayName: string;
    };
    MetaItem: {
        ({ children, className, name, ...props }: import("../PageMetadata/types").MetdataItemProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default SearchResult;
