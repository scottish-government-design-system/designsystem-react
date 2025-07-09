import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import PhaseBanner from './PhaseBanner';

const meta = {
    title: 'Components/Phase banner',
    component: PhaseBanner,
    tags: ['autodocs'],
    argTypes: {
        children: {
            table: {
                type: {
                    summary: 'string | element'
                }
            }
        }
    }
} satisfies Meta<typeof PhaseBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        phaseName: 'Beta'
    },
};

export const TextContent: Story = {
    args: {
        phaseName: 'Beta',
        children: 'This is a new service. Your feedback will help us to improve it.'
    },
    render: (args: any) => (
        <PhaseBanner {...args}></PhaseBanner>
    )
};

export const HTMLContent: Story = {
    args: {
        phaseName: 'Beta',
        children: <>This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.</>
    },
    render: (args: any) => (
        <PhaseBanner {...args}></PhaseBanner>
    )
};
