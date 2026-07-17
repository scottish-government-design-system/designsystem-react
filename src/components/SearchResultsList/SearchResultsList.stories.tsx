import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SearchResultsList from './SearchResultsList';
import SearchResult from '../SearchResult/SearchResult';

const meta = {
    title: 'Components/Search results/List',
    component: SearchResultsList,
    argTypes: {
        children: argTypes.children(),
        start: {
            control: {
                type: 'number', step: 1
            },
            description: 'Start page of the results list',
            type: 'number'
        },
        totalResults: {
            control: {
                type: 'number', step: 1
            },
            description: 'Total number of the results, used for tracking atributes',
            type: 'number'
        }
    },
    args: {
        children: <></>
    }
} satisfies Meta<typeof SearchResultsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <SearchResultsList {...args}>
            <SearchResult href="#foo" title="Greenhouse gas statistics 1990-2022">
                <SearchResult.Content>
                    Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
                </SearchResult.Content>
            </SearchResult>

            <SearchResult href="#foo" title="Greenhouse gas statistics 1990-2022">
                <SearchResult.Content>
                    Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
                </SearchResult.Content>
            </SearchResult>
        </SearchResultsList>
    )
};
