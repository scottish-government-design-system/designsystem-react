import { PageHeaderProps } from "./types";

const PageHeader = ({
    children,
    className,
    label,
    title,
    titleId,
    ...props
}: PageHeaderProps) => {
    return (
        <header
            className={[
                'ds_page-header',
                className
            ].join(' ')}
            {...props}
        >
            {label && <span className="ds_page-header__label  ds_content-label">{label}</span>}
            <h1 id={titleId} className="ds_page-header__title">{title}</h1>

            {children}
        </header>
    );
};

PageHeader.displayName = 'PageHeader';

export default PageHeader;
