import { LinkComponent } from "../../shared-types";

export interface ContentsNavItemProps extends React.AllHTMLAttributes<HTMLElement> {
    isCurrent?: boolean;
    linkComponent?: LinkComponent;
}

export interface ContentsNavProps extends React.AllHTMLAttributes<HTMLElement> {
    ariaLabel: React.AriaAttributes['aria-label'];
    title: string;
}
