"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ConditionalWrapper_1 = __importDefault(require("../../common/ConditionalWrapper"));
const HintText_1 = __importDefault(require("../../common/HintText"));
const ScreenReaderText_1 = __importDefault(require("../../common/ScreenReaderText"));
const Tag_1 = __importDefault(require("../Tag"));
const TaskItem = ({ children, className, href, id, isComplete = false, linkComponent, statusText, tagColour = 'grey', title, ...props }) => {
    if (isComplete) {
        tagColour = 'green';
        statusText = statusText || 'Completed';
    }
    const LINK_CLASS = 'ds_task-list__task-link';
    function getLinkElement(children) {
        if (linkComponent) {
            return linkComponent({ className: LINK_CLASS, href, children });
        }
        else if (href) {
            return <a href={href} className={LINK_CLASS}>{children}</a>;
        }
    }
    return (<li className={[
            'ds_task-list__task',
            className
        ].join(' ')} id={id} {...props}>
            <div className="ds_task-list__task-details">
                <h3 className="ds_task-list__task-heading">
                <ConditionalWrapper_1.default condition={typeof href !== 'undefined'} wrapper={(children) => getLinkElement(children)}>
                    {title}
                    {statusText && <ScreenReaderText_1.default>({statusText})</ScreenReaderText_1.default>}
                </ConditionalWrapper_1.default>
                </h3>
                <HintText_1.default className="ds_task-list__task-summary">{children}</HintText_1.default>
            </div>

            {typeof statusText !== 'undefined' &&
            <Tag_1.default aria-hidden="true" colour={tagColour}>
                    {statusText}
                </Tag_1.default>}
        </li>);
};
/**
 * @param {Object} props
 * @param {string} props.intro - Intro text
 * @param {string} props.title - The title of the task group
 * @returns {JSX.Element} - The element
 */
const TaskGroup = ({ children, className, intro, title, ...props }) => {
    return (<li className={[
            'ds_task-list-group__section',
            className
        ].join(' ')} {...props}>
            <h2 className="ds_task-list-heading">{title}</h2>
            {intro && <p className="ds_task-list-intro">{intro}</p>}
            <ul className="ds_task-list">
                {children}
            </ul>
        </li>);
};
const TaskList = ({ children, className, headingId = 'task-list', title, ...props }) => {
    let taskCount = 0;
    let incompleteTaskIds = [];
    let completedTasksCount = 0;
    function processChild(item) {
        if (item.type.displayName === 'TaskList.Item') {
            taskCount = taskCount + 1;
            if (item.props.isComplete) {
                completedTasksCount = completedTasksCount + 1;
            }
            else {
                incompleteTaskIds.push(item.props.id);
            }
        }
        else if (item.type.displayName === 'TaskList.Group') {
            react_1.Children.forEach(item.props.children, child => {
                processChild(child);
            });
        }
    }
    function firstIncompleteTaskLink() {
        if (incompleteTaskIds.length > 0) {
            return (<p><a href={'#' + incompleteTaskIds[0]} className="js-task-list-skip-link">Skip to first incomplete section</a></p>);
        }
    }
    react_1.Children.forEach(children, child => {
        processChild(child);
    });
    return (<div className={className} {...props}>
            <h2 id={`${headingId}-status`} className="ds_task-list-status-heading">{title}</h2>
            <nav aria-labelledby={`${headingId}-status`} className="ds_task-list-status">
                <p>You have completed {completedTasksCount} of {taskCount} sections.</p>
                {firstIncompleteTaskLink()}
            </nav>
            <ul className="ds_task-list">
                {children}
            </ul>
        </div>);
};
TaskList.displayName = 'TaskList';
TaskItem.displayName = 'TaskList.Item';
TaskGroup.displayName = 'TaskList.Group';
TaskList.Item = TaskItem;
TaskList.Group = TaskGroup;
exports.default = TaskList;
