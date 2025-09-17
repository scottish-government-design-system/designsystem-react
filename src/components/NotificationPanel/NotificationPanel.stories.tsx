import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import NotificationPanel from './NotificationPanel';

const meta = {
    title: 'Components/Notification panel',
    component: NotificationPanel,
    argTypes: {
        ariaLive: argTypes.ariaLive(),
        headingLevel: argTypes.headingLevel(),
        title: {
            description: 'Title of the notification panel',
            type: {
                name: 'string',
                required: true
            }
        },
        children: argTypes.children()
    },
    args: {
        children: <p>Your Saltire Scholarship Application form has been successfully submitted.</p>,
        title: 'Thank you'
    }
} satisfies Meta<typeof NotificationPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
