import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import RadioButton from '../RadioButton/RadioButton';
import RadioGroup from './RadioGroup';

const meta = {
    title: 'Components/Radio group',
    component: RadioGroup,
    argTypes: {
        isInline: {
            control: 'boolean',
            description: 'Whether to display the radio buttons in the group inline'
        },
        name: {type: 'string'},
        isSmall: argTypes.isSmall(),
        children: argTypes.children()
    },
    args: {
        children: <>
            <RadioButton
                id="flat-radio"
                label="Flat"
            />
            <RadioButton
                id="bungalow-radio"
                label="Bungalow"
            />
            <RadioButton
                id="cottage-radio"
                label="Cottage"
            />
            <RadioButton
                id="terraced-radio"
                label="Terraced house"
            />
            <RadioButton
                id="semi-radio"
                label="Semi-detached house"
            />
            <RadioButton
                id="detached-radio"
                label="Detached house"
            />
        </>,
        name: 'propertyType'
    }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const SmallRadios: Story = {
    args: {
        isSmall: true
    }
};

export const InlineRadios: Story = {
    args: {
        children: <>
            <RadioButton
                id="yes-radio"
                label="Yes"
            />
            <RadioButton
                id="no-radio"
                label="No"
            />
        </>,
        isInline: true
    }
};
