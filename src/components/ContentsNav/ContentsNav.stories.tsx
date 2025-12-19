import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import ContentsNav from './ContentsNav';

const meta = {
    title: 'Components/ContentsNav',
    component: ContentsNav,
    argTypes: {
        ariaLabel: argTypes.ariaLabel({description: 'Text to use for the content nav\'s aria-label property'}),
        children: argTypes.children(),
        title: {
            description: 'Title of the contents nav',
            type: 'string'
        }
    },
    args: {
        children: <>
            <ContentsNav.Item isCurrent>
                Apply for Blue Badge
            </ContentsNav.Item>
            <ContentsNav.Item href="#2">
                Eligibility
            </ContentsNav.Item>
            <ContentsNav.Item href="#3">
                Using your Blue Badge
            </ContentsNav.Item>
            <ContentsNav.Item href="#4">
                Report a lost, stolen or misuesd Blue Badge
            </ContentsNav.Item>
            <ContentsNav.Item href="#5">
                Changing or handing back a Blue Badge
            </ContentsNav.Item>
        </>
    }
} satisfies Meta<typeof ContentsNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ariaLabel: 'Contents navigation',
        title: 'Contents'
    }
};
