import React from 'react';
import { TabsItemProps, TabsProps } from './types';
declare const Tabs: {
    ({ baseId, children, className, headingLevel, isBorderless, isManual, title, ...props }: TabsProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ isBorderless, children, className, id, tabLabel, ...props }: TabsItemProps): React.JSX.Element;
        displayName: string;
    };
};
export default Tabs;
