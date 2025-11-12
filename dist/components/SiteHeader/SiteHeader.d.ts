import React from 'react';
declare const SiteHeader: {
    ({ children, ...props }: SGDS.Component.SiteHeader): React.JSX.Element;
    Brand: {
        ({ children, homeUrl, linkComponent, siteTitle }: SGDS.Component.SiteHeader.Brand): React.JSX.Element;
        displayName: string;
    };
    Navigation: {
        ({ children }: any): any;
        displayName: string;
    };
    Phase: {
        ({ children }: any): any;
        displayName: string;
    };
    Search: {
        ({ children }: any): any;
        displayName: string;
    };
    displayName: string;
};
export default SiteHeader;
