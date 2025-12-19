import { LinkComponent } from "../../shared-types";

export interface SiteFooterLinkProps extends React.AllHTMLAttributes<HTMLLIElement> {
    href?: string;
    linkComponent?: LinkComponent;
}

export interface SiteFooterLicenseProps extends React.AllHTMLAttributes<HTMLDivElement> {
    href?: string;
    logoSrc?: string;
}

export interface SiteFooterOrgProps extends React.AllHTMLAttributes<HTMLDivElement> {
    href?: string;
    title: string;
}

export interface SiteFooterProps extends React.AllHTMLAttributes<HTMLElement> {
    className?: string;
}
