import type { Meta, StoryObj } from '@storybook/react-vite';
import ConfirmationMessage from './ConfirmationMessage';

const meta = {
    title: 'Components/Confirmation Message',
    component: ConfirmationMessage,
    tags: ['autodocs'],
    argTypes: {
        headerLevel: {
            options: ['h2', 'h3', 'h4'],
            control: { type: 'select' },
            type: 'string'
        },
        ariaLive: {
            options: ['alert', 'polite'],
            control: { type: 'select' },
            type: 'string'
        }
    },
    args: {

    }
} satisfies Meta<typeof ConfirmationMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ariaLive: 'polite',
        children: (<p>You have added the landlord <strong>John Smith</strong> to the application.</p>),
        headerLevel: 'h3',
        title: 'Landlord added successfully',
    }
};

export const NoChildren: Story = {
    args: {
        ariaLive: 'polite',
        headerLevel: 'h3',
        title: 'Landlord added successfully',
    }
};

export const DifferentHeadingLevel: Story = {
    args: {
        ariaLive: 'polite',
        children: (<p>You have added the landlord <strong>John Smith</strong> to the application.</p>),
        headerLevel: 'h2',
        title: 'Landlord added successfully',
    }
};
