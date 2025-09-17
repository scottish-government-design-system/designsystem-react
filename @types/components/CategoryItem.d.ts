declare namespace SGDS.Component {
    interface CategoryItem extends React.AllHTMLAttributes<HTMLElement> {
        className?: string,
        headingLevel?: SGDS.HeadingLevel,
        href?: string,
        linkComponent?: SGDS.LinkComponent
        tagName?: string,
        title: string,
    }
}
