import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Metadata from './PageMetadata';

const meta = {
    title: 'Components/PageMetadata/PageMetadata.Item',
    component: Metadata.Item,
    decorators: [
        Story => (
            <Metadata>
                <dl className="ds_page-metadata__list">
                    <Story />
                </dl>
            </Metadata>
        )
    ],
    argTypes: {
        children: argTypes.children(),
        name: {
            description: 'The name or key of the metadata item',
            type: {
                name: 'string',
                required: true
            }
        }
    },
    args: {
        name: 'Last updated',
        children: '21/04/2020'

    }
} satisfies Meta<typeof Metadata.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
