declare namespace SGDS.Component {
    namespace SiteNavigation {
        interface Item extends React.AllHTMLAttributes<HTMLLIElement> {
            isCurrent?: boolean,
            href: string,
            linkComponent?: SGDS.LinkComponent
        }
    }

    interface SiteNavigation extends React.AllHTMLAttributes<HTMLElement> {
        ref?: React.RefObject<null>
    }
}
