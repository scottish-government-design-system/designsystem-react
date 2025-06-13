"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipLink = void 0;
const SkipLink = ({ targetId, title }) => {
    return (<li className="ds_skip-links__item">
            <a href={`#${targetId}`} className="ds_skip-links__link">{title}</a>
        </li>);
};
exports.SkipLink = SkipLink;
const SkipLinks = ({ items, mainContentId = 'main-content', mainLinkText = 'Skip to main content', ...props }) => {
    return (<div className="ds_skip-links" {...props}>
            <ul className="ds_skip-links__list">
                <exports.SkipLink title={mainLinkText} targetId={mainContentId}/>

                {items && items.map((item, index) => (<exports.SkipLink title={item.title} targetId={item.targetId} key={`skiplink-${index}`}/>))}
            </ul>
        </div>);
};
SkipLinks.displayName = 'SkipLinks';
exports.SkipLink.displayName = 'SkipLink';
exports.default = SkipLinks;
