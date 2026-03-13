export interface FeatureHeaderPrimaryProps extends React.AllHTMLAttributes<HTMLElement> {
    title: string
}

export interface FeatureHeaderProps extends React.AllHTMLAttributes<HTMLElement> {
    backgroundColor?: 'secondary' | 'tertiary' | 'brand'
    hasCoverImage?: boolean
    hasNoImagePadding?: boolean
    isFullWidth?: boolean
    isWideText?: boolean
    isTopAlignImage?: boolean
    tagName?: 'div' | 'header'
}
