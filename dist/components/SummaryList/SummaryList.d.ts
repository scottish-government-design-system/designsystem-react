import React from 'react';
declare const SummaryList: {
    ({ children, className, isBorderless, ...props }: SGDS.Component.SummaryList): React.JSX.Element;
    Action: {
        ({ children, describedby, href, linkComponent, onclick }: SGDS.Common.ActionLink): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
        displayName: string;
    };
    Item: {
        ({ children, title }: SGDS.Component.SummaryList.Item): React.JSX.Element;
        displayName: string;
    };
    Value: {
        ({ children }: SGDS.Component.SummaryList.Answer): React.JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export default SummaryList;
