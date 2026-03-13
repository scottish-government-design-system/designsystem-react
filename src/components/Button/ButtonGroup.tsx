import { ButtonGroupProps } from "./types";
import clsx from 'clsx';

const ButtonGroup = ({
    children,
    className,
    isInline,
    isWrap,
    ...props
}: ButtonGroupProps) => {
    return (
        <div className={clsx([
            "ds_button-group",
            isInline && "ds_button-group--inline",
            isWrap && "ds_button-group--wrap",
            className
        ])} { ...props } >
            {children}
        </div>
    );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
