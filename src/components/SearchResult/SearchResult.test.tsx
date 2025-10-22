import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import SearchResult from './SearchResult';

const RESULT_TITLE = 'My title';
const RESULT_HREF = '#foo';
const RESULT_CONTENT = 'My content';
const META_KEY = 'My meta key';
const META_VALUE = 'My meta value';
const CONTEXT_VALUE = 'My context value';

test('search result renders correctly', () => {
    render(
        <SearchResult href={RESULT_HREF} title={RESULT_TITLE} data-testid="searchresult">
            <SearchResult.Content>
                {RESULT_CONTENT}
            </SearchResult.Content>
            <SearchResult.Meta>
                <SearchResult.MetaItem name={META_KEY}>
                    {META_VALUE}
                </SearchResult.MetaItem>
            </SearchResult.Meta>
            <SearchResult.Context>
                <SearchResult.ContextItem>{CONTEXT_VALUE}</SearchResult.ContextItem>
            </SearchResult.Context>
        </SearchResult>
    );

    const searchResult = screen.getByTestId('searchresult');
    expect(searchResult).toHaveClass('ds_search-result');
    expect(searchResult).not.toHaveClass('ds_search-result--promoted');

    const title = screen.getByRole('heading');
    expect(title).toHaveClass('ds_search-result__title');
    expect(title).toHaveTextContent(RESULT_TITLE);
    expect(title?.parentElement).toEqual(searchResult);

    const link = within(title).getByRole('link');
    expect(link).toHaveClass('ds_search-result__link');
    expect(link).toHaveAttribute('href', RESULT_HREF);
    expect(link.tagName).toBe('A');

    const content = screen.getByText(RESULT_CONTENT);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('ds_search-result__summary');
    expect(content?.previousElementSibling).toEqual(title);

    const meta = searchResult.querySelector('.ds_metadata');
    expect(meta).toBeInTheDocument();
    expect(meta).toHaveClass('ds_metadata--inline', 'ds_search-result__metadata');
    expect(meta?.previousElementSibling).toEqual(content);
    expect(meta?.tagName).toBe('DL');

    const metaItem = meta.querySelector('.ds_metadata__item');
    expect(metaItem).toBeInTheDocument();
    expect(metaItem).toHaveClass('ds_metadata__item');
    expect(metaItem?.parentElement).toEqual(meta);

    const metaTerm = meta.querySelector('dt');
    expect(metaTerm).toBeInTheDocument();
    expect(metaTerm).toHaveClass('ds_metadata__key');
    expect(metaTerm?.textContent).toBe(META_KEY);
    expect(metaTerm?.parentElement).toEqual(metaItem);

    const metaDesc = meta.querySelector('dd');
    expect(metaDesc).toBeInTheDocument();
    expect(metaDesc).toHaveClass('ds_metadata__value');
    expect(metaDesc?.textContent.trim()).toBe(META_VALUE);
    expect(metaDesc?.parentElement).toEqual(metaItem);
    expect(metaDesc?.previousElementSibling).toEqual(metaTerm);

    const context = searchResult.querySelector('.ds_search-result__context');
    expect(context).toBeInTheDocument();
    expect(context).toHaveClass('ds_search-result__context');
    expect(context?.tagName).toBe('DL');
    expect(context?.previousElementSibling).toEqual(meta);

    const contextTitle = context?.querySelector('dt');
    expect(contextTitle).toBeInTheDocument();
    expect(contextTitle).toHaveClass('ds_search-result__context-key');
    expect(contextTitle?.textContent).toBe('Part of:');
    expect(contextTitle?.parentElement).toEqual(context);

    const contextValue = context?.querySelector('dd');
    expect(contextValue).toBeInTheDocument();
    expect(contextValue).toHaveClass('ds_search-result__context-value');
    expect(contextValue?.textContent).toBe(CONTEXT_VALUE);
    expect(contextValue?.previousElementSibling).toEqual(contextTitle);
    expect(contextValue?.parentElement).toEqual(context);
});

