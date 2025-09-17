import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import CheckboxGroup from './CheckboxGroup';
import Checkbox from './Checkbox';

const meta = {
    component: CheckboxGroup,
    title: 'Components/CheckboxGroup',
    argTypes: {
        children: argTypes.children(),
        isSmall: argTypes.isSmall()
    },
    args: {
        children: <>
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
        </>
    }
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

export const SmallCheckboxes: Story = {
    args: {
        isSmall: true
    }
};

export const ExclusiveCheckbox: Story = {
    args: {
        children: <>
            <Checkbox
                checked
                id="universal-creditx"
                label="Universal Credit"
            />
            <Checkbox
                id="pension-creditx"
                label="Pension Credit"
            />
            <Checkbox
                id="jsax"
                label="Income-based Job Seeker's Allowance"
            />
            <Checkbox
                isExclusive
                id="nonex"
                label="No, I do not receive any of these benefits"
            />
        </>
    }
}
