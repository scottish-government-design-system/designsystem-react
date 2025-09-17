import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SiteFooter from './SiteFooter';

const meta = {
    title: 'Components/Site footer',
    component: SiteFooter,
    argTypes: {
        children: argTypes.children()
    },
    args: {
        children: <>
            <SiteFooter.Links>
                <SiteFooter.Link href="#">
                Privacy
                </SiteFooter.Link>
                <SiteFooter.Link href="#">
                Cookies
                </SiteFooter.Link>
                <SiteFooter.Link href="#">
                Accessibility
                </SiteFooter.Link>
            </SiteFooter.Links>
            <SiteFooter.License>
                <svg focusable="false" version="1.1" width="41" height="17" id="ogl-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 852.16 345.09">
                    <title>ogl</title>
                    <polygon className="fill" points="743.3 251.79 743.3 0.2 653.9 57.2 653.9 341.2 852.16 341.2 852.16 251.79 743.3 251.79"></polygon>
                    <path className="fill" d="M599.62,312.56a83.12,83.12,0,1,1,15.26-107.08l75.36-48a172.35,172.35,0,0,0-295.59,7.84A172.61,172.61,0,0,0,244.49,77.59C149.35,77.59,72,155,72,250.14s77.4,172.54,172.54,172.54A172.6,172.6,0,0,0,394.65,335a172.29,172.29,0,0,0,263.9,44.78l34.25,39.07h5.33V264H557ZM244.49,333.28a83.14,83.14,0,1,1,83.14-83.14A83.24,83.24,0,0,1,244.49,333.28Z" transform="translate(-71.95 -77.59)"/>
                </svg>
                <p>
                All content is available under the{' '}
                <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
                    Open Government Licence v3.0
                </a>
                , except for graphic assets and where otherwise stated
                </p>
                <p>
                © Crown Copyright
                </p>
            </SiteFooter.License>
            <SiteFooter.Org
                href="https://www.gov.scot/"
                title="The Scottish Government"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="55" viewBox="0 0 157.4 29.9">
                    <defs>
                        <path id="a" d="M0 0h157.4v29.9H0z"/>
                    </defs>
                    <path fill="#333e48" d="M154.6 20.3a4 4 0 0 0 2.8-.9l-.7-2.3c-.2.3-.7.5-1.3.5-.8 0-1.3-.7-1.3-1.6V9h2.8V6.4h-2.8V2.7h-3v3.7h-2.3V9h2.3v7.9c0 2.2 1.2 3.4 3.5 3.4m-13.9-2.6c-2.5 0-3.9-2.1-3.9-4.5s1.4-4.5 3.9-4.5 3.9 2.1 3.9 4.5-1.4 4.5-3.9 4.5m0 2.6c4.3 0 7-3.3 7-7.2 0-3.9-2.6-7.1-7-7.1-4.3 0-7 3.2-7 7.1 0 4 2.6 7.2 7 7.2m-13.6 0c2.7 0 4.3-1.2 5.2-2.4l-1.9-1.8a3.6 3.6 0 0 1-3.1 1.6c-2.5 0-4.1-1.9-4.1-4.5s1.7-4.5 4.1-4.5c1.3 0 2.4.5 3.1 1.6l1.9-1.8a6 6 0 0 0-5.2-2.4c-4.1 0-7 3-7 7.1s2.9 7.1 7 7.1m-14.6 0c3.7 0 5.7-1.8 5.7-4.3 0-5.4-8.2-3.6-8.2-6 0-1 1-1.7 2.5-1.7 1.7 0 3.2.7 4 1.6l1.2-2.1a7.7 7.7 0 0 0-5.3-1.9c-3.4 0-5.4 1.9-5.4 4.1 0 5.2 8.2 3.3 8.2 6 0 1.1-.9 1.8-2.7 1.8-1.7 0-3.6-.9-4.6-1.9l-1.4 2.1a8.2 8.2 0 0 0 6 2.3m-10.3 0a2 2 0 0 0 2-2c0-1-.9-1.9-2-1.9s-2 .9-2 1.9c0 1.1.9 2 2 2m-7.5-.3 5.5-13.6H97l-4 10.2-4-10.2h-3L91.5 20h3.2zm-16.3-2.3c-2.5 0-3.9-2.1-3.9-4.5s1.4-4.5 3.9-4.5 3.9 2.1 3.9 4.5-1.4 4.5-3.9 4.5m0 2.6c4.3 0 7-3.3 7-7.2 0-3.9-2.6-7.1-7-7.1s-7 3.2-7 7.1c0 4 2.7 7.2 7 7.2m-16.3-2.9c-2.4 0-3.9-1.7-3.9-4.3 0-2.6 1.5-4.4 3.9-4.4 1.4 0 2.8.8 3.5 1.8v5.1c-.7 1-2.2 1.8-3.5 1.8m-.6 8.1c3.3 0 7-1.3 7-6.2V6.4h-3v1.9a5.2 5.2 0 0 0-4.4-2.2c-3.5 0-6 2.6-6 7 0 4.5 2.6 7 6 7 1.8 0 3.3-.9 4.4-2.3v1.5c0 2.9-2.1 3.8-4 3.8-1.8 0-3.2-.5-4.3-1.7l-1.4 2.1c1.7 1.5 3.4 2 5.7 2"/>
                    <path fill="#fff" d="M1.1 0h48.5v29.9H1.1z"/>
                    <path fill="#0065bd" d="m7.9 1.4 17.3 10.2L42.6 1.4zm0 27.1 17.3-10.1 17.4 10.1zm-5.4-24v20.9L19.7 15zm45.7 0v20.9L30.9 15z"/>
                </svg>
            </SiteFooter.Org>
        </>
    }
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
