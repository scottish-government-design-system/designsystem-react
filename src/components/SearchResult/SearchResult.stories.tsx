import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';
import SearchResult from './SearchResult';
// @ts-expect-error no types
import coo from '../../../static/images/highland-cow.jpg';

const meta = {
    title: 'Components/Search results/Result',
    component: SearchResult,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        title: 'Greenhouse gas statistics 1990-2022',
        href: '#foo'
    }
} satisfies Meta<typeof SearchResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <SearchResult {...args}>
            <SearchResult.Content>
                Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
            </SearchResult.Content>
        </SearchResult>
    )
};

export const Metadata: Story = {
    render: (args) => (
        <SearchResult {...args}>
            <SearchResult.Content>
                Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
            </SearchResult.Content>
            <SearchResult.Meta>
                <SearchResult.MetaItem name="Publication type">
                    Statistics
                </SearchResult.MetaItem>
                <SearchResult.MetaItem name="Date">
                    18 June 2024
                </SearchResult.MetaItem>
            </SearchResult.Meta>
        </SearchResult>
    )
};

export const Context: Story = {
    render: (args) => (
        <SearchResult {...args}>
            <SearchResult.Content>
                Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
            </SearchResult.Content>
            <SearchResult.Context title="Part of">
                <SearchResult.ContextItem><a href="#">Environment statistics</a></SearchResult.ContextItem>
                <SearchResult.ContextItem><a href="#">Energy statistics</a></SearchResult.ContextItem>
            </SearchResult.Context>
        </SearchResult>
    )
};

export const Media: Story = {
    render: (args) => (
        <SearchResult {...args}>
            <SearchResult.Content>
                <SearchResult.Media>
                    <img src={coo} alt="" />
                </SearchResult.Media>
                Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
            </SearchResult.Content>
        </SearchResult>
    )
};

export const Promoted: Story = {
    render: (args) => (
        <SearchResult isPromoted {...args}>
            <SearchResult.Content>
                Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
            </SearchResult.Content>
        </SearchResult>
    )
};

export const KitchenSink: Story = {
    render: (args) => (
        <SearchResult isPromoted {...args}>
            <SearchResult.Content>
                <SearchResult.Media>
                    <img src={coo} alt="" />
                </SearchResult.Media>
                Official statistics showing emissions of greenhouse gases in Scotland over the period 1990 to 2022.
            </SearchResult.Content>
            <SearchResult.Meta>
                <SearchResult.MetaItem name="Publication type">
                    Statistics
                </SearchResult.MetaItem>
                <SearchResult.MetaItem name="Date">
                    18 June 2024
                </SearchResult.MetaItem>
            </SearchResult.Meta>
            <SearchResult.Context title="Part of">
                <SearchResult.ContextItem><a href="#">Environment statistics</a></SearchResult.ContextItem>
                <SearchResult.ContextItem><a href="#">Energy statistics</a></SearchResult.ContextItem>
            </SearchResult.Context>
        </SearchResult>
    )
};
