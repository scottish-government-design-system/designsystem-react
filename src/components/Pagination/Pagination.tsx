import Icon from "../../common/Icon";
import { PaginationPageProps, PaginationProps } from "./types";
import { LinkComponentProps } from "../../shared-types";

export const Page = ({
    ariaLabel,
    children,
    className,
    href,
    isCurrent = false,
    linkComponent,
    onClick
}: PaginationPageProps) => {
    function handleClick(event: React.MouseEvent) {
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }

    function processChildren(children: React.ReactNode) {
        const classNames = [
            'ds_pagination__link',
            className,
            isCurrent ? 'ds_current' : undefined
        ].join(' ');

        const linkProps: LinkComponentProps = {
            'aria-label': ariaLabel,
            href: href,
            onClick: handleClick
        };

        if (isCurrent) {
            linkProps['aria-current'] = 'page';
        }

        if (linkComponent) {
            return linkComponent({ className: classNames, children: children, ...linkProps });
        } else if (href) {
            return (
                <a href={href} className={classNames} {...linkProps}>
                    {children}
                </a>
            );
        }
    }

    return (
        <li className="ds_pagination__item">
            {processChildren(children)}
        </li>
    );
};

export const Ellipsis = () => {
    return (
        <li className="ds_pagination__item" aria-hidden="true">
            <span className="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
        </li>
    );
};

const Pagination = ({
    ariaLabel = 'Pages',
    className,
    onClick,
    padding = 1,
    page = 1,
    pattern = '/search?page=$1',
    totalPages,
    linkComponent,
    ...props
}: PaginationProps) => {
    padding = Number(padding);
    page = Number(page);

    const minToShow = padding + 2;
    let includeFirst, includeLast;
    let pages = [];

    if (page <= minToShow) {
        for (let i = 1; i <= minToShow + 1; i++) {
            pages.push(Number(i));
        }
    } else if (page <= totalPages - minToShow) {
        pages = [page];
        for (let i = 0; i < padding; i++) {
            pages.unshift(page - 1 - i);
            pages.push(Number(page) + 1 + i);
        }
    } else {
        for (let i = totalPages; i > totalPages - minToShow - 1; i--) {
            pages.push(Number(i));
        }
        pages.reverse();
    }

    // filter out pages that are out of bounds
    pages = pages.filter(item => item > 0 && item <= totalPages);

    if ((page - padding) > 2) {
        includeFirst = true;
    }

    if ((page + padding < totalPages - 1)) {
        includeLast = true;
    }

    return (
        <nav className={[
                'ds_pagination',
                className
            ].join(' ')}
            aria-label={ariaLabel}
            {...props}
        >
            <ul className="ds_pagination__list">
                {page > 1 && (
                    <Page
                        ariaLabel="Previous page"
                        className="ds_pagination__link--text  ds_pagination__link--icon"
                        data-search="pagination-previous"
                        href={pattern.replace('$1', String(page - 1))}
                        onClick={onClick}
                    >
                        <Icon icon="ChevronLeft" />
                        <span className="ds_pagination__link-label">Previous</span>
                    </Page>
                )}

                {includeFirst && (
                    <>
                        <Page
                            ariaLabel="Page 1"
                            href={pattern.replace('$1', String(1))}
                            onClick={onClick}
                            linkComponent={linkComponent}
                        >
                            <span className="ds_pagination__link-label">1</span>
                        </Page>
                        <Ellipsis/>
                    </>
                )}

                {pages && pages.map((item, index: number) => (
                    <Page
                        ariaLabel={`Page ${item}`}
                        href={pattern.replace('$1', String(item))}
                        isCurrent={item === page}
                        key={`pagination${index}`}
                        linkComponent={linkComponent}
                        onClick={onClick}
                        pattern={pattern}
                    >
                        <span className="ds_pagination__link-label">{item.toString()}</span>
                    </Page>
                ))}

                {includeLast && (
                    <>
                        <Ellipsis/>
                        <Page
                            ariaLabel={`Page ${totalPages}`}
                            href={pattern.replace('$1', String(totalPages))}
                            linkComponent={linkComponent}
                            onClick={onClick}
                            pattern={pattern}
                        >
                            <span className="ds_pagination__link-label">{totalPages.toString()}</span>
                        </Page>
                    </>
                )}

                {page < totalPages && (
                    <Page
                        ariaLabel="Next page"
                        href={pattern.replace('$1', String(page + 1))}
                        className="ds_pagination__link  ds_pagination__link--text  ds_pagination__link--icon"
                        onClick={onClick}
                    >
                        <span className="ds_pagination__link-label">Next</span>
                        <Icon icon="ChevronRight" />
                    </Page>
                )}

            </ul>
        </nav>
    )
}

Pagination.displayName = 'Pagination';

export default Pagination;
