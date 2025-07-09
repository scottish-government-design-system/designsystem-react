import type { Meta, StoryObj } from '@storybook/react-vite';
import ErrorMessage from './ErrorMessage';

const meta = {
    title: 'Components/Error message',
    component: ErrorMessage,
    tags: ['autodocs'],
    argTypes: {

    }
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <ErrorMessage text="This field is required" />
    )
};

export const HTMLContent: Story = {
    render: (args) => (
        <ErrorMessage text={<>hello <a href="#foo">world</a></>} />
    )
};

export const ContentAsChildren: Story = {
    render: (args) => (
        <ErrorMessage>hello <a href="#foo">world</a></ErrorMessage>
    )
};
