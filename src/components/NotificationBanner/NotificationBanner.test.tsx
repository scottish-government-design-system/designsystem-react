/**
 * Most of the functionality for NotificationBanner is covered in AbstractNotificationBanner.
 * Differences are specifically tested here.
 */

import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import NotificationBanner from './NotificationBanner';

const BANNER_TEXT = 'We need to tell you about something';

/**
 * NotificationBanner has the ds_reversed class
 */
test('notification banner renders correctly', () => {
    render(
        <NotificationBanner>
            {BANNER_TEXT}
        </NotificationBanner>
    );

    const bannerContainer = document.querySelector('.ds_notification');

    expect(bannerContainer).toHaveClass('ds_notification', 'ds_reversed');
});

/**
 * NotificationBanner uses a boolean to toggle icon display, as only a single icon (PriorityHigh) is expected.
 */
test('notification banner with icon', () => {
    render(
        <NotificationBanner hasIcon>
            {BANNER_TEXT}
        </NotificationBanner>
    );

    const bannerTitle = screen.getByRole('heading');
    const bannerIconContainer = bannerTitle.nextElementSibling as HTMLElement;
    const bannerIcon = within(bannerIconContainer).getByRole('img', { hidden: true });

    expect(bannerIconContainer).toHaveClass('ds_notification__icon');
    expect(bannerIcon).toHaveClass('ds_icon');
    expect(bannerIcon).toHaveAttribute('aria-hidden');
});
