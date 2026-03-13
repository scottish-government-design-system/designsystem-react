import { HeadingLevel, LinkComponent } from '../../shared-types';
import { TagProps } from '../Tag/types';

export interface CardProps extends React.AllHTMLAttributes<HTMLElement> {
    className?: string
    hasSecondaryBackground?: boolean
    headingLevel?: HeadingLevel
    href?: string
    isAdaptive?: boolean
    isHorizontal?: boolean
    isHorizontalSmall?: boolean
    linkComponent?: LinkComponent
    tagName?: string
}

export interface CardHeaderProps extends React.AllHTMLAttributes<HTMLElement> {
    className?: string
    description?: string
    title: string
}

export interface CardMediaProps extends React.AllHTMLAttributes<HTMLElement> {
    isCover?: boolean
    mediaWidth?: 'narrow' | 'wide'
    ratio?: 'square' | '1:1' | '4:3' | '16:9' | '21:9'
}

export interface CardStatusTagProps extends TagProps {
    isHidden?: boolean
}
