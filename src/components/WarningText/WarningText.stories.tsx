import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import WarningText from './WarningText';

const meta = {
    title: 'Components/Warning text',
    component: WarningText,
    argTypes: {
        children: argTypes.children()
    }
} satisfies Meta<typeof WarningText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <p>Call 999 if you or someone else is in immediate danger, or if the crime is in progress.</p>
    }
};
