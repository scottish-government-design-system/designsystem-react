import clsx from 'clsx';

const WarningText = ({
    children,
    className,
    ...props
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <div
            className={clsx([
                'ds_warning-text',
                className
            ])}
            {...props}
        >
            <strong className="ds_warning-text__icon" aria-hidden="true"></strong>
            <strong className="visually-hidden">Warning</strong>
            <div className="ds_warning-text__text">
                {children}
            </div>
        </div>
    );
};

WarningText.displayName = 'WarningText';

export default WarningText;
