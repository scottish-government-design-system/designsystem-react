import type { Meta, StoryObj } from '@storybook/react-vite';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

const meta = {
    title: 'Components/Buttons/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        controls: { sort: 'alpha' }
    },
    argTypes: {
        isInline: {
            description: 'Force inline buttons on small screens',
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        }
    },
    args: {
        children: <>
            <Button buttonStyle="secondary">Button one</Button>
            <Button buttonStyle="secondary">Button two</Button>
            <Button buttonStyle="secondary">Button three</Button>
        </>
    }
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const Inline: Story = {
    args: {
        isInline: true
    }
};
