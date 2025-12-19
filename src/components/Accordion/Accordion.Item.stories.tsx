import type { Meta, StoryObj } from '@storybook/react-vite';

import Accordion from './Accordion';

const meta = {
    title: 'Components/Accordion/Accordion.Item',
    component: Accordion.Item,
    decorators: [(Story) => <div className="ds_accordion"><Story /></div>],
    argTypes: {
        heading: {
            description: 'Heading of the accordion item',
            type: {
                name: 'string',
                required: true
            }
        },
        id: {
            description: 'ID to use for the accordion item if you want to override the automatically generated default',
            type: 'string'
        },
        isOpen: {
            description: 'Makes the accordion item display in an open state on page load',
            control: 'boolean',
        },
        children: {
            control: false
        }
    },
    args: {
        heading: 'Healthcare for veterans',
        children: <>
            <p>
                Veterans are entitled to the same healthcare as any citizen. And there are health care options and support available specifically for veterans.
            </p>
            <p>
                If you have a health condition that&apos;s related to your service, you&apos;re entitled to priority treatment based on clinical need.
            </p>
        </>
    }
} satisfies Meta<typeof Accordion.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const OpenOnLoad: Story = {
    args: {
        isOpen: true
    }
}

export const ManualId: Story = {
    args: {
        id: 'my-accordion-item'
    }
}
