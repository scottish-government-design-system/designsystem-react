"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const AspectBox_1 = __importDefault(require("../AspectBox"));
const PageMetadata_1 = __importDefault(require("../PageMetadata"));
const SearchResultLinkHrefContext = (0, react_1.createContext)('');
const SearchResultContent = ({ children }) => {
    const otherChildren = [];
    let imageChild = null;
    // assign to slots
    react_1.Children.forEach(children, (child) => {
        const thisChild = child;
        if (thisChild && thisChild.type === SearchResultMedia) {
            imageChild = thisChild;
        }
        else {
            otherChildren.push(thisChild);
        }
    });
    return (imageChild ?
        (<div className="ds_search-result__has-media">
                {imageChild}
                <div className="ds_search-result__summary">{otherChildren}</div>
            </div>)
        :
            (<div className="ds_search-result__summary">
                {otherChildren}
            </div>));
};
const SearchResultContext = ({ children, title = 'Part of' }) => {
    return (<dl className="ds_search-result__context">
            <dt className="ds_search-result__context-key">{title}:</dt>
            {children}
        </dl>);
};
const SearchResultContextItem = ({ children }) => {
    return (<dd className="ds_search-result__context-value">
            {children}
        </dd>);
};
const SearchResultMedia = ({ children }) => {
    return (<div className="ds_search-result__media-wrapper">
            <a className="ds_search-result__media-link" href={(0, react_1.useContext)(SearchResultLinkHrefContext)} tabIndex={-1} aria-hidden="true">
                <AspectBox_1.default className="ds_search-result__media" ratio="1:1">
                    {children}
                </AspectBox_1.default>
            </a>
        </div>);
};
const SearchResultMeta = ({ children }) => {
    return (<PageMetadata_1.default className="ds_search-result__metadata" isInline>
            {children}
        </PageMetadata_1.default>);
};
const SearchResult = ({ children, href, isPromoted, linkComponent, promotedTitle = 'Recommended', title, ...props }) => {
    const LINK_CLASS = 'ds_search-result__link';
    return (<div className={[
            'ds_search-result',
            isPromoted ? 'ds_search-result--promoted' : ''
        ].join(' ')} {...props}>
            <ConditionalWrapper_1.default condition={!!isPromoted} wrapper={(children) => <div className="ds_search-result--promoted-content">
                    <header className="ds_search-result--promoted-title">{promotedTitle}</header>
                    {children}
                </div>}>
                <SearchResultLinkHrefContext value={href}>
                    <h3 className="ds_search-result__title">
                        {linkComponent ?
            linkComponent({ className: LINK_CLASS, children: title, href }) :
            <a className={LINK_CLASS} href={href}>{title}</a>}
                    </h3>

                    {children}
                </SearchResultLinkHrefContext>
            </ConditionalWrapper_1.default>
        </div>);
};
SearchResult.Content = SearchResultContent;
SearchResult.Context = SearchResultContext;
SearchResult.ContextItem = SearchResultContextItem;
SearchResult.Media = SearchResultMedia;
SearchResult.Meta = SearchResultMeta;
SearchResult.MetaItem = PageMetadata_1.default.Item;
SearchResultContent.displayName = 'SearchResult.Content';
SearchResultContext.displayName = 'SearchResult.Context';
SearchResultContextItem.displayName = 'SearchResult.ContextItem';
SearchResultMedia.displayName = 'SearchResult.Media';
SearchResultMeta.displayName = 'SearchResult.Meta';
SearchResult.MetaItem.displayName = 'SearchResult.MetaItem';
exports.default = SearchResult;
