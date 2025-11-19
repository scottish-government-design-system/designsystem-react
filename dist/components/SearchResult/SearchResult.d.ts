declare const SearchResult: {
    ({ children, href, isPromoted, linkComponent, promotedTitle, title, ...props }: SGDS.Component.SearchResult): import("react").JSX.Element;
    Content: {
        ({ children }: SGDS.Component.SearchResult.Content): import("react").JSX.Element;
        displayName: string;
    };
    Context: {
        ({ children, title }: SGDS.Component.SearchResult.Context): import("react").JSX.Element;
        displayName: string;
    };
    ContextItem: {
        ({ children }: SGDS.Component.SearchResult.ContextItem): import("react").JSX.Element;
        displayName: string;
    };
    Media: {
        ({ children }: SGDS.Component.SearchResult.Media): import("react").JSX.Element;
        displayName: string;
    };
    Meta: {
        ({ children }: SGDS.Component.SearchResult.Meta): import("react").JSX.Element;
        displayName: string;
    };
    MetaItem: {
        ({ children, className, name, ...props }: SGDS.Component.Metadata.Item): import("react").JSX.Element;
        displayName: string;
    };
};
export default SearchResult;
