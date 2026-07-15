import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';
import BackLink from './BackLink';

const meta = {
    title: 'Components/BackLink',
    component: BackLink,
    argTypes: {
        children: argTypes.children(),
        linkComponent: argTypes.linkComponent(),
    },
    args: {
        href: '#foo'
    }
} satisfies Meta<typeof BackLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const CustomContent: Story = {
    args: {
        children: 'Custom back link text'
    }
}
