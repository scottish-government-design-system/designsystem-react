import type { Meta, StoryObj } from '@storybook/react-vite';

import Tag from './Tag';

const meta = {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        colour: {
            control: { type: 'select' },
            description: 'The tag colour to use',
            options: ['', 'blue', 'green', 'grey', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'],
            type: 'string'
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Status',
    },
};
