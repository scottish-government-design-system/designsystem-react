import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SequentialNavigation from './SequentialNavigation';

const meta = {
    title: 'Components/SequentialNavigation/SequentialNavigation.Previous',
    component: SequentialNavigation.Previous,
    argTypes: {
        href: argTypes.href({type: {name: 'string', required: true}}),
        linkComponent: argTypes.linkComponent(),
        textLabel: {
            description: 'String to use for the label that precedes the link text',
            type: 'string'
        },
        children: argTypes.children()
    },
    args: {
        href: '#previous',
        children: 'Apply for or renew a Blue Badge'
    }
} satisfies Meta<typeof SequentialNavigation.Previous>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const CustomLabel: Story = {
    args: {
        textLabel: 'Previous page'
    }
}
