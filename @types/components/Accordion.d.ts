declare namespace SGDS.Component {
    namespace Accordion {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            id?: string,
            heading: string | React.ReactNode
            isOpen?: boolean,
        }
    }

    interface Accordion extends React.AllHTMLAttributes<HTMLElement> {
        headingLevel?: SGDS.HeadingLevel,
        hideOpenAll?: boolean,
        isSmall?: boolean
    }
}
