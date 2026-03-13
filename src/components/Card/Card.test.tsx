import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const CARD_TITLE = 'Bananas';
const CARD_HREF = '#foo';
const CARD_CONTENT = 'A banana is an elongated, edible fruit—botanically a berry—produced by several kinds of large treelike herbaceous flowering plants in the genus Musa.';
const CARD_DESCRIPTION = 'New fruit added';
const CARD_MEDIA = 'JPEG image of a banana';

test('card renders correctly', () => {
    render(
        <Card href={CARD_HREF} data-testid="card">
            <Card.Media isCover ratio="4:3" mediaWidth="wide">
                {CARD_MEDIA}
            </Card.Media>
            <Card.Content>
                <Card.ContentHeader title={CARD_TITLE}>
                    <Card.StatusTag colour="orange" isHidden>New release</Card.StatusTag>
                </Card.ContentHeader>
                <Card.ContentMain>
                    <p>{CARD_CONTENT}</p>
                </Card.ContentMain>
                <Card.ContentFooter>
                    <Card.Metadata>
                    </Card.Metadata>
                </Card.ContentFooter>
            </Card.Content>
        </Card>
    );

    const card = screen.getByTestId('card');
    const title = screen.getByRole('heading');
    const link = screen.getByRole('link');
    const content = card.querySelector('p');
    const media = card.firstChild;
    const aspectbox = media?.firstChild;
    const metadata = card.querySelector('.ds_metadata');

    expect(media).toHaveClass('ds_card__media', 'ds_card__media--cover', 'ds_card__media--wide');
    expect(aspectbox).toHaveClass('ds_aspect-box', 'ds_aspect-box--43');

    expect(card).toHaveClass('ds_card', 'ds_card--navigation');
    expect(card.tagName).toEqual('DIV');

    expect(title).toHaveClass('ds_card__title');
    expect(title.tagName).toEqual('H2');
    expect(title.textContent).toEqual(CARD_TITLE);
    expect(title.parentElement).toHaveClass('ds_card__content-header');

    expect(link).toHaveClass('ds_card__link', 'ds_card__link--cover');
    expect(link).toHaveAttribute('href', CARD_HREF);
    expect(link.textContent).toEqual(CARD_TITLE);
    expect(link.parentElement).toEqual(title);

    expect(content?.parentElement).toHaveClass('ds_card__content-main');
    expect(content?.textContent).toEqual(CARD_CONTENT);

    expect(metadata).toHaveClass('ds_metadata', 'ds_metadata--inline');
    expect(metadata?.parentElement).toHaveClass('ds_card__content-footer');
});

test('container added for adaptive card', () => {
    render(
        <Card data-testid="card" isAdaptive>
            <Card.Content>
                <Card.ContentHeader
                    title={CARD_TITLE}>
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    );

    const card = screen.getByTestId('card');
    const container = card.parentElement

    expect(container).toHaveClass('ds_card-container');
});

test('description added', () => {
    render(
        <Card data-testid="card">
            <Card.Content>
                <Card.ContentHeader
                    title={CARD_TITLE}
                    description={CARD_DESCRIPTION}>
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    );

    const description = screen.getByText(', '+CARD_DESCRIPTION);

    expect(description).toHaveClass('visually-hidden');
    expect(description.tagName).toEqual('SPAN');
    expect(description.parentElement).toHaveClass('ds_card__title');
});

test('display variant classes added', () => {
    render(
        <Card
            data-testid="card"
            hasSecondaryBackground
            isHorizontal
            isHorizontalSmall>
            <Card.Content>
                <Card.ContentHeader
                    title={CARD_TITLE}
                    >
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    );

    const card = screen.getByTestId('card');

    expect(card).toHaveClass('ds_card', 'ds_card--background-secondary', 'ds_card--horizontal', 'ds_card--horizontal-small');
});

test('custom heading level', () => {
    render(
        <Card href={CARD_HREF} data-testid="card" headingLevel="h3">
            <Card.Content>
                <Card.ContentHeader
                    title={CARD_TITLE}>
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    );

    const title = screen.getByRole('heading');
    expect(title.tagName).toEqual('H3');
});

