import { MetdataItemProps, MetadataProps } from "./types";
import clsx from 'clsx';

const MetadataItem = ({
    children,
    className,
    name,
    ...props
}: MetdataItemProps) => {
    return (
        <div className={clsx([
            'ds_metadata__item',
            className
        ])}
            {...props}
        >
            <dt className="ds_metadata__key">{name}</dt>{' '}
            <dd className="ds_metadata__value">
                {children}{' '}
            </dd>
        </div>
    );
};

const Metadata = ({
    children,
    className,
    isInline,
    ...props
}: MetadataProps) => {
    return (
        <dl
            className={clsx([
                'ds_metadata',
                isInline && 'ds_metadata--inline',
                className
            ])}
            {...props}
        >
            {children}
        </dl>
    );
};

Metadata.displayName = 'Metadata';
MetadataItem.displayName = 'Metadata.Item';
Metadata.Item = MetadataItem;

export default Metadata;
