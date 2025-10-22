import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SiteNavigation from './SiteNavigation';

const meta = {
    title: 'Components/SiteNavigation/SiteNavigation.Item',
    component: SiteNavigation.Item,
    decorators: [
        Story => (
            <nav className="ds_site-navigation">
                <ul className="ds_site-navigation__list">
                    <Story />
                </ul>
            </nav>
        )
    ],
    argTypes: {
        href: argTypes.href({type: {name: 'string', required: true}}),
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        children: 'About',
        href: '#about'
    }
} satisfies Meta<typeof SiteNavigation.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const CurrentItem: Story = {
    args: {
        isCurrent: true
    }
};
