import { DocumentIconName } from '../../shared-types';

export interface FileIconProps extends React.AllHTMLAttributes<SVGSVGElement> {
    ariaLabel?: React.AriaAttributes['aria-label'];
    className?: string;
    icon: DocumentIconName;
}
