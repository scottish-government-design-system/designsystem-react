import React, { Children, useId } from 'react';

import ActionLink from '../../common/ActionLink';
import ConditionalWrapper from '../../common/ConditionalWrapper';
import { SummaryListItemProps, SummaryListProps } from './types';
import { ActionLinkProps } from '@/src/common/ActionLink/types';

const Item = ({
    children,
    title
}: SummaryListItemProps) => {
    const values: React.ReactElement[] = [];
    const actions: React.ReactElement[] = [];

    const describedById = useId();

    Children.forEach(children, (child: React.ReactNode) => {
        const thisChild = child as React.ReactElement<ActionLinkProps>;
        if (thisChild && thisChild.type === Value) {
            values.push(thisChild);
        } else if (thisChild && thisChild.type === ActionLink) {
            actions.push(React.cloneElement(thisChild, { describedby: describedById }));
        }
    });

    return (
        <li className="ds_summary-list__item">
            <span className="ds_summary-list__key" id={describedById}>{title}</span>
            <span className="ds_summary-list__value">
                <ConditionalWrapper
                    condition={values.length > 1}
                    wrapper={(children: React.JSX.Element) => <ul className="ds_no-bullets">{children}</ul>}
                >
                     {values && values.map((value, index: number) => (
                        <ConditionalWrapper
                            condition={values.length > 1}
                            wrapper={(children: React.JSX.Element) => <li>{children}</li>}
                            key={'answer' + index}
                        >
                            {value}
                        </ConditionalWrapper>
                    ))}
                </ConditionalWrapper>
            </span>
            {actions &&
                <div className="ds_summary-list__actions">
                    <ConditionalWrapper
                        condition={actions.length > 1}
                        wrapper={(children: React.JSX.Element) => <ul className="ds_summary-list__actions-list">{children}</ul>}
                    >
                        {actions && actions.map((action, index: number) => (
                            <ConditionalWrapper
                                condition={actions.length > 1}
                                wrapper={(children: React.JSX.Element) => <li className="ds_summary-list__actions-list-item">{children}</li>}
                                key={'action' + index}
                            >
                                {action}
                            </ConditionalWrapper>
                        ))}
                    </ConditionalWrapper>
                </div>
            }
        </li>
    );
};

const Value = ({
    children
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <q className="ds_summary-list__answer">{children}</q>
    );
};

const SummaryList = ({
    children,
    className,
    isBorderless,
    ...props
}: SummaryListProps) => {
    return (
        <ol
            className={[
                'ds_summary-list',
                isBorderless && 'ds_summary-list--no-border',
                className
            ].join(' ')}
            {...props}
        >
           {children}
        </ol>
    );
};


SummaryList.Action = ActionLink;
SummaryList.Item = Item;
SummaryList.Value = Value;

SummaryList.displayName = 'SummaryList';
SummaryList.Action.displayName = 'SummaryList.Action';
Item.displayName = 'SummaryList.Item';
Value.displayName = 'SummaryList.Value';

export default SummaryList;
