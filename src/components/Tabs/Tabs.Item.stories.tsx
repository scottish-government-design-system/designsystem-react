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
        children: [
            <h3 key="1">Search for training courses and funding</h3>,
            <p key="2">A wide range of training courses for your employees are available.</p>,
            <p key="3">Opportunities include distance learning, short courses and vocational training.</p>,
            <p key="4"><a href="#">Visit My World of Work to search for training courses</a>.</p>,
            <p key="5">You can also <a href="#">search for training courses, and funding towards training</a>.</p>
        ],
        tabLabel: 'Courses and funding',
        id: 'my-tab'
    }
} satisfies Meta<typeof Tabs.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
