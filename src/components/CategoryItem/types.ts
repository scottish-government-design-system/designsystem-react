import { HeadingLevel, LinkComponent } from '../../shared-types';

export interface CategoryItemProps extends React.AllHTMLAttributes<HTMLElement> {
    className?: string;
    headingLevel?: HeadingLevel;
    href?: string;
    linkComponent?: LinkComponent;
    tagName?: string;
    title: string;
}
