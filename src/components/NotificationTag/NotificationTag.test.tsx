import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotificationTag from './NotificationTag';

const NOTIFICATION_TAG_LABEL = '11';
const NOTIFICATION_TAG_DESCRIPTION = 'new messages';
const NOTIFICATION_TAG_ICON = 'SVG icon';

test('notification tag renders correctly', () => {
    render(
        <NotificationTag label={NOTIFICATION_TAG_LABEL} description={NOTIFICATION_TAG_DESCRIPTION} data-testid="notification-tag">{NOTIFICATION_TAG_ICON}</NotificationTag>
    );

    const notificationTag = screen.getByTestId('notification-tag');
    const notificationTagWrapper = notificationTag.parentElement;
    const notificationTagDescription = notificationTag.lastChild;

    expect(notificationTag).toHaveClass('ds_notification-tag');
    expect(notificationTag.nodeName).toEqual('SPAN');
    expect(notificationTag).not.toHaveAttribute('aria-hidden');
    expect(notificationTagWrapper).toHaveClass('ds_notification-tag__wrapper');
    expect(notificationTagWrapper?.nodeName).toEqual('SPAN');
    expect(notificationTagDescription).toHaveClass('visually-hidden');
    expect(notificationTagDescription?.nodeName).toEqual('SPAN');
});

test('notification tag with dot', () => {
    render(
        <NotificationTag data-testid="notification-tag">
            {NOTIFICATION_TAG_ICON}
        </NotificationTag>
    );

    const notificationTag = screen.getByTestId('notification-tag');

    expect(notificationTag).toHaveClass('ds_notification-tag--dot');
});

test('aria-hidden on notification tag', () => {
    render(
        <NotificationTag isHidden data-testid="notification-tag">
            {NOTIFICATION_TAG_ICON}
        </NotificationTag>
    );

    const notificationTag = screen.getByTestId('notification-tag');
    expect(notificationTag.getAttribute('aria-hidden')).toEqual('true');
});

test('passing additional props', () => {
    render(
        <NotificationTag data-test="foo" data-testid="notification-tag">
            {NOTIFICATION_TAG_ICON}
        </NotificationTag>
    );

    const notificationTag = screen.getByTestId('notification-tag');
    expect(notificationTag?.dataset.test).toEqual('foo');
});

test('passing additional CSS class', () => {
    render(
        <NotificationTag className="foo" data-testid="notification-tag">
            {NOTIFICATION_TAG_ICON}
        </NotificationTag>
    );

    const notificationTag = screen.getByTestId('notification-tag');
    expect(notificationTag).toHaveClass('foo', 'ds_notification-tag');
});