test('custom element', () => {
    render(
        <Card data-testid="card" tagName="article">
            <Card.Content>
                <Card.ContentHeader
                    title={CARD_TITLE}>
                </Card.ContentHeader>
            </Card.Content>
        </Card>
    );

    const card = screen.getByTestId('card');
    expect(card.tagName).toEqual('ARTICLE');
});

test('custom link component', () => {
    render(
        <Card href={CARD_HREF} data-testid="card" linkComponent={
            ({ className, ...props }) => (
                <span role="link" className={className} {...props}/>
            )}>
            <Card.ContentHeader
                title={CARD_TITLE}>
            </Card.ContentHeader>
        </Card>
    );

    const link = screen.getByRole('link');

    expect(link.tagName).toEqual('SPAN');
    expect(link.textContent).toEqual(CARD_TITLE);
});

describe('card status tag', () => {
    const TAG_TEXT = 'Foo';

    test('card status tag', () => {
        render(
            <Card.StatusTag data-testid="status-tag">{TAG_TEXT}</Card.StatusTag>
        );

        const statusTag = screen.getByTestId('status-tag');

        expect(statusTag).toHaveClass('ds_tag');
        expect(statusTag.tagName).toEqual('SPAN');
        expect(statusTag.textContent).toEqual(TAG_TEXT);
        expect(statusTag.getAttribute('aria-hidden')).not.toEqual('true');
    });

    test('card status tag: hidden', () => {
        render(
            <Card.StatusTag data-testid="status-tag" isHidden>{TAG_TEXT}</Card.StatusTag>
        );

        const statusTag = screen.getByTestId('status-tag');

        expect(statusTag).toHaveClass('ds_tag');
        expect(statusTag.getAttribute('aria-hidden')).toEqual('true');
    });
});

describe('card media', () => {
    test('card media', () => {
        render(
            <Card.Media data-testid="card-media">
                {CARD_MEDIA}
            </Card.Media>
        );

        const cardMedia = screen.getByTestId('card-media');

        expect(cardMedia).toHaveClass('ds_card__media');
        expect(cardMedia.tagName).toEqual('DIV');
        expect(cardMedia.innerHTML).toEqual(CARD_MEDIA);
    });

    test('card media with isCover and ratio', () => {
        render(
            <Card.Media isCover ratio="4:3" data-testid="card-media">
                {CARD_MEDIA}
            </Card.Media>
        );

        const cardMedia = screen.getByTestId('card-media');
        const cardMediaInner = cardMedia.querySelector('*');

        expect(cardMedia).toHaveClass('ds_card__media--cover');
        expect(cardMediaInner).toHaveClass('ds_aspect-box', 'ds_aspect-box--43');
    });

    test('card media with only isCover', () => {
        render(
            <Card.Media isCover data-testid="card-media">
                {CARD_MEDIA}
            </Card.Media>
        );

        const cardMedia = screen.getByTestId('card-media');
        const cardMediaInner = cardMedia.querySelector('*');

        expect(cardMedia).not.toHaveClass('ds_card__media--cover');
        expect(cardMediaInner).not.toBeInTheDocument();
    });

    test('card media with only ratio', () => {
        render(
            <Card.Media ratio="4:3" data-testid="card-media">
                {CARD_MEDIA}
            </Card.Media>
        );

        const cardMedia = screen.getByTestId('card-media');
        const cardMediaInner = cardMedia.querySelector('*');

        expect(cardMedia).not.toHaveClass('ds_card__media--cover');
        expect(cardMediaInner).toHaveClass('ds_aspect-box', 'ds_aspect-box--43');
    });

    test('card media with mediaWidth', () => {
        render(
            <Card.Media mediaWidth="narrow" data-testid="card-media">
                {CARD_MEDIA}
            </Card.Media>
        );

        const cardMedia = screen.getByTestId('card-media');

        expect(cardMedia).toHaveClass('ds_card__media--narrow');
    });
});

test('passing additional props', () => {
    render(
        <Card data-test="foo" data-testid="card"/>
    );

    const card = screen.getByTestId('card');
    expect(card.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Card className="foo" data-testid="card"/>
    );

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('foo');
});
