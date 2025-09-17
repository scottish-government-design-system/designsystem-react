import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Accordion from './Accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        headingLevel: argTypes.headingLevel({
            description: 'Heading level to use for the accordion items\' titles'
        }),
        hideOpenAll: {
            control: 'boolean',
            description: 'Do not show the ‘open all’ button',
            type: 'boolean'
        },
        children: {
            control: false
        }
    },
    args: {
        children: <>
            <Accordion.Item id='accordion-1' title='Healthcare for veterans'>
                <p>
                    Veterans are entitled to the same healthcare as any citizen. And there are health care options and support available specifically for veterans.
                </p>
                <p>
                    If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need.
                </p>
            </Accordion.Item>
            <Accordion.Item id='accordion-2' title='Employability for veterans'>
                <p>
                    If you're looking for a job, there are several organisations that can help you <a href="#accordion-link">find a job or develop new skills</a>.
                </p>
            </Accordion.Item>
            <Accordion.Item id='accordion-3' title='Housing for veterans'>
                <p>
                    If you need <a href="#accordion-link"> help finding a place to live</a> there's support specifically for veterans.
                </p>
            </Accordion.Item>
        </>
    }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const OpenPanelOnLoad: Story = {
    args: {
        children: <>
            <Accordion.Item id='accordion-1' title='Healthcare for veterans'>
                <p>
                    Veterans are entitled to the same healthcare as any citizen. And there are health care options and support available specifically for veterans.
                </p>
                <p>
                    If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need.
                </p>
            </Accordion.Item>
            <Accordion.Item id='accordion-2' title='Employability for veterans' isOpen>
                <p>
                    If you're looking for a job, there are several organisations that can help you <a href="#accordion-link">find a job or develop new skills</a>.
                </p>
            </Accordion.Item>
            <Accordion.Item id='accordion-3' title='Housing for veterans'>
                <p>
                    If you need <a href="#accordion-link"> help finding a place to live</a> there's support specifically for veterans.
                </p>
            </Accordion.Item>
        </>
    }
}

export const AutomaticallyAssignedId: Story = {
    args: {
        children: <>
            <Accordion.Item title='Healthcare for veterans'>
                <p>
                    Veterans are entitled to the same healthcare as any citizen. And there are health care options and support available specifically for veterans.
                </p>
                <p>
                    If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need.
                </p>
            </Accordion.Item>
            <Accordion.Item title='Employability for veterans' isOpen>
                <p>
                    If you're looking for a job, there are several organisations that can help you <a href="#accordion-link">find a job or develop new skills</a>.
                </p>
            </Accordion.Item>
            <Accordion.Item title='Housing for veterans'>
                <p>
                    If you need <a href="#accordion-link"> help finding a place to live</a> there's support specifically for veterans.
                </p>
            </Accordion.Item>
        </>
    }
}

export const HideOpenAll: Story = {
    args: {
        hideOpenAll: true
    },
}

export const InvalidNoChildren: Story = {
    args: {children: undefined}
}
