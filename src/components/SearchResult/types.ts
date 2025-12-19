import { LinkComponent } from "../../shared-types";

export interface SearchResultContextProps extends React.AllHTMLAttributes<HTMLDListElement> {
    title: string;
}

export interface SearchResultProps extends React.AllHTMLAttributes<HTMLElement> {
    href: string;
    isPromoted?: boolean;
    linkComponent?: LinkComponent;
    promotedTitle?: string;
    title: string;
}
