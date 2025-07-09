import type { Meta, StoryObj } from '@storybook/react-vite';
import DatePicker from './DatePicker';

const meta = {
    title: 'Components/Date picker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {
        dateSelectCallback: {},
        disabledDates: {control: { type: 'text' }},
        error: {
            control: 'boolean'
        },
        errorMessage: {control: { type: 'text' }},
        hintText: {control: { type: 'text' }},
        id: {control: { type: 'text' }},
        iconPath: {control: { type: 'text' }},
        label: {
            control: { type: 'text' }
        },
        maxDate: {
            control: { type: 'text' }
        },
        minDate: {
            control: { type: 'text' }
        },
        multiple: {
            control: 'boolean'
        },
        name: {
            control: { type: 'text' }
        },
        onBlur: {},
        onChange: {},
        value: {
            control: { type: 'text' }
        },
        width: {
            control: { type: 'text' }
        }
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

export const HintText: Story = {
    args: {
        hintText: 'Use \'dd/mm/yyyy\' format.'
    }
};

export const Error: Story = {
    args: {
        error: true,
        errorMessage: 'Please enter a valid date.'
    }
};

export const Multiple: Story = {
    args: {
        multiple: true
    }
};

export const DateRestrictions: Story = {
    args: {
        disabledDates: '12/07/2025 13/07/2025 19/07/2025 20/07/2025',
        maxDate: '25/07/2025',
        minDate: '07/07/2025'
    }
};
