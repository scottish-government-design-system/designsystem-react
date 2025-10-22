import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SummaryCard from './SummaryCard';

const meta = {
    title: 'Components/SummaryCard/SummaryCard.Action',
    component: SummaryCard.Action,
    decorators: [
        Story => (
            <div className="ds_summary-card__header">
                <Story />
            </div>
        )
    ],
    argTypes: {
        href: argTypes.href(),
        onClick: argTypes.onClick(),
        children: argTypes.children()
    },
    args: {
        children: 'Change',
        href: '#foo'
    }
} satisfies Meta<typeof SummaryCard.Action>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const ActionIsHtmlButton: Story = {
    args: {
        children: 'Change',
        href: undefined
    }
};
