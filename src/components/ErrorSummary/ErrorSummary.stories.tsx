import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import ErrorSummary from './ErrorSummary';

const meta = {
    title: 'Components/Error summary',
    component: ErrorSummary,
    argTypes: {
        linkComponent: argTypes.linkComponent(),
        title: {
            description: 'The title of the error summary',
            type: 'string'
        },
        children: argTypes.children()
    },
    args: {
        children: <>
            <ErrorSummary.Item fragmentId="did-resolve">
                Did this resolve your issue?
            </ErrorSummary.Item>
            <ErrorSummary.Item fragmentId="what-topics">
                What topics are you interested in?
            </ErrorSummary.Item>
            <ErrorSummary.Item fragmentId="more-detail">
                Please provide more detail
            </ErrorSummary.Item>
        </>,
        title: 'There is a problem'
    }
} satisfies Meta<typeof ErrorSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
