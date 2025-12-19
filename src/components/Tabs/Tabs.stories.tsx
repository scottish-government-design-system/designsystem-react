import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Tabs from './Tabs';

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {
        baseId: {
            description: 'A string that IDs for subcomponents are derived from.',
            type: {
                name: 'string',
                required: true
            }
        },
        headingLevel: argTypes.headingLevel({
            description: 'Heading level to use for the tab container\'s title',
        }),
        isBorderless: {
            description: 'Whether to give each tab a border',
            control: 'boolean'
        },
        isManual: {
            control: 'boolean',
            description: 'Whether to require manual tab activation',
            type: 'boolean'
        },
        title: {
            description: 'The title of the tab list',
            type: 'string'
        },
        children: argTypes.children()
    },
    args: {
        baseId: 'my-tabs',
        children: [
            <Tabs.Item id="foo" key="foo" tabLabel="Courses and funding">
                <h3>Search for training courses and funding</h3>
                <p>A wide range of training courses for your employees are available.</p>
                <p>Opportunities include distance learning, short courses and vocational training.</p>
                <p><a href="#">Visit My World of Work to search for training courses</a>.</p>
                <p>You can also <a href="#">search for training courses, and funding towards training</a>.</p>
            </Tabs.Item>,
            <Tabs.Item id="bar" key="bar" tabLabel="Choosing apprenticeships">
                <h3>Choosing an apprenticeship for your business</h3>
                <p>Apprenticeships can help you address skills gaps in your business. The government provides help with the cost of training an apprentice.</p>
                <p>There are 3 different types of apprenticeship:</p>
                <ul>
                    <li>Foundation Apprenticeships let school or college students do short-term work experience at your business as part of a qualification</li>
                    <li>Modern Apprenticeships let your new or current employees gain a qualification while working in a paid role at your business</li>
                    <li>Graduate Apprenticeships let your new or current employees gain a degree while working in a paid role at your business</li>
                </ul>
                <p>You can find more information on the <a href="#">apprenticeships.scot</a> website.</p>
            </Tabs.Item>,
            <Tabs.Item id="baz" key="baz" tabLabel="Extra skills support">
                <h3>Extra skills support</h3>
                <p>The <a href="#">Skills for Growth</a> service can offer skills advice to businesses with fewer than 250 employees.</p>
                <p>Businesses of any size can get skills advice by completing a <a href="#">skills support request form</a>.</p>
                <p>Businesses of any size can also get skills advice by calling Skills Development Scotland on 0800 783 6000.</p>
            </Tabs.Item>
        ],
        title: 'My tabs'
    }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const ManualActivation: Story = {
    args: {
        isManual: true
    }
};

export const NoBorder: Story = {
    args: {
        isBorderless: true
    }
};

export const DifferentHeadingLevel: Story = {
    args: {
        headingLevel: 'h4'
    }
};
