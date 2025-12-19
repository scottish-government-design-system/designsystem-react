import React from 'react';
import { SiteFooterLicenseProps, SiteFooterLinkProps, SiteFooterOrgProps, SiteFooterProps } from './types';
declare const SiteFooter: {
    ({ children, className, ...props }: SiteFooterProps): React.JSX.Element;
    Links: {
        ({ children, ...props }: React.AllHTMLAttributes<HTMLUListElement>): React.JSX.Element;
        displayName: string;
    };
    Link: {
        ({ children, href, linkComponent, ...props }: SiteFooterLinkProps): React.JSX.Element;
        displayName: string;
    };
    License: {
        ({ children, ...props }: SiteFooterLicenseProps): React.JSX.Element;
        displayName: string;
    };
    Org: {
        ({ href, title, children, ...props }: SiteFooterOrgProps): React.JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export default SiteFooter;
