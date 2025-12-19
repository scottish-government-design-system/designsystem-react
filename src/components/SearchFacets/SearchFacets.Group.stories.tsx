import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Facets from './SearchFacets';

const meta = {
    title: 'Components/Search results/Facets/Group',
    component: Facets.Group,
    decorators: [
        (Story) => (
            <div className="ds_facets">
                <Story />
            </div>
        )
    ],
    argTypes: {
        children: argTypes.children(),
        joinContent: {
            description: 'Content to display between the facet items when there are multiple items in the group',
            type: 'string'
        },
        title: {
            description: 'Title of the facet group',
            type: {
                name: 'string',
                required: true
            }
        }
    },
    args: {
        title: 'Content type'
    }
} satisfies Meta<typeof Facets.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ... args }) => (
        <Facets.Group {...args}>
            <Facets.Item title="Advice and guidance" />
            <Facets.Item title="Factsheet"/>
            <Facets.Item title="Statistics" />
        </Facets.Group>
    )
};

export const CustomJoinContent: Story = {
    render: () => (
        <Facets.Group joinContent="and" title="Updated between">
            <Facets.Item accessibleName="Updated after 01/10/2025" title="01/10/2025" />
            <Facets.Item accessibleName="Updated before 31/10/2025" title="31/10/2025"/>
        </Facets.Group>
    )
};
