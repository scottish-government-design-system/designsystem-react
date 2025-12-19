import { IconName } from '../../shared-types';

export interface IconProps extends React.AllHTMLAttributes<SVGSVGElement> {
    ariaLabel?: React.AriaAttributes['aria-label'];
    className?: string;
    isFilled?: boolean;
    icon: IconName;
    iconSize?: string;
}
