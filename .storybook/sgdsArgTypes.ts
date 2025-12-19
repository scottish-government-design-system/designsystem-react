import { InputType } from "storybook/internal/csf";

type OptionsControlType = 'radio' | 'inline-radio' | 'check' | 'inline-check' | 'select' | 'multi-select';

type Conditional = (
    { arg: string; }
    | { global: string; }) & ({ truthy?: boolean | undefined; }
    | { exists: boolean; }
    | { eq: () => void; }
    | { neq: () => void; }
);

type ControlType =
    | 'array'
    | 'boolean'
    | 'color'
    | 'date'
    | 'number'
    | 'range'
    | 'object'
    | OptionsControlType
    | 'text';

interface ArgType {
    control?: ControlType | { type: ControlType };
    defaultValue?: string | number | boolean | object | null;
    description?: string;
    if?: Conditional;
    mapping?: { [key: string]: { [option: string]: string | object } };
    name?: string;
    options?: string[];
    table?: {
        category?: string;
        defaultValue?: { summary: string; detail?: string };
        subcategory?: string;
        type?: { summary?: string; detail?: string };
        disable?: boolean;
    };
    type?: string | { name: string; required?: boolean };
}

const SGDSArgTypes = {
    ariaLabel: (options?: ArgType) => {
        return Object.assign({
            type: 'string'
        }, options) as InputType;
    },
    ariaLive: (options?: ArgType) => {
        return Object.assign({
            options: ['off', 'polite', 'assertive'],
            control: { type: 'select' },
            type: 'string'
        }, options) as InputType;
    },
    children: (options?: ArgType) => {
        return Object.assign({
            control: false
        }, options) as InputType;
    },
    countThreshold: (options?: ArgType) => {
        return Object.assign({
            control: {
                type: 'number', min: 1, max: 100, step: 1
            },
            description: 'Percentage threshold to show the character count at',
            type: 'number'
        }, options) as InputType;
    },
    errorMessage: (options?: ArgType) => {
        return Object.assign({
            description: 'Text to use for an error message',
            type: 'string'
        }, options) as InputType;
    },
    hasError: (options?: ArgType) => {
        return Object.assign({
            control: 'boolean',
            description: 'Whether the field is in an error state'
        }, options) as InputType;
    },
    headingLevel: (options?: ArgType) => {
        return Object.assign({
            description: 'Heading level for the component\'s title',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            control: { type: 'select' },
            type: 'string'
        }, options) as InputType;
    },
    hintText: (options?: ArgType) => {
        return Object.assign({
            description: 'Text to use for the field\'s hint text',
            type: 'string'
        }, options) as InputType;
    },
    href: (options?: ArgType) => {
        return Object.assign({
            type: 'string'
        }, options) as InputType
    },
    id: (options?: ArgType) => {
        return Object.assign({
            type: {
                required: true,
                name: 'string'
            }
        }, options) as InputType
    },
    inputWidth: (options?: ArgType) => {
        return Object.assign({
            control: { type: 'select' },
            options: [undefined, 'fixed-20', 'fixed-10', 'fixed-5', 'fixed-4', 'fixed-3', 'fixed-2', 'fluid-three-quarters', 'fluid-two-thirds', 'fluid-half', 'fluid-one-third', 'fluid-one-quarter'],
            type: 'string'
        }, options) as InputType
    },
    isCurrent: (options?: ArgType) => {
        return Object.assign({
            control: 'boolean',
            description: 'Whether the component is for the current page'
        }, options) as InputType
    },
    isSmall: (options?: ArgType) => {
        return Object.assign({
            control: 'boolean',
            description: 'Whether to use the \'small\' input control variant'
        }, options) as InputType
    },
    label: (options?: ArgType) => {
        return Object.assign({
            description: 'Text to use for the field\'s associated label',
            type: {
                required: true,
                name: 'string'
            }
        }, options) as InputType;
    },
    linkComponent: (options?: ArgType) => {
        return Object.assign({
            control: false,
            description: 'Function that returns an element, to customise the output',
            type: 'function'
        }, options) as InputType;
    },
    maxlength: (options?: ArgType) => {
        return Object.assign({
            description: 'Maximum number of characters permitted',
            type: 'number'
        }, options) as InputType;
    },
    noBorder: (options?: ArgType) => {
        return Object.assign({
            control: 'boolean',
            description: 'Use the borderless display variant'
        }, options) as InputType;
    },
    onBlur: (options?: ArgType) => {
        return Object.assign({
            description: 'Function to fire in response to a blur event',
            type: 'function'
        }, options) as InputType;
    },
    onChange: (options?: ArgType) => {
        return Object.assign({
            description: 'Function to fire in response to a change event',
            type: 'function'
        }, options) as InputType;
    },
    onClick: (options?: ArgType) => {
        return Object.assign({
            description: 'Function to fire in response to a click event',
            type: 'function'
        }, options) as InputType;
    },
    tagColour: (options?: ArgType) => {
        return Object.assign({
            control: { type: 'select' },
            description: 'The tag colour to use',
            options: ['', 'blue', 'green', 'grey', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'],
            type: 'string'
        }, options) as InputType;
    }
}

export default SGDSArgTypes;
