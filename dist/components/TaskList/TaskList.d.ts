import { TaskListGroupProps, TaskListItemProps, TaskListProps } from './types';
declare const TaskList: {
    ({ children, className, headingId, title, ...props }: TaskListProps): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, className, href, id, isComplete, linkComponent, statusText, tagColour, title, ...props }: TaskListItemProps): import("react").JSX.Element;
        displayName: string;
    };
    Group: {
        ({ children, className, intro, title, ...props }: TaskListGroupProps): import("react").JSX.Element;
        displayName: string;
    };
};
export default TaskList;
