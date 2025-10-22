import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Facets from './SearchFacets';

const meta = {
    title: 'Components/Search results/Facets',
    component: Facets,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        title: 'Application incomplete'
    }
} satisfies Meta<typeof Facets>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args: any) => (
        <Facets {...args}>
            <Facets.Group title="Content type">
                <Facets.Item title="Advice and guidance" />
                <Facets.Item title="Factsheet"/>
                <Facets.Item title="Statistics" />
            </Facets.Group>
            <Facets.Group title="Topic">
                <Facets.Item title="Children and families"/>
                <Facets.Item title="Education"/>
            </Facets.Group>
            <Facets.Group title="Updated between" joinContent="and">
                <Facets.Item accessibleName="Updated after 20/11/2023" title="20/11/2023"/>
                <Facets.Item accessibleName="Updated before 02/04/2024" title="02/04/2024"/>
            </Facets.Group>
        </Facets>
    )
};
