import type { Meta, StoryObj } from '@storybook/react-vite';
import CheckboxGroup from './Checkbox';

function getItems(idModifier: string) {
    return [
        {
            checked: true,
            id: `universal-credit-${idModifier}`,
            label: 'Universal Credit'
        },
        {
            id: `pensioncredit-${idModifier}`,
            label: 'Pension Credit'
        },
        {
            id: `jsa-${idModifier}`,
            label: 'Income-based Job Seeker\'s Allowance'
        }
    ]
}

const meta = {
    component: CheckboxGroup,
    title: 'Components/CheckboxGroup',
    tags: ['autodocs']
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {items: getItems('default')}
};

export const SmallCheckboxes: Story = {
    args: {
        items: getItems('small'),
        small: true
    }
};

export const ExclusiveCheckbox: Story = {
    args: {
        items: getItems('exclusive').concat([
            {
                exclusive: true,
                id: 'none-excl',
                label: 'No, I do not receive any of these benefits'
            }
        ])
    }
}
