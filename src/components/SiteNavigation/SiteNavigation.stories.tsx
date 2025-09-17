import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SiteNavigation from './SiteNavigation';

const meta = {
    title: 'Components/Site navigation',
    component: SiteNavigation,
    argTypes: {
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        children: <>
            <SiteNavigation.Item href="#about">
                About
            </SiteNavigation.Item>
            <SiteNavigation.Item href="#get-started">
                Get started
            </SiteNavigation.Item>
            <SiteNavigation.Item href="#styles">
                Styles
            </SiteNavigation.Item>
            <SiteNavigation.Item
                isCurrent
                href="#components"
            >
                Components
            </SiteNavigation.Item>
            <SiteNavigation.Item href="#patterns">
                Patterns
            </SiteNavigation.Item>
            <SiteNavigation.Item href="#guidance">
                Guidance
            </SiteNavigation.Item>
        </>
    }
} satisfies Meta<typeof SiteNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
