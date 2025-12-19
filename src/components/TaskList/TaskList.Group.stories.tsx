import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import TaskList from './TaskList';

const meta = {
    title: 'Components/TaskList/TaskList.Group',
    component: TaskList.Group,
    decorators: [
        Story => (
            <div className="ds_task-list">
                <ul>
                    <Story />
                </ul>
            </div>
        )
    ],
    argTypes: {
        title: {
            description: 'The title of the task list',
            type: {
                name: 'string',
                required: true
            }
        },
        children: argTypes.children()
    },
    args: {
        title: 'Tell us about your daily living and mobility circumstances'
    }
} satisfies Meta<typeof TaskList.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <TaskList.Group {...args}>
            <TaskList.Item
            href="#preparing-food"
            id="task-preparing-food"
            statusText="In progress"
            tagColour="grey"
            title="Preparing food"
            >
            Questions about your ability to prepare a simple meal safely and any help you need to do this.
            </TaskList.Item>
            <TaskList.Item
            href="#taking-nutrition"
            id="task-taking-nutrition"
            statusText="Not started"
            tagColour="grey"
            title="Taking nutrition"
            >
            Questions about your ability to eat and drink and any help you need to do this.
            </TaskList.Item>
            <TaskList.Item
            href="#managing-therapy"
            id="task-managing-therapy"
            statusText="Not started"
            tagColour="grey"
            title="Managing therapy or monitoring a health condition"
            >
            Questions about any help you need to monitor changes in your health condition, take medication or do therapy at home.
            </TaskList.Item>
        </TaskList.Group>
    )
};

export const WithIntroduction: Story = {
    args: {
        intro: 'This information will be used to check what additional benefits you may be able to apply for.'
    },
    render: (args) => (
        <TaskList.Group {...args}>
            <TaskList.Item
            href="#preparing-food"
            id="task-preparing-food"
            statusText="In progress"
            tagColour="grey"
            title="Preparing food"
            >
            Questions about your ability to prepare a simple meal safely and any help you need to do this.
            </TaskList.Item>
            <TaskList.Item
            href="#taking-nutrition"
            id="task-taking-nutrition"
            statusText="Not started"
            tagColour="grey"
            title="Taking nutrition"
            >
            Questions about your ability to eat and drink and any help you need to do this.
            </TaskList.Item>
            <TaskList.Item
            href="#managing-therapy"
            id="task-managing-therapy"
            statusText="Not started"
            tagColour="grey"
            title="Managing therapy or monitoring a health condition"
            >
            Questions about any help you need to monitor changes in your health condition, take medication or do therapy at home.
            </TaskList.Item>
        </TaskList.Group>
    )
};
