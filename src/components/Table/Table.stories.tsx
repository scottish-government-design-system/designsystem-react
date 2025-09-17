import type { Meta, StoryObj } from '@storybook/react-vite';

import Table from './Table';

const meta = {
    title: 'Components/Table',
    component: Table,
    argTypes: {
        smallscreen: {
            description: 'The behaviour to use on small screens',
            children: { control: false },
            control: { type: 'select' },
            options: [undefined,'boxes', 'scrolling'],
            type: 'string',
        }
    },
    args: {
        children: <>
            <caption>Public holidays in 2020</caption>
            <thead>
                <tr>
                    <th scope="col">
                        Date
                    </th>
                    <th scope="col">
                        Day
                    </th>
                    <th scope="col">
                        Holiday
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        10 April
                    </td>
                    <td>
                        Friday
                    </td>
                    <td>
                        Good Friday
                    </td>
                </tr>
                <tr>
                    <td>
                        8 May
                    </td>
                    <td>
                        Friday
                    </td>
                    <td>
                        Early May Bank Holiday
                    </td>
                </tr>
                <tr>
                    <td>
                        25 May
                    </td>
                    <td>
                        Monday
                    </td>
                    <td>
                        Spring Bank Holiday
                    </td>
                </tr>
                <tr>
                    <td>
                        3 August
                    </td>
                    <td>
                        Monday
                    </td>
                    <td>
                        Summer Bank Holiday
                    </td>
                </tr>
            </tbody>
        </>
    }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const Boxes: Story = {
    args: {smallscreen: 'boxes'}
};

export const Scrolling: Story = {
    args: {smallscreen: 'scrolling'}
};
