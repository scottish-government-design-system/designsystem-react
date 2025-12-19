type SmallScreen = 'scrolling' | 'boxes';

export interface TableProps extends React.AllHTMLAttributes<HTMLTableElement> {
    className?: string;
    smallscreen?: SmallScreen;
}
