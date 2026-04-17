import { ButtonGroupProps } from "./types";
import clsx from 'clsx';

const ButtonGroup = ({
    children,
    className,
    isInline,
    ...props
}: ButtonGroupProps) => {
    return (
        <div className={clsx([
            "ds_button-group",
            isInline && "ds_button-group--inline",
            className
        ])} { ...props } >
            {children}
        </div>
    );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
