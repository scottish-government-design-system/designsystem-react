import type { Meta, StoryObj } from '@storybook/react-vite';
import Breadcrumbs from './Breadcrumbs';

const meta = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs'],
    argTypes: {
        hideLastItem: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        }
    }
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                href: 'home',
                title: 'Home'
            },
            {
                href: 'category',
                title: 'Category'
            },
            {
                title: 'Page'
            }
        ],
    }
};
