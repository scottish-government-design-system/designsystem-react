import React from 'react';
import { SiteHeaderBrandProps, SiteHeaderProps } from './types';
declare const SiteHeader: {
    ({ children, ...props }: SiteHeaderProps): React.JSX.Element;
    Brand: {
        ({ children, homeUrl, linkComponent, siteTitle }: SiteHeaderBrandProps): React.JSX.Element;
        displayName: string;
    };
    Navigation: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): React.ReactNode;
        displayName: string;
    };
    Phase: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): React.ReactNode;
        displayName: string;
    };
    Search: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): React.ReactNode;
        displayName: string;
    };
    displayName: string;
};
export default SiteHeader;
