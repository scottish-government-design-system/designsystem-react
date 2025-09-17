declare namespace SGDS.Common {
    namespace AbstractNotificationBanner {
        interface Buttons extends React.AllHTMLAttributes<HTMLDivElement> {
            children: React.ReactNode
        }
    }

    interface AbstractNotificationBanner extends React.AllHTMLAttributes<HTMLDivElement> {
        hasIcon?: boolean,
        hasColourIcon?: boolean,
        hasInverseIcon?: boolean,
        icon?: IconName,
        isDismissable?: boolean,
        title: string,
        ref?: any
    }
}
