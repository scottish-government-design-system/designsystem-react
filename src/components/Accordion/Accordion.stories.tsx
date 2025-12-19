import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Accordion from './Accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        headingLevel: argTypes.headingLevel({
            description: 'Heading level to use for the accordion items\' headings'
        }),
        hideOpenAll: {
            control: 'boolean',
            description: 'Do not show the \'open all\' button',
            type: 'boolean'
        },
        children: {
            control: false
        }
    },
    args: {
        children: <>
            <Accordion.Item id='accordion-1' heading='Healthcare for veterans'>
                <p>
                    Veterans are entitled to the same healthcare as any citizen. And there are health care options and support available specifically for veterans.
                </p>
                <p>
                    If you have a health condition that&apos;s related to your service, you&apos;re entitled to priority treatment based on clinical need.
                </p>
            </Accordion.Item>
            <Accordion.Item id='accordion-2' heading='Employability for veterans'>
                <p>
                    If you&apos;re looking for a job, there are several organisations that can help you <a href="#accordion-link">find a job or develop new skills</a>.
                </p>
            </Accordion.Item>
            <Accordion.Item id='accordion-3' heading='Housing for veterans'>
                <p>
                    If you need <a href="#accordion-link"> help finding a place to live</a> there&apos;s support specifically for veterans.
                </p>
            </Accordion.Item>
        </>
    }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const HideOpenAll: Story = {
    args: {
        hideOpenAll: true
    }
}

export const InvalidNoChildren: Story = {
    args: {children: undefined}
}
