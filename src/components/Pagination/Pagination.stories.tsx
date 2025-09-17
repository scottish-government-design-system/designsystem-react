import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Pagination from './Pagination';

const meta = {
    title: 'Components/Pagination',
    component: Pagination,
    argTypes: {
        ariaLabel: argTypes.ariaLabel(),
        onClick: argTypes.onClick(),
        linkComponent: argTypes.linkComponent({
            description: 'Function that returns an element, to customise the output. Used on all links in the pagination.'
        }),
        padding: {
            description: 'Number of other pages to show on either side of the current page',
            type: 'number'
        },
        page: {
            description: 'Current page number',
            type: {
                name: 'number',
                required: true
            }
        },
        pattern: {
            description: 'Pattern to use for the pagination links',
            type: 'string'
        },
        totalPages: {
            description: 'Total number of pages',
            type: {
                name: 'number',
                required: true
            }
        }
    },
    args: {
        ariaLabel: 'Pages',
        page: 1,
        padding: 1,
        pattern: '/search?page=$1',
        totalPages: 21
    }
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const MiddlePage: Story = {
    args: {page: 10}
}

export const MorePadding: Story = {
    args: {page: 10, padding: 3}
}

export const Click: Story = {
    args: {
        onClick: (event) => { event.preventDefault(); console.log('pagination click'); }
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getAllByRole('link')[0]);
    }
}
