import { SequentialNavigationLinkProps, SequentialNavigationProps } from "./types";

const SeqNavLink = ({
    children,
    href,
    isPrev,
    linkComponent,
    textLabel
}:SequentialNavigationLinkProps) => {
    const LINK_CLASSES = [
        'ds_sequential-nav__button',
        isPrev ? 'ds_sequential-nav__button--left' : 'ds_sequential-nav__button--right'
    ].join(' ');

    const ITEM_CLASSES = [
        'ds_sequential-nav__item',
        isPrev ? 'ds_sequential-nav__item--prev' : 'ds_sequential-nav__item--next'
    ].join(' ');

    function processChildren(children: React.ReactNode) {
        const linkInner = <span className="ds_sequential-nav__text" data-label={textLabel}>{children}</span>

        if (linkComponent) {
            return linkComponent({ className: LINK_CLASSES, href, children: linkInner });
        } else {
            return <a href={href} className={LINK_CLASSES}>{linkInner}</a>;
        }
    }

    return (
        <div
            className={ITEM_CLASSES}
        >
            {processChildren(children)}
        </div>
    )
};

const NextLink = ({
    children,
    href,
    linkComponent,
    textLabel = 'Next'
}: SequentialNavigationLinkProps) => {
    return <SeqNavLink href={href} linkComponent={linkComponent} textLabel={textLabel}>{children}</SeqNavLink>
};

const PreviousLink = ({
    children,
    href,
    linkComponent,
    textLabel = 'Previous'
}: SequentialNavigationLinkProps) => {
    return <SeqNavLink href={href} linkComponent={linkComponent} textLabel={textLabel} isPrev>{children}</SeqNavLink>
};

const SequentialNavigation = ({
    ariaLabel = 'Article navigation',
    children,
    className,
    ...props
}: SequentialNavigationProps) => {
    return (
        <nav
            className={[
                'ds_sequential-nav',
                className
            ].join(' ')}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </nav>
    );
};

SequentialNavigation.displayName = 'SequentialNavigation';
SequentialNavigation.Next = NextLink;
SequentialNavigation.Previous = PreviousLink;
NextLink.displayName = 'SequentialNavigation.Next';
PreviousLink.displayName = 'SequentialNavigation.Previous';

export default SequentialNavigation;
