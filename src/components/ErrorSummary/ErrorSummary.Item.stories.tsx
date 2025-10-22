import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import ErrorSummary from './ErrorSummary';

const meta = {
    title: 'Components/ErrorSummary/ErrorSummary.Item',
    component: ErrorSummary.Item,
    decorators: [
        Story => (
            <ul className="ds_error-summary__list">
                <Story />
            </ul>
        )
    ],
    argTypes: {
        fragmentId: {
            description: 'ID of the question or field to link to',
            type: 'string'
        },
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        fragmentId: 'did-resolve',
        children: 'Did this resolve your issue?'
    }
} satisfies Meta<typeof ErrorSummary.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
