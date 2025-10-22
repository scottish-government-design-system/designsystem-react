import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SummaryList from './SummaryList';

const meta = {
    title: 'Components/SummaryList/SummaryList.Value',
    component: SummaryList.Value,
    argTypes: {
        name: {
            description: 'Name of the summary value',
            type: {
                name: 'string',
                required: true
            }
        },
        children: argTypes.children()
    },
    args: {
        children: 'Jane Smith',
        name: 'Name'
    }
} satisfies Meta<typeof SummaryList.Value>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
