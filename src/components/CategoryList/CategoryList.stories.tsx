import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import CategoryList from './CategoryList';
import CategoryItem from '../CategoryItem/CategoryItem';

const meta = {
    title: 'Components/Category list',
    component: CategoryList,
    argTypes: {
        children: argTypes.children(),
        isGrid: {
            description: 'Show the category items in a grid',
            type: 'boolean'
        },
        isOrdered: {
            description: 'Use an ordered list for the category items in the list',
            type: 'boolean'
        }
    },
    args: {
    }
} satisfies Meta<typeof CategoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <CategoryList {...args}>
            <CategoryItem title="Public transport, bus passes and discounts" href="#foo">Find information about local travel by road, rail and water and National Entitlement Cards.</CategoryItem>
            <CategoryItem title="Parking and Blue Badges" href="#bar">Find out about getting a disabled parking space and information on Blue Badges.</CategoryItem>
            <CategoryItem title="Apply to reduce your driving disqualification period" href="#baz">How to apply to court to reduce your driving ban. Includes who can apply and how much it costs.</CategoryItem>
            <CategoryItem title="Road safety: parking tickets, fines and bans" href="#qux">Find out about the drink-drive limit, how to stay safe on the roads and what to do if you receive parking tickets.</CategoryItem>
        </CategoryList>
    )
};

export const Grid: Story = {
    args: {
        isGrid: true
    },
    render: (args) => (
        <CategoryList {...args}>
            <CategoryItem title="Public transport, bus passes and discounts" href="#foo">Find information about local travel by road, rail and water and National Entitlement Cards.</CategoryItem>
            <CategoryItem title="Parking and Blue Badges" href="#bar">Find out about getting a disabled parking space and information on Blue Badges.</CategoryItem>
            <CategoryItem title="Apply to reduce your driving disqualification period" href="#baz">How to apply to court to reduce your driving ban. Includes who can apply and how much it costs.</CategoryItem>
            <CategoryItem title="Road safety: parking tickets, fines and bans" href="#qux">Find out about the drink-drive limit, how to stay safe on the roads and what to do if you receive parking tickets.</CategoryItem>
        </CategoryList>
    )
};

export const OrderedList: Story = {
    args: {
        isOrdered: true
    },
    render: (args) => (
        <CategoryList {...args}>
            <CategoryItem title="Public transport, bus passes and discounts" href="#foo">Find information about local travel by road, rail and water and National Entitlement Cards.</CategoryItem>
            <CategoryItem title="Parking and Blue Badges" href="#bar">Find out about getting a disabled parking space and information on Blue Badges.</CategoryItem>
            <CategoryItem title="Apply to reduce your driving disqualification period" href="#baz">How to apply to court to reduce your driving ban. Includes who can apply and how much it costs.</CategoryItem>
            <CategoryItem title="Road safety: parking tickets, fines and bans" href="#qux">Find out about the drink-drive limit, how to stay safe on the roads and what to do if you receive parking tickets.</CategoryItem>
        </CategoryList>
    )
};
