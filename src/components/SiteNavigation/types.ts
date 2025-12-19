import { LinkComponent } from '../../shared-types';

export interface SiteNavigationItemProps extends React.AllHTMLAttributes<HTMLLIElement> {
    isCurrent?: boolean;
    href: string;
    linkComponent?: LinkComponent;
}

export interface SiteNavigationProps extends React.AllHTMLAttributes<HTMLElement> {
    ref?: React.RefObject<null>;
}
