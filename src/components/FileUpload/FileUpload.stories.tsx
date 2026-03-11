import type { Meta, StoryObj } from '@storybook/react-vite';
import FileUpload from './FileUpload';
import argTypes from '../../../.storybook/sgdsArgTypes';

const meta = {
    title: 'Components/FileUpload',
    component: FileUpload,
    args: {
        // capture?: boolean | 'user' | 'environment'
        id: 'file-upload',
        label: 'Upload a file'
    },
    argTypes: {
        accept: {
            control: { type: 'text' },
            description: 'Value of the "accept" attribute on the input element',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        capture: argTypes.select({options: ['', 'user', 'environment']}),
        errorMessage: argTypes.errorMessage(),
        files: argTypes.hidden(),
        hasError: argTypes.boolean(),
        hintText: argTypes.hintText(),
        id: argTypes.id(),
        isMultiple: argTypes.boolean(),
        label: argTypes.label(),
        name: {type: 'string'},
        text: argTypes.hidden()
    }
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const Multiple: Story = {
    args: {
        isMultiple: true
    }
};

export const KitchenSink: Story = {
    args: {
        errorMessage: 'Please select at least one file',
        hasError: true,
        hintText: 'The files must be no larger than 10MB each',
        isMultiple: true,
        label: 'Upload your files'
    }
}

export const DifferentText: Story = {
    args: {
        label: 'Upload a banana 🍌',
        text: {
            buttonText: 'Choose a banana',
            buttonTextPlural: 'Choose some bananas',
            defaultStatusText: 'No banana chosen',
            defaultStatusTextPlural: 'No bananas chosen',
            enteredDropzone: 'Entered banana zone',
            filesAddedText: '$NUMBER bananas',
            filesListHeading: 'Bananas selected for upload',
            instructionText: 'or drag and drop a banana here',
            instructionTextPlural: 'or drag and drop some bananas here',
            leftDropzone: 'Left banana zone'
        }
    }
}
