import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import NotificationBanner from './NotificationBanner';

const meta = {
    title: 'Components/Notification banner',
    component: NotificationBanner,
    argTypes: {
        children: argTypes.children(),
        hasColourIcon: {
            control: 'boolean',
            description: 'Makes the icon display in the alternative colour scheme'
        },
        hasIcon: {
            description: 'Shows the ‘high priority’ icon on the notification banner',
            control: 'boolean'
        },
        hasInverseIcon: {
            control: 'boolean',
            description: 'Makes the icon be inverted against a circle background'
         },
        isDismissable: {
            control: 'boolean',
            description: 'Shows a ‘close’ button on the notification banner'
         },
        title: {
            description: 'A hidden title for the notification banner, useful for screen reader users',
            type: 'string'
        }
    },
    args: {
        children: <p>We need to tell you about <a href="#notification">something</a></p>,
        title: 'Information'
    }
} satisfies Meta<typeof NotificationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const Dismissable: Story = {
    args: {
        isDismissable: true
    }
};

export const WithIcon: Story = {
    args: {
        hasColourIcon: true,
        hasInverseIcon: true,
        hasIcon: true
    }
};
