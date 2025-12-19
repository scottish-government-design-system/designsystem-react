import React, { Children, useId } from 'react';

import ActionLink from '../../common/ActionLink';
import ConditionalWrapper from '../../common/ConditionalWrapper';
import WrapperTag from "../../common/WrapperTag";
import { SummaryCardProps } from './types';
import { ActionLinkProps } from '../../common/ActionLink/types';

const SummaryCard = ({
    children,
    className,
    headingLevel = 'h3',
    title,
    ...props
}: SummaryCardProps) => {
    const actions: React.ReactElement[] = [];
    const remainingChildren: React.ReactElement[] = [];

    const describedById = useId();

    Children.forEach(children, (child: React.ReactNode) => {
        const thisChild = child as React.ReactElement<ActionLinkProps>;
        if (thisChild && thisChild.type === ActionLink) {
            actions.push(React.cloneElement(thisChild, { describedby: describedById }));
        } else {
            remainingChildren.push(thisChild);
        }
    });

    return (
        <div
            className={[
                'ds_summary-card',
                className
            ].join(' ')}
            {...props}
        >
            <div className="ds_summary-card__header">
                <WrapperTag
                    className="ds_summary-card__header-title"
                    id={describedById}
                    tagName={headingLevel}
                >{title}</WrapperTag>

                {actions &&
                    <ConditionalWrapper
                        condition={actions.length > 1}
                        wrapper={(children: React.JSX.Element) => <ul className="ds_summary-card__actions-list">{children}</ul>}
                    >
                        {actions && actions.map((action, index: number) => (
                            <ConditionalWrapper
                                condition={actions.length > 1}
                                wrapper={(children: React.JSX.Element) => <li className="ds_summary-card__actions-list-item">{children}</li>}
                                key={'action' + index}
                            >
                                {action}
                            </ConditionalWrapper>
                        ))}
                    </ConditionalWrapper>
                }
            </div>
            <div className="ds_summary-card__content">
                {remainingChildren}
            </div>
        </div>
    );
};

SummaryCard.displayName = 'SummaryCard';
SummaryCard.Action = ActionLink;
SummaryCard.Action.displayName = 'SummaryCard.Action';

export default SummaryCard;
