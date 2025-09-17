import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import RadioButton from './RadioButton';

const meta = {
    title: 'Components/Radio button',
    component: RadioButton,
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'The radio is checked on load'
        },
        hintText: argTypes.hintText(),
        id: argTypes.id(),
        label: argTypes.label(),
        name: { type: 'string' },
        onBlur: argTypes.onBlur(),
        onChange: argTypes.onChange(),
        isSmall: argTypes.isSmall()
    },
    args: {
        id: 'arrears-radio',
        label: 'Arrears',
        name: 'radio-name',
    }
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const KitchenSink: Story = {
    args: {
        checked: true,
        hintText: 'This means you\'re paid for the period coming up, e.g. the month ahead',
        isSmall: false
    }
};

export const SmallRadio: Story = {
    args: {
        isSmall: true
    }
};

export const Blur: Story = {
    args: {
        onBlur: () => {console.log('radio button blur')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('radio'));
        await userEvent.tab();
    }
}

export const Change: Story = {
    args: {
        onChange: () => {console.log('radio button change')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('radio'));
    }
}
