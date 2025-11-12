import React from 'react';
declare const SummaryCard: {
    ({ children, className, headingLevel, title, ...props }: SGDS.Component.SummaryCard): React.JSX.Element;
    displayName: string;
    Action: {
        ({ children, describedby, href, linkComponent, onclick }: SGDS.Common.ActionLink): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
        displayName: string;
    };
};
export default SummaryCard;
