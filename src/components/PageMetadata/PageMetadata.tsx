import { MetdataItemProps, MetadataProps } from "./types";

const MetadataItem = ({
    children,
    className,
    name,
    ...props
}: MetdataItemProps) => {
    return (
        <div className={[
            'ds_metadata__item',
            className
        ].join(' ')}
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
            className={[
                'ds_metadata',
                isInline && 'ds_metadata--inline',
                className
            ].join(' ')}
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
