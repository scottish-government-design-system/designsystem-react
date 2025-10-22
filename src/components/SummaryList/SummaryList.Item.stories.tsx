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
        Title: {
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
            <SummaryList.Value name="Email">
                email@gov.scot
            </SummaryList.Value>,
            <SummaryList.Value name="Telephone">
                0123 456 7890
            </SummaryList.Value>,
            <SummaryList.Action href="foo">
                Change
            </SummaryList.Action>,
            <SummaryList.Action onclick={function w(){}}>
                Delete
            </SummaryList.Action>
        ]
    }
} satisfies Meta<typeof SummaryList.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
