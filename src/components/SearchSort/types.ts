export interface SearchSortProps extends React.AllHTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
    label?: string;
    onApply?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
