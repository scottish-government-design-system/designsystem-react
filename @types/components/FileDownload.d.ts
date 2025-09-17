declare namespace SGDS.Component {
    interface FileDownload extends React.AllHTMLAttributes<HTMLElement> {
        cover?: string,
        fileSize?: string,
        fileType?: string,
        fileUrl: string,
        icon?: DocumentIconName,
        isHighlighted?: boolean,
        title: string
    }
}
