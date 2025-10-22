import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Breadcrumbs from './Breadcrumbs';

const meta = {
    title: 'Components/Breadcrumbs/Breadcrumb.Item',
    component: Breadcrumbs.Item,
    decorators: [
        Story => (
            <Breadcrumbs>
                <Story />
            </Breadcrumbs>
        )
    ],
    argTypes: {
        href: argTypes.href({type: {name: 'string', required: true}}),
        isHidden: {
            description: 'Applies a visually-hidden CSS class',
            control: 'boolean'
        },
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        href: '#foo',
        children: 'Category'
    }
} satisfies Meta<typeof Breadcrumbs.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const Hidden: Story = {
    args: {
        isHidden: true
    }
};
