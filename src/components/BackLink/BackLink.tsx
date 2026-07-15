import React from 'react';
import { BackLinkProps } from './types';
import clsx from 'clsx';

const BackLink = ({
    children,
    className,
    href,
    linkComponent,
    ...props
}: BackLinkProps) => {
    const BACKLINK_CLASSES = clsx(['ds_back-link', className])

    if (typeof children === 'undefined') {
        children = <>Back</>
    }

    function processChildren(children: React.ReactNode) {
        if (linkComponent) {
            return linkComponent({ className: BACKLINK_CLASSES, href, children, ...props });
        } else if (href) {
            return <a href={href} className={BACKLINK_CLASSES} {...props} >{children}</a>;
        } else {
            return <span className={BACKLINK_CLASSES} {...props}>{children}</span>;
        }
    }

    return (
        processChildren(children)
    );
};

BackLink.displayName = 'BackLink';

export default BackLink;
