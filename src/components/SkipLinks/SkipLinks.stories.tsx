import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SkipLinks from './SkipLinks';

const meta = {
    title: 'Components/SkipLinks',
    component: SkipLinks,
    argTypes: {
        mainContentId: {
            description: 'The id attribute of the \'main content\' element to link to',
            type: 'string'
        },
        mainLinkText: {
            description: 'The text to use for the \'main content\' link',
            type: 'string'
        },
        isStatic: {
            control: 'boolean',
            description: 'Use the \'static\' display variant'
        },
        children: argTypes.children()
    },
    args: {

    }
} satisfies Meta<typeof SkipLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const MultipleLinks: Story = {
    args: {
        children: <>
            <SkipLinks.Link fragmentId="my-main-content">
                Skip to main content
            </SkipLinks.Link>
            <SkipLinks.Link fragmentId="other-important-content">
                Other important content
            </SkipLinks.Link>
        </>
    }
};

export const Static: Story = {
    args: {
        isStatic: true,
        children:
            <SkipLinks.Link fragmentId="search-results">
                Skip to search results
            </SkipLinks.Link>
    }
};