test('promoted search result renders correctly', () => {
    render(
        <SearchResult isPromoted href="#foo" title={RESULT_TITLE} data-testid="searchresult">
            <SearchResult.Content>
                {RESULT_CONTENT}
            </SearchResult.Content>
        </SearchResult>
    );

    const searchResult = screen.getByTestId('searchresult');
    expect(searchResult).toHaveClass('ds_search-result', 'ds_search-result--promoted');

    const promotedContent = searchResult.querySelector('.ds_search-result--promoted-content');
    expect(promotedContent).toBeInTheDocument();
    expect(promotedContent?.parentElement).toEqual(searchResult);
    expect(promotedContent?.tagName).toBe('DIV');

    const promotedTitle = promotedContent?.querySelector('.ds_search-result--promoted-title');
    expect(promotedTitle).toBeInTheDocument();
    expect(promotedTitle?.textContent).toBe('Recommended');
    expect(promotedTitle?.parentElement).toEqual(promotedContent);

    const title = screen.getByRole('heading');
    expect(title).toHaveClass('ds_search-result__title');
    expect(title).toHaveTextContent(RESULT_TITLE);
    expect(title?.parentElement).toEqual(promotedContent);

    const content = screen.getByText(RESULT_CONTENT);
    expect(content).toBeInTheDocument();
    expect(content?.previousElementSibling).toEqual(title);
    expect(content?.parentElement).toEqual(promotedContent);
});

test('search result with media renders correctly', () => {
    const IMAGE = <img alt=""/>;

    render(
        <SearchResult href={RESULT_HREF} title={RESULT_TITLE} data-testid="searchresult">
            <SearchResult.Content>
                <SearchResult.Media>
                    {IMAGE}
                </SearchResult.Media>
                {RESULT_CONTENT}
            </SearchResult.Content>
        </SearchResult>
    );

    const searchResult = screen.getByTestId('searchresult');
    const title = screen.getByRole('heading');

    const summary = searchResult.querySelector('.ds_search-result__has-media');
    expect(summary).toBeInTheDocument();
    expect(summary?.tagName).toBe('DIV');
    expect(summary?.parentElement).toEqual(searchResult);
    expect(summary?.previousElementSibling).toEqual(title);

    const mediaWrapper = summary?.querySelector('.ds_search-result__media-wrapper');
    expect(mediaWrapper).toBeInTheDocument();
    expect(mediaWrapper?.parentElement).toEqual(summary);

    const mediaLink = mediaWrapper?.querySelector('.ds_search-result__media-link');
    expect(mediaLink).toBeInTheDocument();
    expect(mediaLink).toHaveAttribute('aria-hidden', 'true');
    expect(mediaLink).toHaveAttribute('href', RESULT_HREF);
    expect(mediaLink).toHaveAttribute('tabindex', '-1');
    expect(mediaLink?.parentElement).toEqual(mediaWrapper);
    expect(mediaLink?.tagName).toBe('A');

    const media = summary?.querySelector('.ds_search-result__media');
    expect(media).toBeInTheDocument();
    expect(media).toHaveClass('ds_aspect-box', 'ds_aspect-box--square');
    expect(media?.parentElement).toEqual(mediaLink);
    expect(media?.tagName).toBe('DIV');

    const img = media?.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img?.parentElement).toEqual(media);

    const content = screen.getByText(RESULT_CONTENT);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('ds_search-result__summary');
    expect(content?.parentElement).toEqual(summary);
    expect(content?.previousElementSibling).toEqual(mediaWrapper);
});

test('linkComponent is used for title link', () => {
    render(
        <SearchResult href={RESULT_HREF} title={RESULT_TITLE} data-testid="searchresult" linkComponent={
            ({ className, ...props }) => (
                <span role="link" className={className} {...props}/>
            )}>
            <SearchResult.Content>
                {RESULT_CONTENT}
            </SearchResult.Content>
        </SearchResult>
    );

    const title = screen.getByRole('heading');

    const link = within(title).getByRole('link');
    expect(link).toHaveClass('ds_search-result__link');
    expect(link).toHaveAttribute('href', RESULT_HREF);
    expect(link.tagName).toBe('SPAN');
    expect(link?.parentElement).toEqual(title);
    expect(link?.previousElementSibling).toBeNull();
});

test('passing additional props', () => {
    render(
        <SearchResult data-test="foo" data-testid="searchresult"/>
    );

    const searchResult = screen.getByTestId('searchresult');
    expect(searchResult?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <SearchResult className="foo" data-testid="searchresult"/>
    );

    const searchResult = screen.getByTestId('searchresult');
    expect(searchResult).toHaveClass('foo');
});
