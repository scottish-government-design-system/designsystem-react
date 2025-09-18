"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MetadataItem = ({ children, className, name, ...props }) => {
    return (<div className={[
            'ds_metadata__item',
            className
        ].join(' ')} {...props}>
            <dt className="ds_metadata__key">{name}</dt>
            <dd className="ds_metadata__value">
                {children}{' '}
            </dd>
        </div>);
};
const Metadata = ({ children, className, isInline, ...props }) => {
    return (<dl className={[
            'ds_metadata',
            isInline && 'ds_metadata--inline',
            className
        ].join(' ')} {...props}>
            {children}
        </dl>);
};
Metadata.displayName = 'Metadata';
MetadataItem.displayName = 'Metadata.Item';
Metadata.Item = MetadataItem;
exports.default = Metadata;
