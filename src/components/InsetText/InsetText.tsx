const InsetText = ({
    children,
    className,
    ...props
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <div
            className={[
                'ds_inset-text',
                className
            ].join(' ')}
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
