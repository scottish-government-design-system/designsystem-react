import { Children } from 'react';
import ConditionalWrapper from '../../common/ConditionalWrapper';
import HintText from '../../common/HintText';
import ScreenReaderText from '../../common/ScreenReaderText';
import Tag from '../Tag';
import { TaskListGroupProps, TaskListItemProps, TaskListProps } from './types';

const TaskItem = ({
    children,
    className,
    href,
    id,
    isComplete = false,
    linkComponent,
    statusText,
    tagColour = 'grey',
    title,
    ...props
}: TaskListItemProps) => {
    if (isComplete) {
        tagColour = 'green';
        statusText = statusText || 'Completed'
    }

    const LINK_CLASS = 'ds_task-list__task-link';

    function getLinkElement(children: React.ReactNode) {
        let linkElement;
        if (linkComponent) {
            linkElement = linkComponent({ className: LINK_CLASS, href, children });
        } else {
            linkElement = <a href={href} className={LINK_CLASS}>{children}</a>;
        }
        return linkElement as React.JSX.Element;
    }

    return (
        <li
            className={[
                'ds_task-list__task',
                className
            ].join(' ')}
            id={id}
            {...props}
        >
            <div className="ds_task-list__task-details">
                <h3 className="ds_task-list__task-heading">
                <ConditionalWrapper
                    condition={typeof href !== 'undefined'}
                    wrapper={(children: React.JSX.Element) => getLinkElement(children)}
                >
                    {title}
                    {statusText && <ScreenReaderText>({statusText})</ScreenReaderText>}
                </ConditionalWrapper>
                </h3>
                <HintText className="ds_task-list__task-summary">{children}</HintText>
            </div>

            {typeof statusText !== 'undefined' &&
                <Tag
                    aria-hidden="true"
                    colour={tagColour}
                >
                    {statusText}
                </Tag>
            }
        </li>
    );
};

/**
 * @param {Object} props
 * @param {string} props.intro - Intro text
 * @param {string} props.title - The title of the task group
 * @returns {JSX.Element} - The element
 */
const TaskGroup = ({
    children,
    className,
    intro,
    title,
    ...props
}: TaskListGroupProps) => {
    return (
        <li
            className={[
                'ds_task-list-group__section',
                className
            ].join(' ')}
            {...props}
        >
            <h2 className="ds_task-list-heading">{title}</h2>
            {intro && <p className="ds_task-list-intro">{intro}</p>}
            <ul className="ds_task-list">
                {children}
            </ul>
        </li>
    );
};

const TaskList = ({
    children,
    className,
    headingId = 'task-list',
    title,
    ...props
}: TaskListProps) => {
    let taskCount = 0;
    const incompleteTaskIds: string[] = [];
    let completedTasksCount = 0;

    function processChild(item: React.JSX.Element) {
        if (item.type.displayName === 'TaskList.Item') {
            taskCount = taskCount + 1;

            if (item.props.isComplete) {
                completedTasksCount = completedTasksCount + 1;
            } else {
                incompleteTaskIds.push(item.props.id);
            }
        } else if (item.type.displayName === 'TaskList.Group') {
            Children.forEach(item.props.children, child => {
                processChild(child);
            });
        }
    }

    function firstIncompleteTaskLink() {
        if (incompleteTaskIds.length > 0) {
            return (
                <p><a href={'#' + incompleteTaskIds[0]} className="js-task-list-skip-link">Skip to first incomplete section</a></p>
            )
        }
    }

    Children.forEach(children, child => {
        processChild(child as React.JSX.Element);
    });

    return (
        <div
            className={className}
            {...props}
        >
            <h2 id={`${headingId}-status`} className="ds_task-list-status-heading">{title}</h2>
            <nav aria-labelledby={`${headingId}-status`} className="ds_task-list-status">
                <p>You have completed {completedTasksCount} of {taskCount} sections.</p>
                {firstIncompleteTaskLink()}
            </nav>
            <ul className="ds_task-list">
                {children}
            </ul>
        </div>
    );
};

TaskList.displayName = 'TaskList';
TaskItem.displayName = 'TaskList.Item';
TaskGroup.displayName = 'TaskList.Group';
TaskList.Item = TaskItem;
TaskList.Group = TaskGroup;

export default TaskList;
