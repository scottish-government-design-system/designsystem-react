export interface PageHeaderProps extends React.AllHTMLAttributes<HTMLElement> {
    label?: string;
    heading?: string | React.ReactNode;
    title?: string
    titleId?: string;
}
