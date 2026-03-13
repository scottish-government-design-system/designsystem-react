import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import Card from './Card';
import ButtonGroup from '../Button/ButtonGroup';
import Button from '../Button';
import Metadata from '../PageMetadata';
import NotificationTag from '../NotificationTag';
// @ts-expect-error no types
import coo from '../../../static/images/highland-cow.jpg';

const meta = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        children: argTypes.children(),
        tagName: {
            description: 'HTML tag name to use for the card',
            type: 'string'
        },
        hasSecondaryBackground: {
            description: 'Sets the card to have a secondary background colour',
            control: 'boolean',
        },
        href: {
            description: 'Href attribute for navigation card',
            type: 'string'
        },
        isAdaptive: {
            description: 'Makes the card display a horizontal layout when the card itself is wider than mobile size',
            control: 'boolean',
        },
        isHorizontal: {
            description: 'Makes the card display a horizontal layout at all times',
            control: 'boolean',
        },
        isHorizontalSmall: {
            description: 'Makes the card display a horizontal layout when the viewport is at mobile size',
            control: 'boolean',
        },
    },
    args: {
        headingLevel: 'h2',
        tagName: 'div'
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    )
};

export const SecondaryBackground: Story = {
    args: {
        hasSecondaryBackground: true
    },
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    )
};

export const NavigationCard: Story = {
    args: {
        href: '#foo'
    },
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    )
};

export const WithSummary: Story = {
    args: {
        href: '#foo'
    },
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const DifferentHeadingLevel: Story = {
    args: {
        headingLevel: 'h4'
    },
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    )
};

export const DifferentContainerElement: Story = {
    args: {
        tagName: 'li'
    },
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    )
};

