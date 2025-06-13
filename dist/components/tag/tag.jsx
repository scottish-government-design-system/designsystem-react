"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag = ({ className, colour, title, ...props }) => {
    return (<span className={[
            'ds_tag',
            className,
            colour && `ds_tag--${colour}`,
        ].join(' ')} {...props}>
            {title}
        </span>);
};
Tag.displayName = 'Tag';
exports.default = Tag;
