import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import DatePicker from './DatePicker';

const meta = {
    title: 'Components/Date picker',
    component: DatePicker,
    argTypes: {
        dateSelectCallback: {},
        disabledDates: {
            control: { type: 'text' },
            description: 'Space-separated list of dates to disable in the date picker'
        },
        hasError: argTypes.hasError(),
        errorMessage: argTypes.errorMessage(),
        hintText: argTypes.hintText(),
        id: argTypes.id(),
        label: argTypes.label(),
        maxDate: {
            control: { type: 'text' },
            description: 'Latest selectable date in the date picker'
        },
        minDate: {
            control: { type: 'text' },
            description: 'Earliest selectable date in the date picker'
        },
        multiple: {
            control: 'boolean',
            description: 'Whether to display the day, month and year as separate fields'
        },
        name: {
            control: { type: 'text' }
        },
        onBlur: argTypes.onBlur(),
        onChange: argTypes.onChange(),
        value: {
            control: { type: 'text' }
        },
        width: argTypes.inputWidth()
    },
    args: {
        label: 'Date of birth',
        id: 'date-of-birth'
    }
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const InitialValue: Story = {
    args: {
        value: '01/12/2020'
    }
};

export const HintText: Story = {
    args: {
        hintText: 'Use \'dd/mm/yyyy\' format.'
    }
};

export const Error: Story = {
    args: {
        hasError: true,
        errorMessage: 'Please enter a valid date.'
    }
};

export const Multiple: Story = {
    args: {
        multiple: true
    }
};

export const MultipleInitialValue: Story = {
    args: {
        multiple: true,
        value: '01/12/2020'
    }
};

export const DateRestrictions: Story = {
    args: {
        disabledDates: '12/07/2025 13/07/2025 19/07/2025 20/07/2025',
        maxDate: '25/07/2025',
        minDate: '07/07/2025'
    }
};

export const Blur: Story = {
    args: {
        onBlur: () => {console.log('date picker blur')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('textbox'));
        await userEvent.tab();
    }
}

export const Change: Story = {
    args: {
        onChange: () => {console.log('date picker change')}
    },
    play: async ({ canvas, userEvent }) => {
        await userEvent.click(canvas.getByRole('textbox'));
        await userEvent.type(canvas.getByRole('textbox'),'01/12/2020');
        await userEvent.tab();
    }
}
