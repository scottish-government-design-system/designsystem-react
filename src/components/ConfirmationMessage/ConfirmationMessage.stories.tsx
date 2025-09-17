import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import ConfirmationMessage from './ConfirmationMessage';

const meta = {
    title: 'Components/Confirmation Message',
    component: ConfirmationMessage,
    argTypes: {
        headingLevel: argTypes.headingLevel(),
        ariaLive: argTypes.ariaLive(),
        children: argTypes.children()
    },
    args: {
        ariaLive: 'polite',
        children: (<p>You have added the landlord <strong>John Smith</strong> to the application.</p>),
        headingLevel: 'h3',
        title: 'Landlord added successfully',
    }
} satisfies Meta<typeof ConfirmationMessage>;

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
