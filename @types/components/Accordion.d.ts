declare namespace SGDS.Component {
    namespace Accordion {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            id?: string,
            isOpen?: boolean,
            title: string
        }
    }

    interface Accordion extends React.AllHTMLAttributes<HTMLElement> {
        headingLevel?: SGDS.HeadingLevel,
        hideOpenAll?: boolean
    }
}
