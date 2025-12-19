import { LinkComponent } from "../../shared-types";

export interface BreadcrumbItemProps extends React.AllHTMLAttributes<HTMLElement> {
    isHidden?: boolean;
    linkComponent?: LinkComponent;
}
