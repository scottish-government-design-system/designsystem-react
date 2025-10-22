import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SideNavigation from './SideNavigation';

const meta = {
    title: 'Components/SideNavigation/SideNavigation.List',
    component: SideNavigation.List,
    decorators: [
        Story => (
            <nav className="ds_side-navigation">
                <Story />
            </nav>
        )
    ],
    argTypes: {
        isRoot: {
            description: 'Indicates that this is the root list in a nested structure. Required for mobile navigation.',
            control: 'boolean'
        },
        children: argTypes.children()
    },
    args: {
        children: <>
            <SideNavigation.Item
                isCurrent
                href="#apples"
                title="Apples"
            >
            </SideNavigation.Item>
            <SideNavigation.Item
                href="#bananas"
                title="Bananas"
            />
            <SideNavigation.Item
                href="#cherries"
                title="Cherries"
            />
            <SideNavigation.Item
                href="#dates"
                title="Dates"
            />
        </>,
        isRoot: true
    }
} satisfies Meta<typeof SideNavigation.List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
