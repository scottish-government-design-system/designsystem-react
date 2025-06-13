"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NextLink = ({ href, title }) => {
    return (<div className="ds_sequential-nav__item  ds_sequential-nav__item--next">
            <a href={href} className="ds_sequential-nav__button  ds_sequential-nav__button--right">
                <span className="ds_sequential-nav__text" data-label="Next">
                    {title}
                </span>
            </a>
        </div>);
};
const PrevLink = ({ href, title, }) => {
    return (<div className="ds_sequential-nav__item  ds_sequential-nav__item--prev">
            <a href={href} className="ds_sequential-nav__button  ds_sequential-nav__button--left">
                <span className="ds_sequential-nav__text" data-label="Previous">
                    {title}
                </span>
            </a>
        </div>);
};
const SequentialNavigation = ({ ariaLabel = 'Article navigation', next, previous, ...props }) => {
    return (<nav className="ds_sequential-nav" aria-label={ariaLabel} {...props}>
            {previous && <PrevLink href={previous.href} title={previous.title}></PrevLink>}
            {next && <NextLink href={next.href} title={next.title}></NextLink>}
        </nav>);
};
SequentialNavigation.displayName = 'SequentialNavigation';
exports.default = SequentialNavigation;
