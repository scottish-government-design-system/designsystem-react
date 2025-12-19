
import { LinkComponent } from '../../shared-types';

export interface ErrorSummaryItemProps extends React.AllHTMLAttributes<HTMLElement> {
    fragmentId: string;
    linkComponent?: LinkComponent;
}

export interface ErrorSummaryProps extends React.AllHTMLAttributes<HTMLElement> {
    title: string;
}
