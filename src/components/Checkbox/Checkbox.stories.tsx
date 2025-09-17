import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Checkbox from './Checkbox';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'The checkbox is checked on load'
        },
        hintText: argTypes.hintText,
        exclusive: {
            control: 'boolean',
            description: 'Whether the checkbox is exclusive (e.g. a \'none\' option)'
        },
        id: argTypes.id(),
        label: argTypes.label(),
        name: {
            type: 'string'
        },
        onBlur: argTypes.onBlur(),
        onChange: argTypes.onChange(),
        small: argTypes.isSmall()
    },
    args: {
        label: 'Benefits and grants',
        id: 'benefits-and-grants'
    }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const CheckedByDefault: Story = {
    args: {
        checked: true,
        id: 'checked'
    }
};

export const SmallCheckbox: Story = {
    args: {
        isSmall: true,
        id: 'small'
    }
};

export const HintText: Story = {
    args: {
        hintText: 'Information on benefits, funds and grants, including Child Benefit and tax credits.',
        id: 'hinttext'
    }
};

export const CustomNameAttribute: Story = {
    args: {
        name: 'myName',
        id: 'nameattribute'
    }
};

export const Blur: Story = {
    args: {
        onBlur: () => {console.log('checkbox blur')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('checkbox'));
        await userEvent.tab();
    }
}

export const Change: Story = {
    args: {
        onChange: () => {console.log('checkbox change')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('checkbox'));
    }
}
