import type { Meta, StoryObj } from '@storybook/react-vite';
import {Checkbox} from './Checkbox';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        hintText: {
            control: { type: 'text' },
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        exclusive: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        id: {
            control: { type: 'text' },
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        label: {
            control: { type: 'text' },
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        name: {
            control: { type: 'text' },
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        onBlur: {
            table: {
                type: {
                    summary: 'function'
                }
            }
        },
        onChange: {
            table: {
                type: {
                    summary: 'function'
                }
            }
        },
        small: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        }
    },
    args: {
        label: 'Benefits and grants',
        id: 'benefits-and-grants'
    }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const CheckedByDefault: Story = {
    args: {
        checked: true,
        id: 'checked'
    }
};

export const SmallCheckbox: Story = {
    args: {
        small: true,
        id: 'small'
    }
};

export const HintText: Story = {
    args: {
        hintText: 'Information on benefits, funds and grants, including Child Benefit and tax credits.',
        id: 'hinttext'
    }
};

export const BlurEvent: Story = {
    args: {
        onBlur: function () { alert('on blur!') },
        id: 'onblur'
    }
};

export const ChangeEvent: Story = {
    args: {
        onChange: function () { alert('on change!') },
        id: 'onchange'
    }
};

export const CustomNameAttribute: Story = {
    args: {
        name: 'myName',
        id: 'nameattribute'
    }
};
