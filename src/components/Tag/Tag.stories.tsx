import type { Meta, StoryObj } from '@storybook/react-vite';

import Tag from './Tag';

const meta = {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        colour: {
            options: ['', 'blue', 'green', 'grey', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'],
            control: { type: 'select' },
            type: 'string'
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Status',
    },
};
