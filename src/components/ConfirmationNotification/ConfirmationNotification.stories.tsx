import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import ConfirmationNotification from './ConfirmationNotification';

const meta = {
    title: 'Components/NotificationMessage/ConfirmationNotification',
    component: ConfirmationNotification,
    argTypes: {
        ariaLive: argTypes.ariaLive(),
        children: argTypes.children(),
        headingLevel: argTypes.headingLevel(),
        isDismissable: argTypes.boolean()
    },
    args: {
        ariaLive: 'polite',
        children: (<p>You have added the landlord <strong>John Smith</strong> to the application.</p>),
        headingLevel: 'h3',
        isDismissable: false,
        title: 'Landlord added successfully',
    }
} satisfies Meta<typeof ConfirmationNotification>;

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
