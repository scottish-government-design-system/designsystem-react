import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SkipLinks from './SkipLinks';

const meta = {
    title: 'Components/SkipLinks/SkipLinks.Link',
    component: SkipLinks.Link,
    decorators: [
        Story => (
            <ul className="ds_skip-links">
                <Story />
            </ul>
        )
    ],
    argTypes: {
        fragmentId: {
            description: 'ID of the destination element',
            type: {
                name: 'string',
                required: true
            }
        },
        children: argTypes.children()
    },
    args: {
        children: 'Skip to main content',
        fragmentId: 'my-main-content'
    }
} satisfies Meta<typeof SkipLinks.Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
