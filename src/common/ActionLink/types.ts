import { LinkComponent } from '../../shared-types';

export interface ActionLinkProps extends React.AllHTMLAttributes<HTMLElement> {
    describedby?: string;
    href?: string;
    linkComponent?: LinkComponent;
    onclick?: React.EventHandler<React.MouseEvent>;
}
