import { ActionLinkProps } from './types';

const ActionLink = ({
    children,
    describedby,
    href,
    linkComponent,
    onclick
}: ActionLinkProps) => {
    const CLASSNAME = 'ds_link';

    function processChildren(children: React.ReactNode) {
        if (linkComponent) {
            return linkComponent({ className: CLASSNAME, href, children, onClick: onclick, 'aria-describedby': describedby });
        } else if (href) {
            return <a aria-describedby={describedby} onClick={onclick} href={href} className={CLASSNAME}>{children}</a>;
        } else {
            return <button type="button" aria-describedby={describedby} onClick={onclick} className={CLASSNAME}>{children}</button>;
        }
    }

    return (
        processChildren(children)
    );
};

ActionLink.displayName = 'ActionLink';

export default ActionLink;
