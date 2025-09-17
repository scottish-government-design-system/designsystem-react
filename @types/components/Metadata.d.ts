declare namespace SGDS.Component {
    namespace Metadata {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            name: string
        }
    }

    interface Metadata extends React.AllHTMLAttributes<HTMLDListElement> {
        isInline?: boolean
    }
}
