"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataItem = void 0;
const MetadataItem = ({ children, name, ...props }) => {
    return (<div className="ds_metadata__item" {...props}>
            <dt className="ds_metadata__key">{name}</dt>{' '}
            <dd className="ds_metadata__value">
                {children}
            </dd>
        </div>);
};
exports.MetadataItem = MetadataItem;
const Metadata = ({ children, inline, ...props }) => {
    return (<dl className={[
            'ds_metadata',
            inline && 'ds_metadata--inline',
        ].join(' ')} {...props}>
            {children}
        </dl>);
};
Metadata.displayName = 'Metadata';
exports.MetadataItem.displayName = 'MetadataItem';
exports.default = Metadata;
