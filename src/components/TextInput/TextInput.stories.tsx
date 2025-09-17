import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import TextInput from './TextInput';

const meta = {
    title: 'Components/Text input',
    component: TextInput,
    argTypes: {
        buttonIcon: {
            control: { type: 'select' },
            description: 'Name of the icon to use',
            options: ['ArrowUpward', 'CalendarToday', 'Cancel', 'CheckCircle', 'ChevronLeft', 'ChevronRight', 'Close', 'Description', 'DoubleChevronLeft', 'DoubleChevronRight', 'Error', 'ExpandLess', 'ExpandMore', 'List', 'Menu', 'PriorityHigh', 'Search'],
            type: 'string'
        },
        buttonText: {
            desctiption: 'Text content for the button',
            type: 'string'
        },
        countThreshold: argTypes.countThreshold(),
        currencySymbol: {
            description: 'Currency symbol to use (default is \'£\')',
            type: 'string'
        },
        errorMessage: argTypes.errorMessage(),
        hasButton: {
            control: 'boolean',
            description: 'Whether the component has an associated button',
            type: 'boolean'
        },
        isCurrency: {
            control: 'boolean',
            description: 'Whether the component is a currency field',
            type: 'boolean'
        },
        hasError: argTypes.hasError(),
        hintText: argTypes.hintText(),
        id: argTypes.id(),
        label: argTypes.label(),
        maxlength: argTypes.maxlength(),
        name: {type: 'string'},
        onBlur: argTypes.onBlur(),
        onChange: argTypes.onChange(),
        placeholder: {type: 'string'},
        type: {
            control: { type: 'select' },
            options: ['date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'text', 'time', 'url', 'week'],
            type: {
                required: true,
                name: 'string'
            }
        },
        value: {type: 'string'},
        width: argTypes.inputWidth()
    },
    args: {
        id: 'first-name',
        label: 'First name'
    }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const KitchenSink: Story = {
    args: {
        countThreshold: 50,
        errorMessage: 'This field is required',
        hasError: true,
        hintText: 'Please enter your first or given name',
        id: 'kitchensink',
        maxlength: 20,
        value: 'Cholmondley',
        width: 'fixed-20'
    }
};

export const Currency: Story = {
    args: {
        currencySymbol: '$',
        id: 'price',
        isCurrency: true,
        label: 'Price per unit',
        placeholder: '0.00',
        step: '.01',
        type: 'number',
        width: 'fluid-one-quarter'
    }
}

export const WithButton: Story = {
    args: {
        buttonIcon: 'Search',
        buttonText: 'Search',
        hasButton: true,
        id: 'withbutton'
    }
}

export const Blur: Story = {
    args: {
        onBlur: () => {console.log('text input blur')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('textbox'));
        await userEvent.tab();
    }
}

export const Change: Story = {
    args: {
        onChange: () => {console.log('text input change')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('textbox'));
        await userEvent.type(canvas.getByRole('textbox'),'banana');
        await userEvent.tab();
    }
}
