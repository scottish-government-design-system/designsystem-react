import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ConfirmationNotification from './ConfirmationNotification';

const NOTIFICATION_TEXT = 'Further details of the notification message';
const TITLE_TEXT = 'Important information';

test('confirmation notification message renders correctly', () => {
    render(
        <ConfirmationNotification title={TITLE_TEXT}>
            {NOTIFICATION_TEXT}
        </ConfirmationNotification>
    );

    const container = document.querySelector('.ds_notification-message');
    const heading = screen.getByRole('heading');
    const content = heading.nextElementSibling;
   
    expect(container?.ariaLive).toEqual('polite');

    expect(heading.tagName).toEqual('H3');
    expect(heading.textContent).toEqual(TITLE_TEXT)
    expect(content?.textContent).toEqual(NOTIFICATION_TEXT)
});

test('confirmation notification message with close button', () => {
    render(
        <ConfirmationNotification isDismissable>
            {NOTIFICATION_TEXT}
        </ConfirmationNotification>
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

test('confirmation notification message with icon', () => {
    render(
        <ConfirmationNotification icon="Search">
            {NOTIFICATION_TEXT}
        </ConfirmationNotification>
    );


    const notificationIcon = screen.getByRole('img', { hidden: true });

    expect(notificationIcon).toHaveClass('ds_icon', 'ds_notification-message__icon', 'ds_icon--24');
    expect(notificationIcon).toHaveAttribute('aria-hidden');
});

test("does not render body when no children specified", () => {
  const { container } = render(<ConfirmationNotification title={TITLE_TEXT} />);

  expect(
    container.querySelector(".ds_notification-message__body"),
  ).not.toBeInTheDocument();
});

test('confirmation notification message with custom aria live and custom header level', () => {
    render(
        <ConfirmationNotification headingLevel="h2" ariaLive="assertive" title={TITLE_TEXT}/>
    );

    const container = document.querySelector('.ds_notification-message');
    const heading = screen.getByRole('heading');

    expect(container?.ariaLive).toEqual('assertive');

    expect(heading.tagName).toEqual('H2');
});

test('passing additional props', () => {
    render(
        <ConfirmationNotification data-test="foo">
            {NOTIFICATION_TEXT}
        </ConfirmationNotification>
    )

    const container = document.querySelector('.ds_notification-message') as HTMLElement;
    expect(container?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <ConfirmationNotification className="foo">
            {NOTIFICATION_TEXT}
        </ConfirmationNotification>
    )

    const container = document.querySelector('.ds_notification-message') as HTMLElement;
    expect(container).toHaveClass('foo', 'ds_notification-message');
});