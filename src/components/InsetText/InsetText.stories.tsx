import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import InsetText from './InsetText';

const meta = {
    title: 'Components/Inset text',
    component: InsetText,
    argTypes: {
        children: argTypes.children()
    }
} satisfies Meta<typeof InsetText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <p>You may be able to <a href="#inset">apply for free school meals</a> at the same time as you apply for the clothing grant.</p>
    }
};
