declare namespace SGDS.Component {
    namespace SummaryList {
        interface Answer extends React.AllHTMLAttributes<HTMLElement> {
        }

        interface Item extends React.LiHTMLAttributes<HTMLLIElement> {
            title: string
        }
    }

    interface SummaryList extends React.OlHTMLAttributes<HTMLOListElement> {
        isBorderless?: boolean
    }
}
