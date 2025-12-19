import React from 'react';
import { SummaryListItemProps, SummaryListProps } from './types';
import { ActionLinkProps } from '@/src/common/ActionLink/types';
declare const SummaryList: {
    ({ children, className, isBorderless, ...props }: SummaryListProps): React.JSX.Element;
    Action: {
        ({ children, describedby, href, linkComponent, onclick }: ActionLinkProps): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element | null | undefined;
        displayName: string;
    };
    Item: {
        ({ children, title }: SummaryListItemProps): React.JSX.Element;
        displayName: string;
    };
    Value: {
        ({ children }: React.AllHTMLAttributes<HTMLElement>): React.JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export default SummaryList;
