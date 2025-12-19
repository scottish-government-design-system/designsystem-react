import { LinkComponent, TagColour } from '../../shared-types';

export interface TaskListGroupProps extends React.AllHTMLAttributes<HTMLElement> {
    intro?: string;
    title: string;
}

export interface TaskListItemProps extends React.AllHTMLAttributes<HTMLElement> {
    href?: string;
    id?: string;
    isComplete?: boolean;
    linkComponent?: LinkComponent;
    statusText?: string;
    tagColour?: TagColour;
    title: string;
}

export interface TaskListProps extends React.AllHTMLAttributes<HTMLElement> {
    headingId?: string;
}
