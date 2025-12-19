import { LinkComponent } from "../../shared-types";

export interface SideNavigationListProps extends React.AllHTMLAttributes<HTMLUListElement> {
    isRoot?: boolean;
}

export interface SideNavigationItemProps extends React.AllHTMLAttributes<HTMLLIElement> {
    isCurrent?: boolean;
    href: string;
    linkComponent?: LinkComponent;
    title: string;
}

export interface SideNavigationProps extends React.AllHTMLAttributes<HTMLElement> {
    ariaLabel?: string;
}
