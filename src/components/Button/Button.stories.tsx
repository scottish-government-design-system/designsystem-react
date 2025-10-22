import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

const meta = {
    title: 'Components/Buttons/Button',
    component: Button,
    parameters: {
        controls: { sort: 'alpha' }
    },
    argTypes: {
        buttonStyle: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
            type: 'string'
        },
        hasLinkStyle: {
            description: 'Make the button look like a link',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
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
        isIconLeft: {
            description: 'Show icon on left of button',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isIconOnly: {
            description: 'Show only the icon',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isSmall: {
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
        isSmall: true
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
                'isIconOnly',
                'hasLinkStyle'
            ]
        }
    }
}

export const IconOnLeft: Story = {
    args: {
        icon: 'Search',
        isIconLeft: true
    },
    parameters: {
        controls: {
            exclude: [
                'isIconOnly',
                'hasLinkStyle'
            ]
        }
    }
}

export const IconOnly: Story = {
    args: {
        icon: 'Search',
        isIconOnly: true
    },
    parameters: {
        controls: {
            exclude: [
                'isIconLeft',
                'hasLinkStyle',
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
                'hasLinkStyle',
                'type'
            ]
        }
    }
}

export const ButtonStyledAsLink: Story = {
    args: {
        hasLinkStyle: true
    },
    parameters: {
        controls: {
            exclude: [
                'buttonStyle',
                'icon',
                'isIconLeft',
                'isIconOnly',
                'isSmall',
                'type',
                'width'
            ]
        }
    }
}
