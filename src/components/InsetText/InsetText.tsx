import clsx from 'clsx';

const InsetText = ({
    children,
    className,
    ...props
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <div
            className={clsx([
                'ds_inset-text',
                className
            ])}
            {...props}
        >
            <div className="ds_inset-text__text">
                {children}
            </div>
        </div>
    );
};

InsetText.displayName = 'InsetText';

export default InsetText;
