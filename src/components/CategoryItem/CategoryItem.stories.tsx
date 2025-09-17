import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import CategoryItem from './CategoryItem';

const meta = {
    title: 'Components/Category item',
    component: CategoryItem,
    argTypes: {
        children: argTypes.children(),
        headingLevel: argTypes.headingLevel(),
        href: {
            description: 'URL used in the title\'s link',
            type: 'string'
        },
        linkComponent: argTypes.linkComponent(),
        tagName: {
            description: 'HTML tag name to use for the item',
            type: 'string'
        },
        title: {
            description: 'The title of the category item',
            type: 'string'
        }
    },
    args: {
        title: 'Public transport, bus passes and discounts',
        children: 'Find information about local travel by road, rail and water and National Entitlement Cards.',
        href: '/driving-transport/local-travel'
    }
} satisfies Meta<typeof CategoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const NoSummary: Story = {
    args: {
        children: undefined
    }
};

export const DifferentHeadingLevel: Story = {
    args: {
        headingLevel: 'h3'
    }
};

export const DifferentContainerElement: Story = {
    args: {
        tagName: 'article'
    }
};
