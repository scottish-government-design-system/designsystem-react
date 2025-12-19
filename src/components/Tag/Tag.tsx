import { TagProps } from "./types";

const Tag = ({
    children,
    className,
    colour,
    ...props
}: TagProps) => {
    return (
        <span
            className={[
                'ds_tag',
                className,
                colour && `ds_tag--${colour}`,
            ].join(' ')}
            {...props}
        >
            {children}
        </span>
    );
};

Tag.displayName = 'Tag';

export default Tag;
