declare namespace SGDS.Component {
    namespace ErrorSummary {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            fragmentId: string,
            linkComponent?: SGDS.LinkComponent
        }
    }

    interface ErrorSummary extends React.AllHTMLAttributes<HTMLElement> {
        title: string
    }
}
