import { DocumentIconName } from '../../shared-types';

export interface FileDownloadProps extends React.AllHTMLAttributes<HTMLElement> {
    cover?: string;
    fileSize?: string;
    fileType?: string;
    fileUrl: string;
    icon?: DocumentIconName;
    isHighlighted?: boolean;
    title: string;
}
