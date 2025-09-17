import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Question from './Question';
import TextInput from '../TextInput/TextInput';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxGroup from '../Checkbox/CheckboxGroup';

const meta = {
    title: 'Components/Question',
    component: Question,
    argTypes: {
        errorMessage: argTypes.errorMessage(),
        hasError: argTypes.hasError(),
        hintText: argTypes.hintText(),
        legend: {
            desctiption: 'Text for a question\'s legend element (if the question uses a fieldset)',
            type: 'string'
        },
        tagName: {
            control: { type: 'select' },
            description: 'HTML tag name to use for the question',
            options: ['div', 'fieldset'],
            type: 'string'
        },
        children: argTypes.children()
    },
    args: {
        children: <TextInput
            id="text-input-question"
            label="First name"
        />,
        tagName: 'div'
    }
} satisfies Meta<typeof Question>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const ErrorQuestion: Story = {
    args: {
        errorMessage: 'This is a required field',
        hasError: true
    }
}

export const FieldsetQuestion: Story = {
    args: {
        children: <CheckboxGroup>
            <Checkbox
            checked
            id="universal-credit"
            label="Universal Credit"
            />
            <Checkbox
            id="pension-credit"
            label="Pension Credit"
            />
            <Checkbox
            id="jsa"
            label="Income-based Job Seeker's Allowance"
            />
            <Checkbox
            isExclusive
            id="none"
            label="No, I do not receive any of these benefits"
            />
        </CheckboxGroup>,
        errorMessage: 'You must select at least one option',
        hasError: true,
        hintText: 'Select all that apply.',
        legend: 'Do you receive any of these benefits',
        tagName: 'fieldset'
    }
}
