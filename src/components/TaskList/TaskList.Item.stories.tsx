import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import TaskList from './TaskList';

const meta = {
    title: 'Components/TaskList/TaskList.Item',
    component: TaskList.Item,
    decorators: [
        Story => (
            <ul>
                <Story />
            </ul>
        )
    ],
    argTypes: {
        href: argTypes.href(),
        id: {
            description: 'The value of the task\'s id attribute',
            type: 'string'
        },
        isComplete: {
            control: 'boolean',
            description: 'Whether the task is complete'
        },
        statusText: {
            description: 'The text to use for the task\'s status tag',
            type: 'string'
        },
        tagColour: argTypes.tagColour(),
        title: {
            description: 'The title of the task item',
            type: {
                name: 'string',
                required: true
            }
        },
        children: argTypes.children()
    },
    args: {
        title: 'Medications'
    }
} satisfies Meta<typeof TaskList.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const WithTextDescription: Story = {
    args: {
        children: 'Tell us about any medication you need.'
    }
};

export const WithStatusTag: Story = {
    args: {
        children: 'Tell us about any medication you need.',
        statusText: 'Cannot start yet'
    }
};

export const WithLink: Story = {
    args: {
        children: 'Tell us about any medication you need.',
        href: '#medication'
    }
};

export const Complete: Story = {
    args: {
        children: 'Tell us about any medication you need.',
        isComplete: true
    }
};
