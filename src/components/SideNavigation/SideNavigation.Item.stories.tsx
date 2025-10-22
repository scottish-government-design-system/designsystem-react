import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SideNavigation from './SideNavigation';

const meta = {
    title: 'Components/SideNavigation/SideNavigation.Item',
    component: SideNavigation.Item,
    decorators: [
        Story => (
            <nav className="ds_side-navigation">
                <ul className="ds_side-navigation__list">
                    <Story />
                </ul>
            </nav>
        )
    ],
    argTypes: {
        href: argTypes.href(),
        isCurrent: argTypes.isCurrent(),
        linkComponent: argTypes.linkComponent(),
        title: {
            description: 'Text of the navigation item',
            type: 'string'
        },
        children: argTypes.children()
    },
    args: {
        href: '#bananas',
        title: 'Bananas'
    }
} satisfies Meta<typeof SideNavigation.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const CurrentItem: Story = {
    args: {
        isCurrent: true
    }
};
