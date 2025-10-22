import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SiteFooter from './SiteFooter';

const meta = {
    title: 'Components/SiteFooter/SiteFooter.Link',
    component: SiteFooter.Link,
    decorators: [
        Story => (
            <div className="ds_site-footer__site-items" style={{ borderBottom: 0 }}>
                <ul>
                    <Story />
                </ul>
            </div>
        )
    ],
    argTypes: {
        href: argTypes.href(),
        linkComponent: argTypes.linkComponent(),
        children: argTypes.children()
    },
    args: {
        children: 'Cookies',
        href: '#cookies'
    }
} satisfies Meta<typeof SiteFooter.Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
