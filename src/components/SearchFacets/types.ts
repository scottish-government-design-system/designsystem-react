export interface SearchFacetsGroupProps extends React.AllHTMLAttributes<HTMLElement> {
    joinContent?: string;
    title: string;
}

export interface SearchFacetsItemProps extends React.AllHTMLAttributes<HTMLElement> {
    accessibleName?: string;
    joinContent?: string;
    title: string;
}

export interface SearchFacetsProps extends React.AllHTMLAttributes<HTMLElement> {
    headingId?: string;
}
