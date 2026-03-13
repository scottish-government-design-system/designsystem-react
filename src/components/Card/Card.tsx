import { createContext, useContext } from 'react';
import ConditionalWrapper from "../../common/ConditionalWrapper";
import WrapperTag from "../../common/WrapperTag";
import AspectBox from '../AspectBox';
import Metadata from '../PageMetadata';
import Tag from '../Tag';
import { CardProps, CardHeaderProps, CardMediaProps, CardStatusTagProps } from "./types";
import { HeadingLevel, LinkComponent } from '@/src/shared-types';
import clsx from 'clsx';

type CardSettingsContextProps = {
    headingLevel: HeadingLevel
    href?: string
    linkComponent?: LinkComponent
};

const CardSettingsContext = createContext<CardSettingsContextProps>({
    headingLevel: 'h2',
    href: undefined,
    linkComponent: undefined
});

const CardContent = ({
    children
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <div className="ds_card__content">
            {children}
        </div>
    )
};

const CardContentHeader = ({
    children,
    description,
    title
}: CardHeaderProps) => {
    const headingLevel = useContext(CardSettingsContext).headingLevel;
    const href = useContext(CardSettingsContext).href;
    const linkComponent = useContext(CardSettingsContext).linkComponent;
    const LINK_CLASS = 'ds_card__link  ds_card__link--cover';

    function getLinkElement(children: React.ReactNode) {
        let linkElement;
        if (linkComponent) {
            linkElement = linkComponent({ className: LINK_CLASS, href, children });
        } else {
            linkElement = <a href={href} className={LINK_CLASS}>{children}</a>;
        }
        return linkElement as React.JSX.Element;
    }

    return (
        <div className="ds_card__content-header">
            {children}
            <WrapperTag
                className="ds_card__title"
                tagName={headingLevel}
            >
                <ConditionalWrapper
                    condition={typeof href !== 'undefined'}
                    wrapper={(children: React.JSX.Element) => getLinkElement(children)}
                >
                    {title}
                    {description && <span className="visually-hidden">, {description}</span>}
                </ConditionalWrapper>
            </WrapperTag>
        </div>
    )
};

const CardStatusTag = ({
    children,
    colour,
    isHidden,
    ...props
}: CardStatusTagProps) => {
    return (
        <Tag
            aria-hidden={isHidden ? "true" : undefined}
            colour={colour}
            {...props}
        >
            {children}
        </Tag>
    )
};

const CardContentMain = ({
    children
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <div className="ds_card__content-main">
            {children}
        </div>
    )
};

const CardContentFooter = ({
    children
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <div className="ds_card__content-footer">
            {children}
        </div>
    )
};

const CardMetadata = ({
    children
}: React.AllHTMLAttributes<HTMLElement>) => {
    return (
        <Metadata isInline>
            {children}
        </Metadata>
    )
};

const CardMedia = ({
    children,
    isCover,
    mediaWidth,
    ratio,
    ...props
}: CardMediaProps) => {
    return (
        <div 
            className={clsx([
                'ds_card__media',
                isCover && ratio && 'ds_card__media--cover',
                (mediaWidth && (mediaWidth === 'narrow' || mediaWidth === 'wide')) && 'ds_card__media--' + mediaWidth
            ])}
            {...props}
        >
            <ConditionalWrapper
                condition={ratio !== undefined}
                wrapper={(children: React.JSX.Element) => <AspectBox ratio={ratio}>
                {children}
            </AspectBox>}
            >
                {children}
            </ConditionalWrapper>
        </div>
    )
};

const Card = ({
    children,
    className,
    hasSecondaryBackground = false,
    headingLevel,
    href,
    isAdaptive = false,
    isHorizontal = false,
    isHorizontalSmall = false,
    linkComponent,
    tagName = 'div',
    ...props
}: CardProps) => {
    return (
        <CardSettingsContext value={{
            headingLevel: headingLevel || 'h2',
            href: href,
            linkComponent: linkComponent
        }}>
            <ConditionalWrapper
                condition={isAdaptive}
                wrapper={(children: React.JSX.Element) => <div className="ds_card-container">
                    {children}
                </div>}
            >
                <WrapperTag
                    tagName={tagName}
                    className={clsx([
                        'ds_card',
                        href && 'ds_card--navigation',
                        hasSecondaryBackground && 'ds_card--background-secondary',
                        isHorizontal && 'ds_card--horizontal',
                        isHorizontalSmall && 'ds_card--horizontal-small',
                        className
                    ])}
                    {...props}
                >
                    {children}
                </WrapperTag>
            </ConditionalWrapper>
        </CardSettingsContext>
    );
};

Card.Content = CardContent;
Card.ContentFooter = CardContentFooter;
Card.ContentHeader = CardContentHeader;
Card.ContentMain = CardContentMain;
Card.Metadata = CardMetadata;
Card.Media = CardMedia;
Card.StatusTag = CardStatusTag;

Card.displayName = 'Card';
CardContent.displayName = 'Card.Content';
CardContentFooter.displayName = 'Card.ContentFooter';
CardContentHeader.displayName = 'Card.ContentHeader';
CardContentMain.displayName = 'Card.ContentMain';
CardMetadata.displayName = 'Card.Metadata';
CardMedia.displayName = 'Card.Media';
CardStatusTag.displayName = 'Card.StatusTag';

export default Card;
