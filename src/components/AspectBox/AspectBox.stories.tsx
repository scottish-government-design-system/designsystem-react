import type { Meta, StoryObj } from '@storybook/react-vite';
// @ts-ignore
import coo from '../../../static/images/highland-cow.jpg';
import AspectBox from './AspectBox';

const meta = {
    title: 'Components/Aspect Box',
    component: AspectBox,
    tags: ['autodocs'],
    argTypes: {
        ratio: {
            options: ['1:1', '4:3', '16:9', '21:9'],
            control: { type: 'radio' },
            type: 'string'
        }
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '32em' }}>
                <Story />
            </div>
        ),
    ]
} satisfies Meta<typeof AspectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ratio: undefined
    },
    render: (args) => (
        <AspectBox {...args}>
            <img
                alt="A highland cow nuzzling its calf"
                src={coo}
            />
        </AspectBox>
    )
};
