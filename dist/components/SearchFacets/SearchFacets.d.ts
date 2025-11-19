import React from 'react';
declare const Facets: {
    ({ children, className, ...props }: SGDS.Component.SearchFacets): React.JSX.Element;
    displayName: string;
    Item: {
        ({ accessibleName, joinContent, onClick, title, ...props }: SGDS.Component.SearchFacets.Item): React.JSX.Element;
        displayName: string;
    };
    Group: {
        ({ children, joinContent, title, ...props }: SGDS.Component.SearchFacets.Group): React.JSX.Element;
        displayName: string;
    };
};
export default Facets;
