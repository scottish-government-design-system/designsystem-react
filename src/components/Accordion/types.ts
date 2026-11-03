export interface AccordionItemProps extends React.AllHTMLAttributes<HTMLElement> {
    id?: string;
    heading: string | React.ReactNode;
    isOpen?: boolean;
}

export interface AccordionProps extends React.AllHTMLAttributes<HTMLElement> {
    hideOpenAll?: boolean;
    isSmall?: boolean;
}
