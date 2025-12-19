import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Metadata from './PageMetadata';

const meta = {
    title: 'Components/PageMetadata',
    component: Metadata,
    argTypes: {
        children: argTypes.children(),
        isInline: {
            control: 'boolean',
            description: 'Makes the page metadata use the truncated \'inline\' display'
        },
    },
    args: {
        children: <>
            <Metadata.Item name="Content type">
                Publication
            </Metadata.Item>
            <Metadata.Item name="Last updated">
                21/04/2020
            </Metadata.Item>
        </>
    }
} satisfies Meta<typeof Metadata>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const WithLinks: Story = {
    args: {
        children: <>
            <Metadata.Item name="Part of">
            <a href="#two">
                Equality and rights
            </a>
            ,{' '}
            <a href="#three">
                Law and order
            </a>
            </Metadata.Item>
        </>
    }
}

export const Inline: Story = {
    args: {
        children: <>
            <Metadata.Item name="Content type">
                Publication
            </Metadata.Item>
            <Metadata.Item name="Last updated">
                21/04/2020
            </Metadata.Item>
        </>,
        isInline: true
    }
}
