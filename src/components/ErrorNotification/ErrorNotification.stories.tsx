import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import ErrorNotification from './ErrorNotification';

const meta = {
    title: 'Components/NotificationMessage/ErrorNotification',
    component: ErrorNotification,
    argTypes: {
        ariaLive: argTypes.ariaLive(),
        children: argTypes.children(),
        headingLevel: argTypes.headingLevel(),
        isDismissable: argTypes.boolean()
    },
    args: {
        ariaLive: 'polite',
        children: (<p>That link does not seem to be working.<br />Please try again.</p>),
        headingLevel: 'h3',
        isDismissable: false,
        title: 'Something went wrong',
    }
} satisfies Meta<typeof ErrorNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const NoChildren: Story = {
    args: {
        children: undefined
    }
};

export const DifferentHeadingLevel: Story = {
    args: {
        headingLevel: 'h2'
    }
};

export const Dismissable: Story = {
    args: {
        isDismissable: true
    }
};
