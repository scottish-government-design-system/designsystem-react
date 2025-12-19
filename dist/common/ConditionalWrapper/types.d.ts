export interface ConditionalWrapperProps extends React.AllHTMLAttributes<HTMLElement> {
    condition: boolean;
    wrapper: (children: React.JSX.Element) => React.JSX.Element;
}
