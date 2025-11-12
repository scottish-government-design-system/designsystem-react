import React from 'react';
declare const SiteFooter: {
    ({ children, className, ...props }: SGDS.Component.SiteFooter): React.JSX.Element;
    Links: {
        ({ children, ...props }: SGDS.Component.SiteFooter.Links): React.JSX.Element;
        displayName: string;
    };
    Link: {
        ({ children, href, linkComponent, ...props }: SGDS.Component.SiteFooter.Link): React.JSX.Element;
        displayName: string;
    };
    License: {
        ({ children, ...props }: SGDS.Component.SiteFooter.License): React.JSX.Element;
        displayName: string;
    };
    Org: {
        ({ href, title, children, ...props }: SGDS.Component.SiteFooter.Org): React.JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export default SiteFooter;
