import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import AbstractNotificationBanner from './AbstractNotificationBanner';
import Button from '../components/Button/Button';

const NOTIFICATION_TEXT = 'We need to tell you about something';

test('abstract notification banner renders correctly', () => {
    render(
        <AbstractNotificationBanner>
            {NOTIFICATION_TEXT}
        </AbstractNotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerText = bannerTitle.nextElementSibling;
    const bannerContent = bannerTitle.parentElement;
    const bannerWrapper = bannerContent?.parentElement;
    const bannerContainer = bannerWrapper?.parentElement;


    expect(bannerTitle.textContent).toEqual('Information');
    expect(bannerTitle.tagName).toEqual('H2');
    expect(bannerTitle).toHaveClass('visually-hidden');

    expect(bannerText).toHaveClass('ds_notification__text');
    expect(bannerText?.textContent).toEqual(NOTIFICATION_TEXT);

    expect(bannerContent).toHaveClass('ds_notification__content');
    expect(bannerWrapper).toHaveClass('ds_wrapper');
    expect(bannerContainer).toHaveClass('ds_notification');
});

test('abstract notification banner with close button', () => {
    render(
        <AbstractNotificationBanner isDismissable>
            {NOTIFICATION_TEXT}
        </AbstractNotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerContent = bannerTitle.parentElement;
    const closeButton = screen.getByRole('button');
    const closeButtonLabel = within(closeButton).getByText('Close this notification');
    const closeButtonIcon = within(closeButton).getByRole('img', { hidden: true });

    expect(bannerContent).toHaveClass('ds_notification__content--has-close');
    expect(closeButton).toHaveClass('ds_notification__close', 'js-close-notification');
    expect(closeButton).toHaveAttribute('type', 'button');

    expect(closeButtonLabel).toBeInTheDocument();
    expect(closeButtonLabel).toHaveClass('visually-hidden');

    expect(closeButtonIcon).toHaveClass('ds_icon', 'ds_icon--fill');
});

test('abstract notification banner with icon', () => {
    render(
        <AbstractNotificationBanner icon="Search">
            {NOTIFICATION_TEXT}
        </AbstractNotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerIconContainer = bannerTitle.nextElementSibling as HTMLElement;
    const bannerIcon = within(bannerIconContainer).getByRole('img', { hidden: true });

    expect(bannerIconContainer).toHaveClass('ds_notification__icon');
    expect(bannerIcon).toHaveClass('ds_icon');
    expect(bannerIcon).toHaveAttribute('aria-hidden');
});

test('abstract notification banner with icon modifier classes', () => {
    render(
        <AbstractNotificationBanner icon="Search" hasColourIcon hasInverseIcon>
            {NOTIFICATION_TEXT}
        </AbstractNotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerIconContainer = bannerTitle.nextElementSibling;

    expect(bannerIconContainer).toHaveClass('ds_notification__icon', 'ds_notification__icon--inverse', 'ds_notification__icon--colour');
});

test('abstract notification banner with buttons', () => {
    render(
        <AbstractNotificationBanner>
            {NOTIFICATION_TEXT}
            <AbstractNotificationBanner.Buttons>
                <Button data-testid="button">Foo</Button>
            </AbstractNotificationBanner.Buttons>
        </AbstractNotificationBanner>
    );

    const bannerContainer = document.querySelector('.ds_notification');
    const button = screen.getByTestId('button');
    const buttonContainer = button.parentElement;
    const textContainer = bannerContainer?.querySelector('.ds_notification__text');

    expect(buttonContainer).toHaveClass('ds_button-group');
    expect(buttonContainer?.tagName).toEqual('DIV');
    expect(buttonContainer?.previousElementSibling).toEqual(textContainer);
});

test('passing additional props', () => {
    render(
        <AbstractNotificationBanner data-test="foo">
            {NOTIFICATION_TEXT}
        </AbstractNotificationBanner>
    )

    const bannerContainer = document.querySelector('.ds_notification') as HTMLElement;
    expect(bannerContainer?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <AbstractNotificationBanner className="foo">
            {NOTIFICATION_TEXT}
        </AbstractNotificationBanner>
    )

    const bannerContainer = document.querySelector('.ds_notification');
    expect(bannerContainer).toHaveClass('foo', 'ds_notification');
});
