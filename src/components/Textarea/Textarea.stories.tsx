import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Textarea from './Textarea';

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    argTypes: {
        countThreshold: argTypes.countThreshold(),
        errorMessage: argTypes.errorMessage(),
        hasError: argTypes.hasError(),
        hintText: argTypes.hintText(),
        id: argTypes.id(),
        label: argTypes.label(),
        maxlength: argTypes.maxlength(),
        name: { type: 'string' },
        onBlur: argTypes.onBlur(),
        onChange: argTypes.onChange(),
        placeholder: {type: 'string'},
        rows: {
            type: 'number'
        },
        value: {type: 'string'}
    },
    args: {
        id: 'description',
        label: 'Description'
    }
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const KitchenSink: Story = {
    args: {
        defaultValue: 'Nothing seems to do anything when I click on it. I am using Megabrowser 3.8 on an OmniComputer 5000 and I\'ve disabled all of my plugins.\n\nThis problem didn\'t start happening until two weeks ago but now I can\'t use this tool at all.',
        countThreshold: 50,
        errorMessage: 'This field is required',
        hasError: true,
        hintText: 'Please describe the problem you are having',
        id: 'kitchensink',
        maxlength: 200,
        rows: 6
    }
};

export const Blur: Story = {
    args: {
        onBlur: () => {console.log('textarea blur')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('textbox'));
        await userEvent.tab();
    }
}

export const Change: Story = {
    args: {
        onChange: () => {console.log('textarea change')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('textbox'));
        await userEvent.type(canvas.getByRole('textbox'),'banana');
        await userEvent.tab();
    }
}
