import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import TaskList from './TaskList';

const meta = {
    title: 'Components/TaskList',
    component: TaskList,
    argTypes: {
        headingId: {
            description: 'ID of the task list\'s heading element',
            type: 'string'
        },
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
        title: 'Application incomplete'
    }
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <TaskList {...args}>
            <TaskList.Item
                href="#conditions"
                id="task-conditions"
                isComplete
                statusText="Completed"
                title="Conditions"
            >
                Tell us about your conditions, symptoms and any sensory issues you have.
            </TaskList.Item>
            <TaskList.Item
                href="#in-progress"
                id="task-medications"
                statusText="In progress"
                title="Medications"
            >
                Tell us about any medication you need.
            </TaskList.Item>
            <TaskList.Item
                id="task-contacts"
                statusText="Cannot start yet"
                title="Contacts and supporting information"
            >
                Share any supporting documents and provide details of people we can talk to about you.
            </TaskList.Item>
        </TaskList>
    )
};

export const Groups: Story = {
    render: (args) => (
        <TaskList {...args}>
            <TaskList.Group title="Provide your health details">
                <TaskList.Item
                href="#conditions"
                id="task-conditions"
                isComplete
                statusText="Completed"
                title="Conditions"
                >
                Tell us about your conditions, symptoms and any sensory issues you have.
                </TaskList.Item>
                <TaskList.Item
                href="#in-progress"
                id="task-medications"
                isComplete
                statusText="Completed"
                title="Medications"
                >
                Tell us about any medication you need.
                </TaskList.Item>
                <TaskList.Item
                href="#contacts"
                id="task-contacts"
                isComplete
                statusText="Completed"
                title="Contacts and supporting information"
                >
                Share any supporting documents and provide details of people we can talk to about you.
                </TaskList.Item>
            </TaskList.Group>
            <TaskList.Group
                intro="This information will be used to check what additional benefits you may be able to apply for."
                title="Tell us about your daily living and mobility circumstances"
            >
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
        </TaskList>
    )
};
