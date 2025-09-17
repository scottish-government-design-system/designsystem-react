import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

// @ts-ignore
import coo from '../../../static/images/highland-cow.jpg';
import AspectBox from './AspectBox';

const meta = {
    title: 'Components/Aspect Box',
    component: AspectBox,
    argTypes: {
        ratio: {
            control: { type: 'radio' },
            description: 'Aspect ratio to use',
            options: ['1:1', '4:3', '16:9', '21:9'],
            type: 'string'
        },
        children: argTypes.children()
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '32em' }}>
                <Story />
            </div>
        ),
    ],
    args: {children: <img
        alt="A highland cow nuzzling its calf"
        src={coo}
    />}
} satisfies Meta<typeof AspectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ratio: undefined
    }
};

export const Square: Story = {
    args: {
        ratio: '1:1'
    }
};

export const Aspect4To3: Story = {
    args: {
        ratio: '4:3'
    }
};

export const Aspect16To9: Story = {
    args: {
        ratio: '16:9'
    }
};

export const Aspect21To9: Story = {
    args: {
        ratio: '21:9'
    }
};
