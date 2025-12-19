import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Filters from './SearchFilters';
import DatePicker from '../DatePicker';
import Checkbox from '../Checkbox';


const meta = {
    title: 'Components/Search results/Filters',
    component: Filters,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        title: 'Content type'
    }
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

const CONTENT_TYPES = [
    {
        label: 'Advice and guidance',
        value: 'advice-and-guidance'
    },
    {
        label: 'Agreement',
        value: 'agreement'
    },
    {
        label: 'Consultation analysis',
        value: 'consultation-analysis'
    },
    {
        label: 'Consultation paper',
        value: 'consultation-paper'
    },
    {
        label: 'Corporate report',
        value: 'corporate-report'
    },
    {
        label: 'Correspondence',
        value: 'correspondence'
    },
    {
        label: 'FOI/EIR release',
        value: 'foi-eir-release'
    },
    {
        label: 'Factsheet',
        value: 'factsheet'
    },
    {
        label: 'Form',
        value: 'form'
    },
    {
        label: 'Impact assessment',
        value: 'impact-assessment'
    },
    {
        label: 'Independent report',
        value: 'independent-report'
    },
    {
        label: 'Map',
        value: 'map'
    },
    {
        label: 'Minutes',
        value: 'minutes'
    },
    {
        label: 'Progress report',
        value: 'progress-report'
    },
    {
        label: 'Regulation/directive/order',
        value: 'regulation-directive-order'
    },
    {
        label: 'Research and analysis',
        value: 'research-and-analysis'
    },
    {
        label: 'Speech/statement',
        value: 'speech-statement'
    },
    {
        label: 'Statistics',
        value: 'statistics'
    },
    {
        label: 'Strategy/plan',
        value: 'strategy-plan'
    },
    {
        label: 'Transparency data',
        value: 'transparency-data'
    }
];

export const Default: Story = {
    render: ({ ...args }) => (
        <Filters {...args}>
            <Filters.Panel legend="Select which publication types you would like to see" heading="Content type">
                <Filters.CheckboxGroup>
                    {CONTENT_TYPES.map((type) => (
                        <Checkbox
                            key={type.value}
                            label={type.label}
                            value={type.value}
                            id={type.value}
                        />
                    ))}
                </Filters.CheckboxGroup>
            </Filters.Panel>

            <Filters.Panel heading="Filter by date" legend="Filter by date">
                <DatePicker
                    hintText="For example, 21/01/2022"
                    id="date-from"
                    label="Updated after"
                />

                <DatePicker
                    hintText="For example, 21/01/2022"
                    id="date-to"
                    label="Updated before"
                />
            </Filters.Panel>
        </Filters>
    )
};
