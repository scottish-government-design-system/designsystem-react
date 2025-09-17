import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import CookieBanner from './CookieBanner';
import Button from '../Button/Button';

const meta = {
    title: 'Components/Cookie banner',
    component: CookieBanner,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        children: [
            <p key="foo">We use <a href="/cookies/">cookies</a> to collect anonymous data to help us improve your site browsing
                experience.</p>,
            <p key="bar">Click 'Accept all cookies' to agree to all cookies that collect anonymous data.
                To only allow the cookies that make the site work, click 'Use essential cookies only.' Visit 'Set cookie preferences' to control specific cookies.</p>,
            <CookieBanner.Buttons key="baz">
                <Button className="js-accept-all-cookies" small buttonStyle="secondary">Accept all cookies</Button>
                <Button className="js-accept-essential-cookies" small buttonStyle="secondary">Use essential cookies only</Button>
                <a href="/cookies/">Set cookie preferences</a>
            </CookieBanner.Buttons>
        ]
    }
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
