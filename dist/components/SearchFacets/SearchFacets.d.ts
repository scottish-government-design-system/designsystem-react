import React from 'react';
import { SearchFacetsGroupProps, SearchFacetsItemProps, SearchFacetsProps } from './types';
declare const Facets: {
    ({ children, className, ...props }: SearchFacetsProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ accessibleName, joinContent, onClick, title, ...props }: SearchFacetsItemProps): React.JSX.Element;
        displayName: string;
    };
    Group: {
        ({ children, joinContent, title, ...props }: SearchFacetsGroupProps): React.JSX.Element;
        displayName: string;
    };
};
export default Facets;
