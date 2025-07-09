import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: { controls: { sort: 'alpha' } },
    tags: ['autodocs'],
    argTypes: {
        buttonStyle: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
            type: 'string'
        },
        href: {
            control: { type: 'text' },
            description: 'Href attribute, changes element to <code>&lt;a&gt;</code> if set',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        icon: {
            description: 'Name of the icon component to use',
            options: ['ArrowUpward', 'CalendarToday', 'Cancel', 'CheckCircle', 'ChevronLeft', 'ChevronRight', 'Close', 'Description', 'DoubleChevronLeft', 'DoubleChevronRight' ,'Error', 'ExpandLess', 'ExpandMore', 'List', 'PriorityHigh', 'Search'],
            control: { type: 'select' },
            type: 'string'
        },
        iconLeft: {
            description: 'Show icon on left of button',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        iconOnly: {
            description: 'Show only the icon',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
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
        },
        styleAsLink: {
            description: 'Make the button look like a link',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        type: {
            options: ['submit', 'reset', 'button'],
            control: { type: 'radio' },
            type: 'string'
        },
        width: {
            options: ['fluid', 'fixed', 'max'],
            control: { type: 'radio' },
            type: 'string'
        }
    },
    args: {
        children: 'Button text'
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Secondary: Story = {
    args: {
        buttonStyle: 'secondary'
    }
};

export const SmallButton: Story = {
    args: {
        small: true
    }
}

export const FluidWidth: Story = {
    args: {
        width: 'fluid'
    }
}

export const FixedWidth: Story = {
    args: {
        width: 'fixed'
    }
}

export const MaxWidth: Story = {
    args: {
        width: 'max'
    }
}

export const WithIcon: Story = {
    args: {
        icon: 'Search'
    },
    parameters: {
        controls: {
            exclude: [
                'iconOnly',
                'styleAsLink'
            ]
        }
    }
}

export const IconOnLeft: Story = {
    args: {
        icon: 'Search',
        iconLeft: true
    },
    parameters: {
        controls: {
            exclude: [
                'iconOnly',
                'styleAsLink'
            ]
        }
    }
}

export const IconOnly: Story = {
    args: {
        icon: 'Search',
        iconOnly: true
    },
    parameters: {
        controls: {
            exclude: [
                'iconLeft',
                'styleAsLink',
                'width'
            ]
        }
    }
}

export const LinkStyledAsButton: Story = {
    args: {
        href: '#'
    },
    parameters: {
        controls: {
            exclude: [
                'styleAsLink',
                'type'
            ]
        }
    }
}

export const ButtonStyledAsLink: Story = {
    args: {
        styleAsLink: true
    },
    parameters: {
        controls: {
            exclude: [
                'buttonStyle',
                'icon',
                'iconLeft',
                'iconOnly',
                'small',
                'type',
                'width'
            ]
        }
    }
}
