export interface SummaryListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    title: string;
}

export interface SummaryListProps extends React.OlHTMLAttributes<HTMLOListElement> {
    isBorderless?: boolean;
}
