import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Select from './Select';

const meta = {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        defaultValue: {type: 'string'},
        errorMessage: argTypes.errorMessage(),
        hasError: argTypes.hasError(),
        hintText: argTypes.hintText(),
        id: argTypes.id(),
        label: argTypes.label(),
        name: { type: 'string' },
        onBlur: argTypes.onBlur(),
        onChange: argTypes.onChange(),
        placeholder: {type: 'string'},
        width: argTypes.inputWidth(),
        children: argTypes.children()
    },
    args: {
        id: 'component',
        label: 'Choose a component',
        children: <>
            <option value="accordion">
                Accordion
            </option>
            <option value="breadcrumbs">
                Breadcrumbs
            </option>
            <option value="button">
                Button
            </option>
        </>
    }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const KitchenSink: Story = {
    args: {
        defaultValue: 'button',
        errorMessage: 'This field is required',
        hasError: true,
        hintText: 'Choose a component to learn more about how it works',
        id: 'kitchensink',
        placeholder: 'Choose',
        width: 'fluid-one-third'
    }
};

export const Blur: Story = {
    args: {
        onBlur: () => {console.log('select blur')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('combobox'));
        await userEvent.tab();
    }
}

export const Change: Story = {
    args: {
        onChange: () => {console.log('select change')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('combobox'));
        await userEvent.selectOptions(canvas.getByRole('combobox'), ['button'])
    }
}
