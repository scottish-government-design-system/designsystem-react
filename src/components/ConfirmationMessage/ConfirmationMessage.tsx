import Icon from '../../common/Icon';
import WrapperTag from '../../common/WrapperTag';
import { ConfirmationMessageProps } from './types';
import clsx from 'clsx';

const ConfirmationMessage = ({
    ariaLive = 'polite',
    children,
    className,
    headingLevel = 'h3',
    title,
    ...props
}: ConfirmationMessageProps) => {
    return (
        <div
            aria-live={ariaLive}
            className={clsx([
                'ds_confirmation-message',
                className
            ])}
            {...props}
        >
            <Icon className="ds_confirmation-message__icon" icon="CheckCircle" iconSize="24" />

            <WrapperTag
                className="ds_confirmation-message__title"
                tagName={headingLevel}
            >
                {title}
            </WrapperTag>
            {children && <div className="ds_confirmation-message__body">
                {children}
            </div>}
        </div>
    );
};

ConfirmationMessage.displayName = 'ConfirmationMessage';

export default ConfirmationMessage;
