import { TagProps } from "./types";
import clsx from 'clsx';

const Tag = ({
    children,
    className,
    colour,
    ...props
}: TagProps) => {
    return (
        <span
            className={clsx([
                'ds_tag',
                className,
                colour && `ds_tag--${colour}`
            ])}
            {...props}
        >
            {children}
        </span>
    );
};

Tag.displayName = 'Tag';

export default Tag;
