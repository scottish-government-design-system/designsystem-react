import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import FeatureHeader from './FeatureHeader';
import Button from '../Button';
// @ts-expect-error no types
import photograph from '../../../static/images/highland-cow.jpg';
// @ts-expect-error no types
import illustration from '../../../static/images/illustration.svg';



type foo = typeof FeatureHeader;


const meta = {
    title: 'Components/FeatureHeader',
    component: FeatureHeader,
    argTypes: {
        backgroundColor: argTypes.select({options: ['none', 'secondary', 'tertiary', 'brand']}),
        children: argTypes.children(),
        hasCoverImage: argTypes.boolean(),
        hasNoImagePadding: argTypes.boolean(),
        id: argTypes.id({ type: { name: 'string', required: false } }),
        isFullWidth: argTypes.boolean(),
        isWideText: argTypes.boolean(),
        isTopAlignImage: argTypes.boolean(),
        tagName: argTypes.select({ options: ['div', 'header'] })
    },
    args: {
        backgroundColor: 'secondary'
    }
} satisfies Meta<foo & { image: string }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={illustration}
                />
            </FeatureHeader.Secondary>
        </>
    }
};


export const WithoutContent: Story = {
    name: 'Without content',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={illustration}
                />
            </FeatureHeader.Secondary>
        </>
    }
};

export const WithCallToAction: Story = {
    name: 'Call to action',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
                <Button href="#foo" icon="ChevronRight">Get started</Button>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={illustration}
                />
            </FeatureHeader.Secondary>
        </>
    }
};

export const WithCoverImage: Story = {
    name: 'Cover image',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={illustration}
                />
            </FeatureHeader.Secondary>
        </>,
        hasCoverImage: true
    }
};

export const WithCoverImagePhotograph: Story = {
    name: 'Cover image (photograph)',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={photograph}
                />
            </FeatureHeader.Secondary>
        </>,
        hasCoverImage: true
    }
};

export const FullWidth: Story = {
    name: 'Full width',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={illustration}
                />
            </FeatureHeader.Secondary>
        </>,
        isFullWidth: true
    }
};

export const FullWidthImagePaddingRemoved: Story = {
    name: 'Full width with image padding removed',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={illustration}
                />
            </FeatureHeader.Secondary>
        </>,
        hasNoImagePadding: true,
        isFullWidth: true
    }
};

export const WideText: Story = {
    name: 'Wide text',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={illustration}
                />
            </FeatureHeader.Secondary>
        </>,
        isWideText: true
    }
};

export const TopAlign: Story = {
    name: 'Top aligned image',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={illustration}
                />
            </FeatureHeader.Secondary>
        </>,
        isTopAlignImage: true
    }
};

export const TopAlignPhotograph: Story = {
    name: 'Top aligned image (photograph)',
    args: {
        children: <>
            <FeatureHeader.Primary title="Design and build accessible digital services for Scotland">
                <p>The Scottish Government Design System provides static web assets for websites and web applications for the Scottish Government and other Scottish public sector bodies.</p>
                <p>The Design System is open source and free to use.</p>
            </FeatureHeader.Primary>
            <FeatureHeader.Secondary>
                <img
                    alt=""
                    src={photograph}
                />
            </FeatureHeader.Secondary>
        </>,
        isTopAlignImage: true
    }
};
