import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SearchSort from './SearchSort';

const meta = {
    title: 'Components/Search results/Sort',
    component: SearchSort,
    argTypes: {
        children: argTypes.children(),
        id: argTypes.id(),
        label: argTypes.label({ defaultValue: 'Sort by' }),
        onApply: argTypes.onClick({ description: 'Callback function to be called when the Apply sort button is clicked' }),
    },
    args: {
        id: 'sort-by',
        label: 'Sort by',
        children: <></>
    }
} satisfies Meta<typeof SearchSort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <SearchSort {...args}>
            <SearchSort.Option value="relevance">Most relevant</SearchSort.Option>
            <SearchSort.Option value="date">Updated (newest)</SearchSort.Option>
            <SearchSort.Option value="adate">Updated (oldest)</SearchSort.Option>
        </SearchSort>
    )
};
