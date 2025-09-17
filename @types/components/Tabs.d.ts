declare namespace SGDS.Component {
    namespace Tabs {
        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            isBorderless?: boolean,
            id: string,
            tabLabel: string
        }

        interface TabListItem extends React.AllHTMLAttributes<HTMLLIElement> {
            href: string
        }
    }

    interface Tabs extends React.AllHTMLAttributes<HTMLElement> {
        baseId: string,
        isBorderless?: boolean,
        headingLevel?: SGDS.HeadingLevel,
        isManual?: boolean,
        title: string
    }
}
