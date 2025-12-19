import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import PhaseBanner from './PhaseBanner';

const meta = {
    title: 'Components/PhaseBanner',
    component: PhaseBanner,
    argTypes: {
        children: argTypes.children(),
        phaseName: {
            description: 'The text for the banner\'s tag component.',
            type: 'string'
        }
    },
    args: {
        phaseName: 'Beta'
    }
} satisfies Meta<typeof PhaseBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        phaseName: 'Beta'
    },
};

export const CustomContent: Story = {
    args: {
        phaseName: 'Beta',
        children: <>This is a new service. Your <a href="#foo">feedback</a> will help us to improve it.</>
    }
};
