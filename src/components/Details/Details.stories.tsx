import type { Meta, StoryObj } from '@storybook/react-vite';
import Details from './Details';

const meta = {
    title: 'Components/Details',
    component: Details,
    tags: ['autodocs'],
    argTypes: {

    },
    args: {
        summary: 'I cannot sign in'
    }
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Details summary="I cannot sign in">
            <p>Contact the design system team if you cannot sign in.</p>

            <p>Email <a href="mailto:designsystem@gov.scot">designsystem@gov.scot</a>.</p>
            <p>Or phone 0000 123 4567<br/>
                Monday to Friday, 9am to 5pm</p>
        </Details>
    )
};
