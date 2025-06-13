"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskGroup = exports.Task = void 0;
const react_1 = require("react");
const conditional_wrapper_1 = __importDefault(require("../../common/conditional-wrapper"));
const hint_text_1 = __importDefault(require("../../common/hint-text"));
const screen_reader_text_1 = __importDefault(require("../../common/screen-reader-text"));
const tag_1 = __importDefault(require("../tag/tag"));
const Task = ({ children, href, id, isComplete = false, statusText, tagColour = 'grey', title, ...props }) => {
    if (isComplete) {
        tagColour = 'green';
    }
    return (<li className="ds_task-list__task" id={id} {...props}>
            <div className="ds_task-list__task-details">
                <h3 className="ds_task-list__task-heading">
                <conditional_wrapper_1.default condition={typeof href !== 'undefined'} wrapper={(children) => <a className="ds_task-list__task-link" href={href}>{children}</a>}>
                    {title}
                    {statusText && <screen_reader_text_1.default>({statusText})</screen_reader_text_1.default>}
                </conditional_wrapper_1.default>
                </h3>
                <hint_text_1.default className="ds_task-list__task-summary">{children}</hint_text_1.default>
            </div>

            {typeof statusText !== 'undefined' &&
            <tag_1.default aria-hidden="true" colour={tagColour} title={statusText}/>}
        </li>);
};
exports.Task = Task;
/**
 * @param {Object} props
 * @param {string} props.intro - Intro text
 * @param {string} props.title - The title of the task group
 * @returns {JSX.Element} - The element
 */
const TaskGroup = ({ children, intro, title, ...props }) => {
    return (<li className="ds_task-list-group__section" {...props}>
            <h2 className="ds_task-list-heading">{title}</h2>
            {intro && <p className="ds_task-list-intro">{intro}</p>}
            <ul className="ds_task-list">
                {children}
            </ul>
        </li>);
};
exports.TaskGroup = TaskGroup;
const TaskList = ({ children, headingId = 'task-list', title }) => {
    let taskCount = 0;
    let incompleteTaskIds = [];
    let completedTasksCount = 0;
    function processChild(item) {
        if (item.type.displayName === 'Task') {
            taskCount = taskCount + 1;
            if (item.props.isComplete) {
                completedTasksCount = completedTasksCount + 1;
            }
            else {
                incompleteTaskIds.push(item.props.id);
            }
        }
        else if (item.type.displayName === 'TaskGroup') {
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
    return (<>
            <h2 id={`${headingId}-status`} className="ds_task-list-status-heading">{title}</h2>
            <nav aria-labelledby={`${headingId}-status`} className="ds_task-list-status">
                <p>You have completed {completedTasksCount} of {taskCount} sections.</p>
                {firstIncompleteTaskLink()}
            </nav>
            <ul className="ds_task-list">
                {children}
            </ul>
        </>);
};
TaskList.displayName = 'TaskList';
exports.Task.displayName = 'Task';
exports.TaskGroup.displayName = 'TaskGroup';
exports.default = TaskList;
