import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SequentialNavigation from './SequentialNavigation';

const meta = {
    title: 'Components/Sequential navigation',
    component: SequentialNavigation,
    argTypes: {
        ariaLabel: argTypes.ariaLabel({ description: 'Text to use for an aria-label attribute on the nav element' }),
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        children: <>
            <SequentialNavigation.Previous href="#previous">
                Apply for or renew a Blue Badge
            </SequentialNavigation.Previous>
            <SequentialNavigation.Next href="#next">
                Eligibility: who can have one?
            </SequentialNavigation.Next>
        </>
    }
} satisfies Meta<typeof SequentialNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
