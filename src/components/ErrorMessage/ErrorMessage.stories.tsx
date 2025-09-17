import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import ErrorMessage from './ErrorMessage';

const meta = {
    title: 'Components/Error message',
    component: ErrorMessage,
    argTypes: {
        children: argTypes.children()
    }
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: <>This field is required</> }
};
