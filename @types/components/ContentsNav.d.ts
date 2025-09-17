declare namespace SGDS.Component {
    namespace ContentsNav {
        interface ContentsNavItem extends React.AllHTMLAttributes<HTMLElement> {
            isCurrent?: boolean,
            linkComponent?: SGDS.LinkComponent;
        }
    }

    interface ContentsNav extends React.AllHTMLAttributes<HTMLElement> {
        ariaLabel: React.AriaAttributes['aria-label'],
        title: string
    }
}
