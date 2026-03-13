import React, { Children, createContext, useContext } from 'react';
import { FeatureHeaderProps, FeatureHeaderPrimaryProps } from './types';
import { ConditionalWrapper, WrapperTag } from '../../common';
import clsx from 'clsx';

type FeatureHeaderSettingsContextProps = {
    hasCoverImage?: boolean,
    hasNoImagePadding?: boolean
}

const FeatureHeaderSettingsContext = createContext<FeatureHeaderSettingsContextProps>({
    hasCoverImage: undefined,
    hasNoImagePadding: undefined
});

const Primary = ({
    children,
    title,
    ...props
}: FeatureHeaderPrimaryProps) => {
    return (
        <div
            className="ds_feature-header__primary"
            {...props}
        >
            <h1 className="ds_feature-header__title">
                {title}
            </h1>
            {children}
        </div>
    )
};

const Secondary = ({
    children,
    ...props
}: React.AllHTMLAttributes<HTMLDivElement>) => {
    const hasCoverImage = useContext(FeatureHeaderSettingsContext).hasCoverImage;
    const hasNoImagePadding = useContext(FeatureHeaderSettingsContext).hasNoImagePadding;

    children = Children.map(children, child => {
        const thisChild = child as React.ReactElement<HTMLElement>;
        if (thisChild && ['img', 'svg', 'picture'].includes(thisChild.type as string)) {
            return React.cloneElement(thisChild, { className: 'ds_feature-header__image' });
        } else {
            return child;
        }
    });

    return (
        <div className={clsx([
            'ds_feature-header__secondary',
            hasCoverImage && 'ds_feature-header__secondary--cover',
            hasNoImagePadding && 'ds_feature-header__secondary--no-padding'
        ])}
            {...props}
        >
            {children}
        </div>
    );
};

const FeatureHeader = ({
    backgroundColor,
    children,
    className,
    hasCoverImage,
    hasNoImagePadding,
    id,
    isFullWidth,
    isWideText,
    isTopAlignImage,
    tagName = 'div',
    ...props
}: FeatureHeaderProps) => {
    let backgroundColorClassName;
    if (backgroundColor === 'secondary') {
        backgroundColorClassName = 'ds_feature-header--background-secondary';
    } else if (backgroundColor === 'tertiary') {
        backgroundColorClassName = 'ds_feature-header--background-tertiary';
    } else if (backgroundColor === 'brand') {
        backgroundColorClassName = 'ds_feature-header--background';
    }

    return (
        <WrapperTag
            className={clsx([
                'ds_feature-header',
                isFullWidth && 'ds_feature-header--fullwidth',
                isWideText && 'ds_feature-header--wide',
                isTopAlignImage && 'ds_feature-header--top',
                backgroundColorClassName && backgroundColorClassName,
                className
            ])}
            id={id}
            tagName={tagName}
            {...props}
        >
            <ConditionalWrapper
                condition={!!isFullWidth}
                wrapper={(children: React.JSX.Element) => <div className="ds_wrapper">{children}</div>}
            >
                <FeatureHeaderSettingsContext value={{
                    hasCoverImage, hasNoImagePadding
                }}>
                    {children}
                </FeatureHeaderSettingsContext>
            </ConditionalWrapper>
        </WrapperTag>
    );
};

FeatureHeader.displayName = 'FeatureHeader';
Primary.displayName = 'FeatureHeader.Primary';
Secondary.displayName = 'FeatureHeader.Secondary';
FeatureHeader.Primary = Primary;
FeatureHeader.Secondary = Secondary;

export default FeatureHeader;
