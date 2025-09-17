import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import PageHeader from './PageHeader';
import Metadata from '../PageMetadata/PageMetadata';

const meta = {
    title: 'Components/Page header',
    component: PageHeader,
    argTypes: {
        children: argTypes.children(),
        label: {
            description: 'Text to use for a label shown above the H1 element',
            type: 'string'
        },
        title: {
            description: 'Text to use for the H1 element',
            type: {
                name: 'string',
                required: true
            }
        }
    },
    args: {
        label: 'Publication - Research and analysis',
        title: 'Cancer prehabilitation in Scotland: 2025 survey findings report'
    }
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const WithMetadata: Story = {
    args: {
        children: <>
            <Metadata>
                <Metadata.Item name="Published">
                    3 September 2025
                </Metadata.Item>
                <Metadata.Item name="From">
                    <a href="#two">
                        Director-General Health and Social Care
                    </a>
                </Metadata.Item>
                <Metadata.Item name="Directorate">
                    <a href="#one">
                        Population Health Directorate
                    </a>
                </Metadata.Item>
                <Metadata.Item name="ISBN">
                    9781806431007
                </Metadata.Item>
            </Metadata>
        </>
    }
};
