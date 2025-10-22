import React, { Children } from 'react';
import Icon from "../../common/Icon";
import { Cancel } from '../../../src/images/icons';

const FacetsItem = ({
    accessibleName,
    joinContent,
    onClick,
    title,
    ...props
}: SGDS.Component.SearchFacets.Item) => {
    accessibleName = accessibleName ? accessibleName : title;

    return (
        <dd className="ds_facet-wrapper" {...props}>
            {joinContent &&
                <span aria-hidden="true">{joinContent}</span>
            }
            <span className="ds_facet">
                {title}
                <button type="button" onClick={onClick} aria-label={`Remove '${accessibleName}' filter`} className="ds_facet__button">
                    <Icon className="ds_facet__button-icon" aria-hidden="true" role="img" icon="Cancel"/>
                </button>
            </span>
        </dd>
    );
}

const FacetsGroup = ({
    children,
    joinContent = 'or',
    title,
    ...props
}: SGDS.Component.SearchFacets.Group) => {
    return (
        <div className="ds_facet-group" {...props}>
            <dt className="ds_facet__group-title">
                {title.trim()}:
            </dt>
            {
                Children.map(children, (child, index) => {
                    const thisChild = child as React.ReactElement<SGDS.Component.SearchFacets.Item>
                    return React.cloneElement(thisChild, { joinContent: index > 0 ? joinContent : undefined, key: 'facet' + index });
                })
            }
        </div>
    )
}

const Facets = ({
    children,
    className,
    ...props
}: SGDS.Component.SearchFacets) => {
    let facetCount = 0;

    function processChild(item: any) {
        if (item.type.displayName === 'Facets.Item') {
            facetCount = facetCount + 1;

        } else if (item.type.displayName === 'Facets.Group') {
            Children.forEach(item.props.children, child => {
                processChild(child);
            });
        }
    }

    Children.forEach(children, child => {
        processChild(child);
    });

    return (
        <div className={[
                "ds_facets",
                className
            ].join(' ')}
            {...props}
        >
            <p className="visually-hidden">There {facetCount === 1 ? 'is' : 'are'} {facetCount} search {facetCount === 1 ? 'filter' : 'filters'} applied</p>
            <dl className="ds_facets__list">
                {children}
            </dl>
            {facetCount > 0 &&
                <button className="ds_button  ds_button--secondary  ds_button--has-icon  ds_facets__clear-button" type="button">
                    Clear all filters
                    <Cancel className="ds_facet__button-icon"/>
                </button>
            }
        </div>
    );
}

Facets.displayName = 'Facets';
FacetsItem.displayName = 'Facets.Item';
FacetsGroup.displayName = 'Facets.Group';
Facets.Item = FacetsItem;
Facets.Group = FacetsGroup;

export default Facets;
