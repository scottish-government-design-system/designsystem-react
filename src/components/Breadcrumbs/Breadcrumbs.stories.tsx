import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Breadcrumbs from './Breadcrumbs';

const meta = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        children: <>
            <Breadcrumbs.Item href="#home">
                Home
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href="#category">
                Category
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
                Page
            </Breadcrumbs.Item>
        </>
    }
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const HideLastItem: Story = {
    args: {
        children: <>
            <Breadcrumbs.Item href="#home">
                Home
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href="#category">
                Category
            </Breadcrumbs.Item>
            <Breadcrumbs.Item isHidden>
                Page
            </Breadcrumbs.Item>
        </>
    }
};