export const WithImage: Story = {
    args: {
        href: '#foo'
    },
    render: (args) => (
        <Card {...args}>
            <Card.Media>
                <img src={coo} alt=""/>
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const WithMetaData: Story = {
    args: {
        href: '#foo'
    },
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
                <Card.ContentFooter>
                    <Card.Metadata>
                        <Metadata.Item name="Publication type">
                            Statistics
                        </Metadata.Item>
                        <Metadata.Item name="Date">
                            18 June 2024
                        </Metadata.Item>
                    </Card.Metadata>
                </Card.ContentFooter>
            </Card.Content>
        </Card>
    )
};

export const WithButtons: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                    <ButtonGroup isWrap>
                        <Button buttonStyle="secondary" isSmall>Button one</Button>
                        <Button buttonStyle="secondary" isSmall>Button two</Button>
                        <Button buttonStyle="secondary" isSmall>Button three</Button>
                    </ButtonGroup>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const WithStatus: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader
                    title="About the Design System"
                    description="New release"
                    >
                    <Card.StatusTag colour="orange" isHidden>New release</Card.StatusTag>
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const WithIcon: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                    <svg className="ds_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 40" width="30" height="40" fill="none">
                        <path d="m2.77792 35c-.75 0-1.40056-.2754-1.95167-.8262-.550833-.5512-.82625-1.2017-.82625-1.9517v-24.44418c0-.75.275417-1.40056.82625-1.95167.55111-.55083 1.20167-.82625 1.95167-.82625h24.44418c.75 0 1.4005.27542 1.9517.82625.5508.55111.8262 1.20167.8262 1.95167v24.44418c0 .75-.2754 1.4005-.8262 1.9517-.5512.5508-1.2017.8262-1.9517.8262zm5.19416-6.6387h8.75002c.3936 0 .7235-.1337.9896-.4009.2664-.2672.3995-.5982.3995-.9929 0-.395-.1331-.7244-.3995-.9883-.2661-.2639-.596-.3959-.9896-.3959h-8.75002c-.39333 0-.72319.1336-.98958.4009-.26611.2669-.39917.5979-.39917.9929s.13306.7244.39917.9883c.26639.2639.59625.3959.98958.3959zm0-6.9726h14.05582c.3933 0 .7232-.1334.9896-.4004.2661-.2672.3992-.5983.3992-.9933 0-.3947-.1331-.724-.3992-.9879-.2664-.2639-.5963-.3959-.9896-.3959h-14.05582c-.39333 0-.72319.1335-.98958.4005-.26611.2672-.39917.5983-.39917.9933 0 .3947.13306.724.39917.9879.26639.2639.59625.3958.98958.3958zm0-6.972h14.05582c.3933 0 .7232-.1336.9896-.4009.2661-.2669.3992-.5979.3992-.9929s-.1331-.7244-.3992-.9883c-.2664-.2639-.5963-.3958-.9896-.3958h-14.05582c-.39333 0-.72319.1336-.98958.4008-.26611.2672-.39917.5982-.39917.9929 0 .395.13306.7244.39917.9883.26639.2639.59625.3959.98958.3959z" />
                    </svg>
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const WithIconAndNotificationTag: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader
                    title="About the Design System"
                    description="Unread notifications"
                    >
                    <NotificationTag
                        label="99+"
                        description="Unread notifications"
                        isHidden
                        >
                        <svg className="ds_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 40" width="30" height="40" fill="none">
                            <path d="m2.77792 35c-.75 0-1.40056-.2754-1.95167-.8262-.550833-.5512-.82625-1.2017-.82625-1.9517v-24.44418c0-.75.275417-1.40056.82625-1.95167.55111-.55083 1.20167-.82625 1.95167-.82625h24.44418c.75 0 1.4005.27542 1.9517.82625.5508.55111.8262 1.20167.8262 1.95167v24.44418c0 .75-.2754 1.4005-.8262 1.9517-.5512.5508-1.2017.8262-1.9517.8262zm5.19416-6.6387h8.75002c.3936 0 .7235-.1337.9896-.4009.2664-.2672.3995-.5982.3995-.9929 0-.395-.1331-.7244-.3995-.9883-.2661-.2639-.596-.3959-.9896-.3959h-8.75002c-.39333 0-.72319.1336-.98958.4009-.26611.2669-.39917.5979-.39917.9929s.13306.7244.39917.9883c.26639.2639.59625.3959.98958.3959zm0-6.9726h14.05582c.3933 0 .7232-.1334.9896-.4004.2661-.2672.3992-.5983.3992-.9933 0-.3947-.1331-.724-.3992-.9879-.2664-.2639-.5963-.3959-.9896-.3959h-14.05582c-.39333 0-.72319.1335-.98958.4005-.26611.2672-.39917.5983-.39917.9933 0 .3947.13306.724.39917.9879.26639.2639.59625.3958.98958.3958zm0-6.972h14.05582c.3933 0 .7232-.1336.9896-.4009.2661-.2669.3992-.5979.3992-.9929s-.1331-.7244-.3992-.9883c-.2664-.2639-.5963-.3958-.9896-.3958h-14.05582c-.39333 0-.72319.1336-.98958.4008-.26611.2672-.39917.5982-.39917.9929 0 .395.13306.7244.39917.9883.26639.2639.59625.3959.98958.3959z" />
                        </svg>
                    </NotificationTag>
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const WithIconAndNotificationDot: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <Card.ContentHeader
                    description="Unread notifications"
                    title="About the Design System"
                    >
                    <NotificationTag
                        isHidden
                        >
                        <svg className="ds_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 40" width="30" height="40" fill="none">
                            <path d="m2.77792 35c-.75 0-1.40056-.2754-1.95167-.8262-.550833-.5512-.82625-1.2017-.82625-1.9517v-24.44418c0-.75.275417-1.40056.82625-1.95167.55111-.55083 1.20167-.82625 1.95167-.82625h24.44418c.75 0 1.4005.27542 1.9517.82625.5508.55111.8262 1.20167.8262 1.95167v24.44418c0 .75-.2754 1.4005-.8262 1.9517-.5512.5508-1.2017.8262-1.9517.8262zm5.19416-6.6387h8.75002c.3936 0 .7235-.1337.9896-.4009.2664-.2672.3995-.5982.3995-.9929 0-.395-.1331-.7244-.3995-.9883-.2661-.2639-.596-.3959-.9896-.3959h-8.75002c-.39333 0-.72319.1336-.98958.4009-.26611.2669-.39917.5979-.39917.9929s.13306.7244.39917.9883c.26639.2639.59625.3959.98958.3959zm0-6.9726h14.05582c.3933 0 .7232-.1334.9896-.4004.2661-.2672.3992-.5983.3992-.9933 0-.3947-.1331-.724-.3992-.9879-.2664-.2639-.5963-.3959-.9896-.3959h-14.05582c-.39333 0-.72319.1335-.98958.4005-.26611.2672-.39917.5983-.39917.9933 0 .3947.13306.724.39917.9879.26639.2639.59625.3958.98958.3958zm0-6.972h14.05582c.3933 0 .7232-.1336.9896-.4009.2661-.2669.3992-.5979.3992-.9929s-.1331-.7244-.3992-.9883c-.2664-.2639-.5963-.3958-.9896-.3958h-14.05582c-.39333 0-.72319.1336-.98958.4008-.26611.2672-.39917.5982-.39917.9929 0 .395.13306.7244.39917.9883.26639.2639.59625.3959.98958.3959z" />
                        </svg>
                    </NotificationTag>
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const AdaptiveLayout: Story = {
    args: {
        href: '#foo',
        isAdaptive: true
    },
    render: (args) => (
        <Card {...args}>
            <Card.Media isCover ratio="4:3">
                <img src={coo} alt=""/>
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const HorizontalAlways: Story = {
    args: {
        href: '#foo',
        isHorizontal: true
    },
    render: (args) => (
        <Card {...args}>
            <Card.Media isCover ratio="4:3">
                <img src={coo} alt=""/>
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const HorizontalSmall: Story = {
    args: {
        href: '#foo',
        isHorizontalSmall: true
    },
    render: (args) => (
        <Card {...args}>
            <Card.Media isCover ratio="4:3">
                <img src={coo} alt=""/>
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const AspectBox: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Media ratio="square">
                <img src={coo} alt=""/>
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const NarrowImage: Story = {
    args: {
        href: '#foo',
        isAdaptive: true
    },
    render: (args) => (
        <Card {...args}>
            <Card.Media isCover ratio="4:3" mediaWidth="narrow">
                <img src={coo} alt=""/>
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const WideImage: Story = {
    args: {
        href: '#foo',
        isAdaptive: true
    },
    render: (args) => (
        <Card {...args}>
            <Card.Media isCover ratio="21:9" mediaWidth="wide">
                <img src={coo} alt=""/>
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader title="About the Design System">
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
            </Card.Content>
        </Card>
    )
};

export const AllOptions: Story = {
    args: {
        href: '#foo'
    },
    render: (args) => (
        <Card {...args}>
            <Card.Media>
                <img src={coo} alt=""/>
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader
                    title="About the Design System"
                    description="Unread notifications, New release">
                    <NotificationTag
                        isHidden
                        >
                        <svg className="ds_icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 40" width="30" height="40" fill="none">
                            <path d="m2.77792 35c-.75 0-1.40056-.2754-1.95167-.8262-.550833-.5512-.82625-1.2017-.82625-1.9517v-24.44418c0-.75.275417-1.40056.82625-1.95167.55111-.55083 1.20167-.82625 1.95167-.82625h24.44418c.75 0 1.4005.27542 1.9517.82625.5508.55111.8262 1.20167.8262 1.95167v24.44418c0 .75-.2754 1.4005-.8262 1.9517-.5512.5508-1.2017.8262-1.9517.8262zm5.19416-6.6387h8.75002c.3936 0 .7235-.1337.9896-.4009.2664-.2672.3995-.5982.3995-.9929 0-.395-.1331-.7244-.3995-.9883-.2661-.2639-.596-.3959-.9896-.3959h-8.75002c-.39333 0-.72319.1336-.98958.4009-.26611.2669-.39917.5979-.39917.9929s.13306.7244.39917.9883c.26639.2639.59625.3959.98958.3959zm0-6.9726h14.05582c.3933 0 .7232-.1334.9896-.4004.2661-.2672.3992-.5983.3992-.9933 0-.3947-.1331-.724-.3992-.9879-.2664-.2639-.5963-.3959-.9896-.3959h-14.05582c-.39333 0-.72319.1335-.98958.4005-.26611.2672-.39917.5983-.39917.9933 0 .3947.13306.724.39917.9879.26639.2639.59625.3958.98958.3958zm0-6.972h14.05582c.3933 0 .7232-.1336.9896-.4009.2661-.2669.3992-.5979.3992-.9929s-.1331-.7244-.3992-.9883c-.2664-.2639-.5963-.3958-.9896-.3958h-14.05582c-.39333 0-.72319.1336-.98958.4008-.26611.2672-.39917.5982-.39917.9929 0 .395.13306.7244.39917.9883.26639.2639.59625.3959.98958.3959z" />
                        </svg>
                    </NotificationTag>
                    <Card.StatusTag colour="orange" isHidden>New release</Card.StatusTag>
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                </Card.ContentMain>
                <Card.ContentFooter>
                    <Card.Metadata>
                        <Metadata.Item name="Publication type">
                            Statistics
                        </Metadata.Item>
                        <Metadata.Item name="Date">
                            18 June 2024
                        </Metadata.Item>
                    </Card.Metadata>
                </Card.ContentFooter>
            </Card.Content>
        </Card>
    )
};
