import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import CookieBanner from './CookieBanner';
import Button from '../Button';

const meta = {
    title: 'Components/CookieBanner',
    component: CookieBanner,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        children: [
            <p key="1">We use <a href="/cookies/">cookies</a> to collect anonymous data to help us improve your site browsing
                experience.</p>,
            <p key="2">Click &lsquo;Accept all cookies&rsquo; to agree to all cookies that collect anonymous data.
                To only allow the cookies that make the site work, click &lsquo;Use essential cookies only.&rsquo; Visit &lsquo;Set cookie preferences&rsquo; to control specific cookies.</p>,
            <CookieBanner.Buttons key="3">
                <Button className="js-accept-all-cookies" isSmall buttonStyle="secondary">Accept all cookies</Button>
                <Button className="js-accept-essential-cookies" isSmall buttonStyle="secondary">Use essential cookies only</Button>
                <a href="/cookies/">Set cookie preferences</a>
            </CookieBanner.Buttons>
        ]
    }
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
