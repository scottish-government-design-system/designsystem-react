import { HeadingLevel } from '../../shared-types';

export interface TabsItemProps extends React.AllHTMLAttributes<HTMLElement> {
    isBorderless?: boolean;
    id: string;
    tabLabel: string;
}

export interface TabListItemProps extends React.AllHTMLAttributes<HTMLLIElement> {
    href: string;
}

export interface TabsProps extends React.AllHTMLAttributes<HTMLElement> {
    baseId: string;
    isBorderless?: boolean;
    headingLevel?: HeadingLevel;
    isManual?: boolean;
    title: string;
}
