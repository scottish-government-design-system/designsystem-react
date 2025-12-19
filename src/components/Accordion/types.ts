import { HeadingLevel } from "../../shared-types";

export interface AccordionItemProps extends React.AllHTMLAttributes<HTMLElement> {
    id?: string;
    heading: string | React.ReactNode;
    isOpen?: boolean;
}

export interface AccordionProps extends React.AllHTMLAttributes<HTMLElement> {
    headingLevel?: HeadingLevel;
    hideOpenAll?: boolean;
    isSmall?: boolean;
}
