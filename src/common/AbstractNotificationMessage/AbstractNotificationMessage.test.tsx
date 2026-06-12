import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import AbstractNotificationMessage from './AbstractNotificationMessage';

const NOTIFICATION_TEXT = 'Further details of the notification message';
const TITLE_TEXT = 'Important information';

test('abstract notification message renders correctly', () => {
    render(
        <AbstractNotificationMessage title={TITLE_TEXT}>
            {NOTIFICATION_TEXT}
        </AbstractNotificationMessage>
    );

    const container = document.querySelector('.ds_notification-message');
    const heading = screen.getByRole('heading');
    const content = heading.nextElementSibling;
   
    expect(container?.ariaLive).toEqual('polite');

    expect(heading.tagName).toEqual('H3');
    expect(heading.textContent).toEqual(TITLE_TEXT)
    expect(content?.textContent).toEqual(NOTIFICATION_TEXT)
});

test('abstract notification message with close button', () => {
    render(
        <AbstractNotificationMessage isDismissable>
            {NOTIFICATION_TEXT}
        </AbstractNotificationMessage>
    );

    const closeButton = screen.getByRole('button');
    const closeButtonLabel = within(closeButton).getByText('Close this notification');
    const closeButtonIcon = within(closeButton).getByRole('img', { hidden: true });

    expect(closeButton).toHaveClass('ds_notification-message__close', 'js-close-notification-message');
    expect(closeButton).toHaveAttribute('type', 'button');

    expect(closeButtonLabel).toBeInTheDocument();
    expect(closeButtonLabel).toHaveClass('visually-hidden');

    expect(closeButtonIcon).toHaveClass('ds_icon', 'ds_icon--fill');
});

test('abstract notification message with icon', () => {
    render(
        <AbstractNotificationMessage icon="Search">
            {NOTIFICATION_TEXT}
        </AbstractNotificationMessage>
    );


    const notificationIcon = screen.getByRole('img', { hidden: true });

    expect(notificationIcon).toHaveClass('ds_icon', 'ds_notification-message__icon', 'ds_icon--24');
    expect(notificationIcon).toHaveAttribute('aria-hidden');
});

test("does not render body when no children specified", () => {
  const { container } = render(<AbstractNotificationMessage title={TITLE_TEXT} />);

  expect(
    container.querySelector(".ds_notification-message__body"),
  ).not.toBeInTheDocument();
});

test('abstract notification message with custom aria live and custom header level', () => {
    render(
        <AbstractNotificationMessage headingLevel="h2" ariaLive="assertive" title={TITLE_TEXT}/>
    );

    const container = document.querySelector('.ds_notification-message');
    const heading = screen.getByRole('heading');

    expect(container?.ariaLive).toEqual('assertive');

    expect(heading.tagName).toEqual('H2');
});

test('passing additional props', () => {
    render(
        <AbstractNotificationMessage data-test="foo">
            {NOTIFICATION_TEXT}
        </AbstractNotificationMessage>
    )

    const container = document.querySelector('.ds_notification-message') as HTMLElement;
    expect(container?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <AbstractNotificationMessage className="foo">
            {NOTIFICATION_TEXT}
        </AbstractNotificationMessage>
    )

    const container = document.querySelector('.ds_notification-message') as HTMLElement;
    expect(container).toHaveClass('foo', 'ds_notification-message');
});