const Link = ({
    children,
    fragmentId
}: SGDS.Component.SkipLinks.Link) => {
    return (
        <li
            className="ds_skip-links__item"
        >
            <a href={`#${fragmentId}`} className="ds_skip-links__link">{ children }</a>
        </li>
    );
};

const SkipLinks = ({
    children,
    mainContentId = 'main-content',
    mainLinkText = 'Skip to main content',
    isStatic,
    ...props
}: SGDS.Component.SkipLinks) => {
    return (
        <div
            className={[
                'ds_skip-links',
                isStatic && 'ds_skip-links--static',
            ].join(' ')}
            {...props}
        >
            <ul className="ds_skip-links__list">
                {children ? children : <Link fragmentId={mainContentId}>{mainLinkText}</Link>}
            </ul>
        </div>
    );
};

SkipLinks.displayName = 'SkipLinks';
Link.displayName = 'SkipLinks.Link';
SkipLinks.Link = Link;

export default SkipLinks;
