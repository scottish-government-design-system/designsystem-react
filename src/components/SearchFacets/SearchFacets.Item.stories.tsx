import type { Meta, StoryObj } from '@storybook/react-vite';

import Facets from './SearchFacets';

const meta = {
    title: 'Components/Search results/Facets/Item',
    component: Facets.Item,
    decorators: [
        (Story) => (
            <div className="ds_facets">
                <Story />
            </div>
        )
    ],
    argTypes: {
        accessibleName: {
            description: 'Accessible name for the facet button. If not provided, the title will be used. This content becomes part of the facet button\'s aria-label attribute.',
            type: 'string'
        },
        joinContent: {
            description: 'Content to display before the facet button when there are multiple facets in a group. This should be provided to the parent Group instead.',
            type: 'string'
        },
        onClick: {
            description: 'Callback for when the facet button is clicked',
            control: false
        },
        title: {
            description: 'Text content of the facet button.',
            type: {
                name: 'string',
                required: true
            }
        },
    },
    args: {
        title: 'Advice and guidance'
    }
} satisfies Meta<typeof Facets.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const CustomAccessibleText: Story = {
    args: {
        accessibleName: 'Updated before 31st October 2025',
        title: '31/10/2025'
    }
}
