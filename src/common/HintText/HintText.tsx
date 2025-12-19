import { HintTextProps } from "./types";

const HintText = ({
    children,
    id,
    ...props
}: HintTextProps) => {
    return (
        <p
            className="ds_hint-text"
            id={id}
            {...props}
        >
            {children}
        </p>
    );
};

HintText.displayName = 'HintText';

export default HintText;
