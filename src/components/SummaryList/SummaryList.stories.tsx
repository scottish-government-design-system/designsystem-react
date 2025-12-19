import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SummaryList from './SummaryList';

const meta = {
    title: 'Components/SummaryList',
    component: SummaryList,
    argTypes: {
        isBorderless: argTypes.noBorder(),
        children: argTypes.children()
    },
    args: {
        children: <>
            <SummaryList.Item title="Name">
                <SummaryList.Value>
                    Jane Smith
                </SummaryList.Value>
                <SummaryList.Action href="#foo">
                    Change
                </SummaryList.Action>
                <SummaryList.Action onclick={function w(){}}>
                    Delete
                </SummaryList.Action>
            </SummaryList.Item>
            <SummaryList.Item title="Date of birth">
                <SummaryList.Value>
                    13 April 2001
                </SummaryList.Value>
                <SummaryList.Action href="#bar">
                    Change
                </SummaryList.Action>
            </SummaryList.Item>
            <SummaryList.Item title="Address">
                <SummaryList.Value>
                    Scottish Government<br />
                    St Andrew&apos;s House<br />
                    Regent Road<br />
                    Edinburgh<br />
                    EH1 3DG
                </SummaryList.Value>
                <SummaryList.Action href="#baz">
                    Change
                </SummaryList.Action>
            </SummaryList.Item>
            <SummaryList.Item title="Contact details">
                <SummaryList.Value name="Email">
                    email@gov.scot
                </SummaryList.Value>
                <SummaryList.Value name="Telephone">
                    0123 456 7890
                </SummaryList.Value>
                <SummaryList.Action href="foo">
                    Change
                </SummaryList.Action>
                <SummaryList.Action onclick={function w(){}}>
                    Delete
                </SummaryList.Action>
            </SummaryList.Item>
        </>
    }
} satisfies Meta<typeof SummaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const NoBorder: Story = {
    args: {
        isBorderless: true
    }
};
