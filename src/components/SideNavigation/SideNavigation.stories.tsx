import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SideNavigation from './SideNavigation';

const meta = {
    title: 'Components/Side navigation',
    component: SideNavigation,
    argTypes: {
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        children: <>
            <SideNavigation.List isRoot>
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
            </SideNavigation.List>
        </>
    }
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const NestedNavigation: Story = {
    args: {
        children: <>
            <SideNavigation.List isRoot>
                <SideNavigation.Item
                    href="#apples"
                    title="Apples"
                >
                <SideNavigation.List>
                    <SideNavigation.Item
                        href="#green-apples"
                        title="Green apples"
                    >
                    <SideNavigation.List>
                        <SideNavigation.Item
                            isCurrent
                            href="#bramley"
                            title="Bramley"
                        />
                        <SideNavigation.Item
                            href="#granny-smith"
                            title="Granny smith"
                        />
                    </SideNavigation.List>
                    </SideNavigation.Item>
                    <SideNavigation.Item
                        href="#red-apples"
                        title="Red apples"
                    />
                </SideNavigation.List>
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
            </SideNavigation.List>
        </>
    }
};
