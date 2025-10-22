declare namespace SGDS.Component {
    namespace SearchFacets {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
            joinContent?: string,
            title: string
        }

        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            accessibleName?: string
            joinContent?: string
            title: string
        }
    }

    interface SearchFacets extends React.AllHTMLAttributes<HTMLElement> {
        headingId?: string
    }
}
