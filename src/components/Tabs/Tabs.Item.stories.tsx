import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Tabs from './Tabs';

const meta = {
    title: 'Components/Tabs/Tabs.Item',
    component: Tabs.Item,
    argTypes: {
        tabLabel: {
            description: '',
            type: {
                name: 'string',
                required: true
            }
        },
        children: argTypes.children()
    },
    args: {
        baseId: 'my-tabs',
        children: [
            <h3>Search for training courses and funding</h3>,
            <p>A wide range of training courses for your employees are available.</p>,
            <p>Opportunities include distance learning, short courses and vocational training.</p>,
            <p><a href="#">Visit My World of Work to search for training courses</a>.</p>,
            <p>You can also <a href="#">search for training courses, and funding towards training</a>.</p>
        ],
        tabLabel: 'Courses and funding'
    }
} satisfies Meta<typeof Tabs.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
