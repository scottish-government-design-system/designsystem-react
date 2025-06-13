import WrapperTag from '../../common/wrapper-tag';

export const Link: React.FC<SGDS.Component.ContentsNav.Link> = ({
    title,
    current,
    href
}) => {
    // determine which HTML tag to use
    const tagName = href && !current ? 'a' : 'span';

    return (
        <li
            aria-current={current && 'page' || undefined}
            className="ds_contents-nav__item"
        >
            <WrapperTag
                tagName={tagName}
                className={[
                    'ds_contents-nav__link',
                    current && 'ds_current'
                ].join(' ')}
                href={!current ? href : undefined}
            >
                {title}
            </WrapperTag>
        </li>
    );
};

const ContentsNav: React.FC<SGDS.Component.ContentsNav> = function({
    items,
    label = 'Pages in this section',
    title = 'Contents',
    ...props
}) {
    return (
        <nav
            aria-label={label}
            className="ds_contents-nav"
            {...props}
        >
            <h2 className="ds_contents-nav__title">{title}</h2>
            <ul className="ds_contents-nav__list">
                {items && items.map((item, index: number) => (
                    <Link current={item.current} href={item.href} title={item.title} key={'link' + index} />
                ))}
            </ul>
        </nav>
    );
};

ContentsNav.displayName = 'ContentsNav';

export default ContentsNav;
