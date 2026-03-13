import { test, expect, describe } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import FeatureHeader from './FeatureHeader';

const TITLE_TEXT = 'Design and build accessible digital services for Scotland';

describe('feature header', () => {
    test('feature header renders correctly', () => {
        render(
            <FeatureHeader data-testid="feature-header">
                <FeatureHeader.Primary
                    data-testid="feature-header-primary"
                    title={TITLE_TEXT}
                >
                </FeatureHeader.Primary>
                <FeatureHeader.Secondary data-testid="feature-header-secondary">
                    <img src="foo" data-testid="feature-header-image" />
                </FeatureHeader.Secondary>
            </FeatureHeader>
        );

        const featureHeaderElement = screen.getByTestId('feature-header');
        const featureHeaderPrimaryElement = screen.getByTestId('feature-header-primary');
        const featureHeaderSecondaryElement = screen.getByTestId('feature-header-secondary');
        const featureHeaderTitleElement = within(featureHeaderPrimaryElement).getByRole('heading');
        const featureHeaderImageElement = screen.getByTestId('feature-header-image');

        expect(featureHeaderElement).toHaveClass('ds_feature-header');
        expect(featureHeaderElement.tagName).toEqual('DIV');

        expect(featureHeaderPrimaryElement).toHaveClass('ds_feature-header__primary');
        expect(featureHeaderPrimaryElement.tagName).toEqual('DIV');
        expect(featureHeaderPrimaryElement.parentElement).toEqual(featureHeaderElement);

        expect(featureHeaderSecondaryElement).toHaveClass('ds_feature-header__secondary');
        expect(featureHeaderSecondaryElement.tagName).toEqual('DIV');
        expect(featureHeaderSecondaryElement.parentElement).toEqual(featureHeaderElement);
        expect(featureHeaderSecondaryElement.previousElementSibling).toEqual(featureHeaderPrimaryElement);

        expect(featureHeaderTitleElement).toHaveClass('ds_feature-header__title');
        expect(featureHeaderTitleElement.tagName).toEqual('H1');
        expect(featureHeaderTitleElement.textContent).toEqual(TITLE_TEXT);

        expect(featureHeaderImageElement).toHaveClass('ds_feature-header__image');
    });

    test('image CSS class added to svg element correctly', () => {
        render(
            <FeatureHeader data-testid="feature-header">
                <FeatureHeader.Primary
                    data-testid="feature-header-primary"
                    title={TITLE_TEXT}
                >
                </FeatureHeader.Primary>
                <FeatureHeader.Secondary data-testid="feature-header-secondary">
                    <svg version="1.1"
                        data-testid="feature-header-image"
                        width="300"
                        height="200"
                        xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </FeatureHeader.Secondary>
            </FeatureHeader>
        );

        const featureHeaderImageElement = screen.getByTestId('feature-header-image');

        expect(featureHeaderImageElement).toHaveClass('ds_feature-header__image');
    });

    test('image CSS class added to picture element correctly', () => {
        render(
            <FeatureHeader data-testid="feature-header">
                <FeatureHeader.Primary
                    data-testid="feature-header-primary"
                    title={TITLE_TEXT}
                >
                </FeatureHeader.Primary>
                <FeatureHeader.Secondary data-testid="feature-header-secondary">
                    <picture data-testid="feature-header-image">
                    </picture>
                </FeatureHeader.Secondary>
            </FeatureHeader>
        );

        const featureHeaderImageElement = screen.getByTestId('feature-header-image');

        expect(featureHeaderImageElement).toHaveClass('ds_feature-header__image');
    });

    test('image CSS class NOT added to other elements in Secondary', () => {
        render(
            <FeatureHeader data-testid="feature-header">
                <FeatureHeader.Primary
                    data-testid="feature-header-primary"
                    title={TITLE_TEXT}
                >
                </FeatureHeader.Primary>
                <FeatureHeader.Secondary data-testid="feature-header-secondary">
                    <p data-testid="feature-header-non-image">
                    </p>
                </FeatureHeader.Secondary>
            </FeatureHeader>
        );

        const featureHeaderNonImageElement = screen.getByTestId('feature-header-non-image');

        expect(featureHeaderNonImageElement).not.toHaveClass('ds_feature-header__image');
    });

    test('ds_wrapper class included when full width', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                isFullWidth
            >
                <FeatureHeader.Primary
                    data-testid="feature-header-primary"
                    title={TITLE_TEXT}
                >
                </FeatureHeader.Primary>
                <FeatureHeader.Secondary data-testid="feature-header-secondary">
                    <img src="foo" data-testid="feature-header-image" />
                </FeatureHeader.Secondary>
            </FeatureHeader>
        );

        const featureHeaderElement = screen.getByTestId('feature-header');
        const featureHeaderPrimaryElement = screen.getByTestId('feature-header-primary');
        const featureHeaderSecondaryElement = screen.getByTestId('feature-header-secondary');

        const featureHeaderWrapperElement = featureHeaderElement.querySelector('.ds_wrapper');

        expect(featureHeaderWrapperElement).toBeInTheDocument();
        expect(featureHeaderWrapperElement?.parentElement).toEqual(featureHeaderElement);
        expect(featureHeaderPrimaryElement.parentElement).toEqual(featureHeaderWrapperElement);
        expect(featureHeaderSecondaryElement.parentElement).toEqual(featureHeaderWrapperElement);
    });

    test('feature header has correct CSS class for secondary background', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                backgroundColor="secondary"
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');

        expect(featureHeaderElement).toHaveClass('ds_feature-header--background-secondary');
    });

    test('feature header has correct CSS class for tertiary background', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                backgroundColor="tertiary"
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');

        expect(featureHeaderElement).toHaveClass('ds_feature-header--background-tertiary');
    });

    test('feature header has correct CSS class for brand background', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                backgroundColor="brand"
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');

        expect(featureHeaderElement).toHaveClass('ds_feature-header--background');
    });

    test('feature header does nothing with unrecognised background colours', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                // @ts-expect-error deliberately invalid value
                backgroundColor="foo"
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');
        const cleanedClass = featureHeaderElement.getAttribute('class')?.trim().replace(/\s+/g, ' ');

        expect(cleanedClass).toEqual('ds_feature-header');
    });

    test('feature header as HEADER element', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                tagName="header"
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');

        expect(featureHeaderElement.tagName).toEqual('HEADER');
    });

    test('feature header with wide text', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                isWideText
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');

        expect(featureHeaderElement).toHaveClass('ds_feature-header--wide');
    });

    test('feature header with top aligned image', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                isTopAlignImage
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');

        expect(featureHeaderElement).toHaveClass('ds_feature-header--top');
    });

    test('feature header with cover image', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                hasCoverImage
            >
                <FeatureHeader.Primary
                    data-testid="feature-header-primary"
                    title={TITLE_TEXT}
                >
                </FeatureHeader.Primary>
                <FeatureHeader.Secondary data-testid="feature-header-secondary">
                    <img src="foo" data-testid="feature-header-image" />
                </FeatureHeader.Secondary>
            </FeatureHeader>
        );

        const featureHeaderSecondaryElement = screen.getByTestId('feature-header-secondary');

        expect(featureHeaderSecondaryElement).toHaveClass('ds_feature-header__secondary--cover');
    });

    test('feature header with no image padding', () => {
        render(
            <FeatureHeader
                data-testid="feature-header"
                hasNoImagePadding
            >
                <FeatureHeader.Primary
                    data-testid="feature-header-primary"
                    title={TITLE_TEXT}
                >
                </FeatureHeader.Primary>
                <FeatureHeader.Secondary data-testid="feature-header-secondary">
                    <img src="foo" data-testid="feature-header-image" />
                </FeatureHeader.Secondary>
            </FeatureHeader>
        );

        const featureHeaderSecondaryElement = screen.getByTestId('feature-header-secondary');

        expect(featureHeaderSecondaryElement).toHaveClass('ds_feature-header__secondary--no-padding');
    });

    test('passing additional props', () => {
        render(
            <FeatureHeader data-testid="feature-header"
                data-test="foo"
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');
        expect(featureHeaderElement?.dataset.test).toEqual('foo');
    });

    test('passing additional CSS classes', () => {
        render(
            <FeatureHeader data-testid="feature-header"
                className="foo"
            />
        );

        const featureHeaderElement = screen.getByTestId('feature-header');
        expect(featureHeaderElement).toHaveClass('foo');
    });
});
