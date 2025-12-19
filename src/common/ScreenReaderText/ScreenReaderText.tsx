const ScreenReaderText = ({
    children,
    ...props
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <span
            className="visually-hidden"
            {...props}
        >
            {children}
        </span>
    );
};

ScreenReaderText.displayName = 'ScreenReaderText';

export default ScreenReaderText;
