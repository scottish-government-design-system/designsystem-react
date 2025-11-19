declare const TaskList: {
    ({ children, className, headingId, title, ...props }: SGDS.Component.TaskList): import("react").JSX.Element;
    displayName: string;
    Item: {
        ({ children, className, href, id, isComplete, linkComponent, statusText, tagColour, title, ...props }: SGDS.Component.TaskList.Item): import("react").JSX.Element;
        displayName: string;
    };
    Group: {
        ({ children, className, intro, title, ...props }: SGDS.Component.TaskList.Group): import("react").JSX.Element;
        displayName: string;
    };
};
export default TaskList;
