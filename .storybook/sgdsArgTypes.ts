const SGDSArgTypes = {
    ariaLabel: (options?: any) => {
        return Object.assign({
            type: 'string'
        }, options);
    },
    ariaLive: (options?: any) => {
        return Object.assign({
            options: ['off', 'polite', 'assertive'],
            control: { type: 'select' },
            type: 'string'
        }, options);
    },
    children: (options?: any) => {
        return Object.assign({
            control: false
        }, options);
    },
    countThreshold: (options?: any) => {
        return Object.assign({
            control: {
                type: 'number', min: 1, max: 100, step: 1
            },
            description: 'Percentage threshold to show the character count at',
            type: 'number'
        }, options);
    },
    errorMessage: (options?: any) => {
        return Object.assign({
            description: 'Text to use for an error message',
            type: 'string'
        }, options);
    },
    hasError: (options?: any) => {
        return Object.assign({
            control: 'boolean',
            description: 'Whether the field is in an error state'
        }, options);
    },
    headingLevel: (options?: any) => {
        return Object.assign({
            description: 'Heading level for the component\'s title',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            control: { type: 'select' },
            type: 'string'
        }, options);
    },
    hintText: (options?: any) => {
        return Object.assign({
            description: 'Text to use for the field\'s hint text',
            type: 'string'
        }, options);
    },
    id: (options?: any) => {
        return Object.assign({
            type: {
                required: true,
                name: 'string'
            }
        }, options);
    },
    inputWidth: (options?: any) => {
        return Object.assign({
            control: { type: 'select' },
            options: [undefined, 'fixed-20', 'fixed-10', 'fixed-5', 'fixed-4', 'fixed-3', 'fixed-2', 'fluid-three-quarters', 'fluid-two-thirds', 'fluid-half', 'fluid-one-third', 'fluid-one-quarter'],
            type: 'string'
        }, options);
    },
    isSmall: (options?: any) => {
        return Object.assign({
            control: 'boolean',
            description: 'Whether to use the ‘small’ input control variant'
        }, options);
    },
    label: (options?: any) => {
        return Object.assign({
            description: 'Text to use for the field\'s associated label',
            type: {
                required: true,
                name: 'string'
            }
        }, options);
    },
    linkComponent: (options?: any) => {
        return Object.assign({
            control: false,
            description: 'Function that returns an element, to customise the output',
            type: 'function'
        }, options);
    },
    maxlength: (options?: any) => {
        return Object.assign({
            description: 'Maximum number of characters permitted',
            type: 'number'
        }, options);
    },
    noBorder: (options?: any) => {
        return Object.assign({
            control: 'boolean',
            description: 'Use the borderless display variant'
        }, options);
    },
    onBlur: (options?: any) => {
        return Object.assign({
            description: 'Function to fire in response to a blur event',
            type: 'function'
        }, options);
    },
    onChange: (options?: any) => {
        return Object.assign({
            description: 'Function to fire in response to a change event',
            type: 'function'
        }, options);
    },
    onClick: (options?: any) => {
        return Object.assign({
            description: 'Function to fire in response to a click event',
            type: 'function'
        }, options);
    },
}

export default SGDSArgTypes;
