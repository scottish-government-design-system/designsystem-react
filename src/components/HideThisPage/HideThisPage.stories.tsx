import type { Meta, StoryObj } from '@storybook/react-vite';
import HideThisPage from './HideThisPage';

const meta = {
    title: 'Components/Hide this page',
    component: HideThisPage,
    argTypes: {
        escapeUrl: {
            description: 'The URL to take the user to',
            type: 'string'
        }
    }
} satisfies Meta<typeof HideThisPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
