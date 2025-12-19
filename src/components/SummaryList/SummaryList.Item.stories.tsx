import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SummaryList from './SummaryList';

const meta = {
    title: 'Components/SummaryList/SummaryList.Item',
    component: SummaryList.Item,
    decorators: [
        Story => (
            <ul>
                <Story />
            </ul>
        )
    ],
    argTypes: {
        title: {
            description: 'Title of the summary list item.',
            type: {
                name: 'string',
                required: true
            }
        },
        children: argTypes.children()
    },
    args: {
        title: 'Contact details',
        children: [
            <SummaryList.Value name="Email" key="1">
                email@gov.scot
            </SummaryList.Value>,
            <SummaryList.Value name="Telephone" key="2">
                0123 456 7890
            </SummaryList.Value>,
            <SummaryList.Action href="foo" key="3">
                Change
            </SummaryList.Action>,
            <SummaryList.Action onclick={function w(){}} key="4">
                Delete
            </SummaryList.Action>
        ]
    }
} satisfies Meta<typeof SummaryList.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
