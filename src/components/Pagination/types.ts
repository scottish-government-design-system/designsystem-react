import { LinkComponent } from '../../shared-types';

export interface PaginationPageProps extends React.AllHTMLAttributes<HTMLElement> {
    ariaLabel: React.AriaAttributes['aria-label'];
    isCurrent?: boolean;
    href: string;
    linkComponent?: LinkComponent;
    onClick?: React.EventHandler<React.FormEvent>;
}

export interface PaginationProps extends React.AllHTMLAttributes<HTMLElement> {
    ariaLabel: React.AriaAttributes['aria-label'];
    className?: string;
    linkComponent?: LinkComponent;
    onClick?: React.EventHandler<React.FormEvent>;
    padding: number;
    page: number;
    pattern: string;
    totalPages: number;
}
