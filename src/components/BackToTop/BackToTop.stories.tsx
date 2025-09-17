import type { Meta, StoryObj } from '@storybook/react-vite';

import BackToTop from './BackToTop';

const meta = {
    title: 'Components/Back to top',
    component: BackToTop,
    argTypes: {
        href: {
            control: { type: 'text' },
            description: 'URL fragment to scroll to',
            table: {
                type: {
                    summary: 'string'
                }
            }
        }
    },
    decorators: [
        (Story) => (
            <div>
                <p>Scroll down to see 👇</p>
                <Story />
            </div>
        ),
    ]
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: undefined,
    }
};
