import { Children, createContext, useContext } from 'react';
import ConditionalWrapper from '../../common/ConditionalWrapper';
import AspectBox from '../AspectBox/AspectBox';
import Metadata from '../PageMetadata/PageMetadata';

const SearchResultLinkHrefContext = createContext('');

const SearchResultContent = ({
    children
}: SGDS.Component.SearchResult.Content) => {
    const otherChildren: any[] = [];
    let imageChild: React.ReactNode = null;

    // assign to slots
    Children.forEach(children, (child: React.ReactNode) => {
        const thisChild = child as React.ReactElement<any>;
        if (thisChild && thisChild.type === SearchResultMedia) {
            imageChild = thisChild;
        } else {
            otherChildren.push(thisChild);
        }
    });

    return (
        imageChild ?
            (<div className="ds_search-result__has-media">
                {imageChild}
                <div className="ds_search-result__summary">{otherChildren}</div>
            </div>)
        :
            (<div className="ds_search-result__summary">
                {otherChildren}
            </div>)
    )
};

const SearchResultContext = ({
    children,
    title = 'Part of'
}: SGDS.Component.SearchResult.Context) => {
    return (
        <dl className="ds_search-result__context">
            <dt className="ds_search-result__context-key">{title}:</dt>
            {children}
        </dl>
    )
};

const SearchResultContextItem = ({
    children
}: SGDS.Component.SearchResult.ContextItem) => {
    return (
        <dd className="ds_search-result__context-value">
            {children}
        </dd>
    )
};

const SearchResultMedia = ({
    children
}: SGDS.Component.SearchResult.Media) => {
    return (
        <div className="ds_search-result__media-wrapper">
            <a className="ds_search-result__media-link" href={useContext(SearchResultLinkHrefContext)} tabIndex={-1} aria-hidden="true">
                <AspectBox className="ds_search-result__media" ratio="1:1">
                    {children}
                </AspectBox>
            </a>
        </div>
    )
};

const SearchResultMeta = ({
    children
}: SGDS.Component.SearchResult.Meta) => {
    return (
        <Metadata className="ds_search-result__metadata" isInline>
            {children}
        </Metadata>
    )
};

const SearchResult = ({
    children,
    href,
    isPromoted,
    linkComponent,
    promotedTitle = 'Recommended',
    title,
    ...props
}: SGDS.Component.SearchResult) => {
    const LINK_CLASS = 'ds_search-result__link';

    return (
        <div className={[
            'ds_search-result',
            isPromoted ? 'ds_search-result--promoted' : ''
        ].join(' ')}
            {...props}
        >
            <ConditionalWrapper
                condition={!!isPromoted}
                wrapper={(children: React.JSX.Element) => <div className="ds_search-result--promoted-content">
                    <header className="ds_search-result--promoted-title">{promotedTitle}</header>
                    {children}
                </div>}
            >
                <SearchResultLinkHrefContext value={href}>
                    <h3 className="ds_search-result__title">
                        {linkComponent ?
                            linkComponent({ className: LINK_CLASS, children: title, href }) :
                            <a className={LINK_CLASS} href={href}>{title}</a>
                        }
                    </h3>

                    {children}
                </SearchResultLinkHrefContext>
            </ConditionalWrapper>
        </div>
    );
};

SearchResult.Content = SearchResultContent;
SearchResult.Context = SearchResultContext;
SearchResult.ContextItem = SearchResultContextItem;
SearchResult.Media = SearchResultMedia;
SearchResult.Meta = SearchResultMeta;
SearchResult.MetaItem = Metadata.Item;

SearchResultContent.displayName = 'SearchResult.Content';
SearchResultContext.displayName = 'SearchResult.Context';
SearchResultContextItem.displayName = 'SearchResult.ContextItem';
SearchResultMedia.displayName = 'SearchResult.Media';
SearchResultMeta.displayName = 'SearchResult.Meta';
SearchResult.MetaItem.displayName = 'SearchResult.MetaItem';

export default SearchResult;
