import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SummaryCard from './SummaryCard';
import SummaryList from '../SummaryList/SummaryList';

const meta = {
    title: 'Components/SummaryCard',
    component: SummaryCard,
    argTypes: {
        headingLevel: argTypes.headingLevel(),
        title: {
            description: 'The title of the summary card',
            type: {
                name: 'string',
                required: true
            }
        },
        children: argTypes.children()
    },
    args: {
        children: [
            <SummaryCard.Action key="foo" href="#foo">
                Change
            </SummaryCard.Action>,
            <SummaryCard.Action key="bar" onclick={() => alert('click')}>
                Delete
            </SummaryCard.Action>,
            <SummaryList key="baz">
                <SummaryList.Item title="Phone number">
                    <SummaryList.Value>
                        0123 456 7890
                    </SummaryList.Value>
                </SummaryList.Item>
                <SummaryList.Item title="Address">
                    <SummaryList.Value>
                        Victoria Quay<br />
                        Edinburgh<br />
                        EH6 6QQ
                    </SummaryList.Value>
                </SummaryList.Item>
            </SummaryList>
        ],
        title: 'Joe Bloggs'
    }
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
