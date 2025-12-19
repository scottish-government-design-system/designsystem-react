import { LinkComponent } from "../../shared-types";

export interface SequentialNavigationLinkProps extends React.AllHTMLAttributes<HTMLDivElement> {
    href: string;
    isPrev?: boolean;
    linkComponent?: LinkComponent;
    textLabel?: string;
}

export interface SequentialNavigationProps extends React.AllHTMLAttributes<HTMLElement> {
    ariaLabel?: React.AriaAttributes['aria-label'];
}
