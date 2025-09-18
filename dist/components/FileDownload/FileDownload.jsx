"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const FileIcon_1 = __importDefault(require("../../common/FileIcon"));
const FileDownload = ({ className, cover, icon = 'Generic', isHighlighted, fileSize, fileType, fileUrl, title, ...props }) => {
    const hasMetadata = !!fileType || !!fileSize;
    const metaContainerId = `file-download-${(0, react_1.useId)()}`;
    return (<div className={[
            'ds_file-download',
            isHighlighted && 'ds_file-download--highlighted',
            className
        ].join(' ')} {...props}>
            <div className="ds_file-download__thumbnail">
                <a className="ds_file-download__thumbnail-link" aria-hidden="true" tabIndex={-1} href={fileUrl}>
                    {cover ?
            <img alt="" className="ds_file-download__thumbnail-image" src={cover}/>
            :
                <FileIcon_1.default ariaLabel="" className="ds_file-download__thumbnail-image" icon={icon}/>}
                </a>
            </div>

            <div className="ds_file-download__content">
                <a href={fileUrl} className="ds_file-download__title" aria-describedby={hasMetadata ? metaContainerId : undefined}>
                    {title}
                </a>

                {hasMetadata &&
            <div id={metaContainerId} className="ds_file-download__details">
                        <dl className="ds_metadata  ds_metadata--inline">
                            {fileType &&
                    <div className="ds_metadata__item">
                                    <dt className="ds_metadata__key  visually-hidden">File type</dt>
                                    <dd className="ds_metadata__value">{fileType}<span className="visually-hidden">,</span></dd>
                                </div>}

                            {fileSize &&
                    <div className="ds_metadata__item">
                                    <dt className="ds_metadata__key  visually-hidden">File size</dt>
                                    <dd className="ds_metadata__value">{fileSize}</dd>
                                </div>}
                        </dl>
                    </div>}
            </div>
        </div>);
};
FileDownload.displayName = 'FileDownload';
exports.default = FileDownload;
