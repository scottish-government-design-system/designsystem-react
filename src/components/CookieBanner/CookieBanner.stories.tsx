import type { Meta, StoryObj } from '@storybook/react-vite';
import CookieBanner from './CookieBanner';
import Button from '../Button/Button';

const meta = {
    title: 'Components/Cookie banner',
    component: CookieBanner,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <CookieBanner title="foo">
            <p>We use <a href="/cookies/">cookies</a> to collect anonymous data to help us improve your site browsing
                experience.</p>
            <p>Click 'Accept all cookies' to agree to all cookies that collect anonymous data.
                To only allow the cookies that make the site work, click 'Use essential cookies only.' Visit 'Set cookie preferences' to control specific cookies.</p>
            <CookieBanner.Buttons>
                <Button className="js-accept-all-cookies" small buttonStyle="secondary">Accept all cookies</Button>
                <Button className="js-accept-essential-cookies" small buttonStyle="secondary">Use essential cookies only</Button>
                <a href="/cookies/">Set cookie preferences</a>
            </CookieBanner.Buttons>
        </CookieBanner>
    )
};
