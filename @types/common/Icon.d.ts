declare namespace SGDS.Common {
    interface Icon extends React.AllHTMLAttributes<SVGSVGElement> {
        ariaLabel?: React.AriaAttributes['aria-label'],
        className?: string,
        isFilled?: boolean,
        icon: IconName,
        iconSize?: string
    }
}
