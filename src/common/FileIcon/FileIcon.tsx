import React from 'react';
import * as FileIcons from '../../images/documents';
import { FileIconProps } from './types';

const FileIcon = ({
    ariaLabel = '',
    className,
    icon
}: FileIconProps) => {
    const FileIconComponent = FileIcons[icon];

    return (
        <FileIconComponent
            aria-label={ariaLabel}
            className={className}
        />
    );
};

FileIcon.displayName = 'FileIcon';

export default FileIcon;
