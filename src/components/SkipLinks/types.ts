export interface SkipLinksLinkProps extends React.AllHTMLAttributes<HTMLLIElement> {
    fragmentId: string;
}

export interface SkipLinksProps extends React.AllHTMLAttributes<HTMLDivElement> {
    mainContentId?: string;
    mainLinkText?: string;
    isStatic?: boolean;
}
