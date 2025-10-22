declare namespace SGDS.Component {
    namespace SearchResult {
        interface Content extends React.AllHTMLAttributes<HTMLElement> {

        }

        interface Context extends React.AllHTMLAttributes<HTMLDListElement> {
            title: string
        }

        interface ContextItem extends React.AllHTMLAttributes<HTMLElement> {

        }

        interface Media extends React.AllHTMLAttributes<HTMLElement> {

        }

        interface Meta extends React.AllHTMLAttributes<HTMLElement> {
        }
    }

    interface SearchResult extends React.AllHTMLAttributes<HTMLElement> {
        href: string,
        isPromoted?: boolean,
        linkComponent?: SGDS.LinkComponent,
        promotedTitle?: string,
        title: string
    }
}
