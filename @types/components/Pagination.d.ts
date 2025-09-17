declare namespace SGDS.Component {
    namespace Pagination {
        interface Page extends React.AllHTMLAttributes<HTMLElement> {
            ariaLabel: React.AriaAttributes['aria-label'],
            isCurrent?: boolean,
            href: string,
            linkComponent?: SGDS.LinkComponent,
            onClick?: React.EventHandler<any>
        }
    }

    interface Pagination extends React.AllHTMLAttributes<HTMLElement> {
        ariaLabel: React.AriaAttributes['aria-label'],
        className?: string,
        linkComponent?: SGDS.LinkComponent,
        onClick?: React.EventHandler<any>,
        padding: number,
        page: number,
        pattern: string,
        totalPages: number
    }
}
