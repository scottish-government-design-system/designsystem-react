declare namespace SGDS.Common {
    interface ActionLink extends React.AllHTMLAttributes<HTMLElement> {
        describedby?: string,
        href?: string,
        linkComponent?: SGDS.LinkComponent,
        onclick?: React.EventHandler<any>
    }
}
