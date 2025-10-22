import { test, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Facets from './SearchFacets';

test('search facets boilerplate renders correctly', () => {
    render(
        <Facets data-testid="searchfacets"/>
    );

    const facets = screen.getByTestId('searchfacets');

    expect(facets).toBeInTheDocument();
    expect(facets).toHaveClass('ds_facets');
    expect(facets.tagName).toEqual('DIV');

    const status = facets.querySelector('p');
    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('visually-hidden');
    expect(status?.textContent).toEqual('There are 0 search filters applied');
    expect(status?.parentElement).toEqual(facets);

    const list = facets.querySelector('dl');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('ds_facets__list');
    expect(list?.parentElement).toEqual(facets);
    expect(list?.previousElementSibling).toEqual(status);

    // clear button is not present if there are no facets
    const clearButton = within(facets).queryByRole('button', { name: /clear all filters/i });
    expect(clearButton).not.toBeInTheDocument();
});

test('search facets count with one facet', () => {
    render(
        <Facets data-testid="searchfacets">
            <Facets.Item title="Facet 1" />
        </Facets>
    );

    const facets = screen.getByTestId('searchfacets');
    const status = within(facets).getByText('There is 1 search filter applied');
    expect(status).toBeInTheDocument();

    const clearButton = within(facets).getByRole('button', { name: /clear all filters/i });
    expect(clearButton).toBeInTheDocument();
});

test('search facets count with multiple facets', () => {
    render(
        <Facets data-testid="searchfacets">
            <Facets.Item title="Facet 1" />
            <Facets.Item title="Facet 2" />
        </Facets>
    );

    const facets = screen.getByTestId('searchfacets');
    const facetItems = facets.querySelectorAll('.ds_facet');
    const status = within(facets).getByText(`There are ${facetItems.length} search filters applied`);
    expect(status).toBeInTheDocument();

    const clearButton = within(facets).getByRole('button', { name: /clear all filters/i });
    expect(clearButton).toBeInTheDocument();
});

test('search filters count with facet groups', () => {
    render(
        <Facets data-testid="searchfacets">
            <Facets.Group title="Group 1">
                <Facets.Item title="Facet 1" />
                <Facets.Item title="Facet 2" />
            </Facets.Group>
            <Facets.Group title="Group 2">
                <Facets.Item title="Facet 3" />
            </Facets.Group>
        </Facets>
    );

    const facets = screen.getByTestId('searchfacets');
    const facetItems = facets.querySelectorAll('.ds_facet');
    const status = within(facets).getByText(`There are ${facetItems.length} search filters applied`);
    expect(status).toBeInTheDocument();

    const clearButton = within(facets).getByRole('button', { name: /clear all filters/i });
    expect(clearButton).toBeInTheDocument();
});

test('search facet renders correctly', () => {
    const FACET_TITLE = 'Facet 1';

    render(
        <Facets.Item title={FACET_TITLE} data-testid="searchfacet" />
    );

    const facetWrapper = screen.getByTestId('searchfacet');
    expect(facetWrapper).toBeInTheDocument();
    expect(facetWrapper).toHaveClass('ds_facet-wrapper');
    expect(facetWrapper.tagName).toEqual('DD');

    const facetButton = within(facetWrapper).getByRole('button');
    expect(facetButton).toHaveClass('ds_facet__button');
    expect(facetButton).toHaveAttribute('aria-label', `Remove '${FACET_TITLE}' filter`);

    const facet = facetButton.parentElement;
    expect(facet).toHaveClass('ds_facet');
    expect(facet?.textContent).toEqual(FACET_TITLE);

    const facetIcon = within(facetButton).getByRole('img', { hidden: true });
    expect(facetIcon).toHaveClass('ds_facet__button-icon');
    expect(facetIcon).toHaveAttribute('aria-hidden', 'true');
});

test('search facet with accessible name', () => {
    const FACET_TITLE = 'Facet 1';
    const ACCESSIBLE_NAME = 'Custom facet name';

    render(
        <Facets.Item title={FACET_TITLE} accessibleName={ACCESSIBLE_NAME} data-testid="searchfacet" />
    );

    const facetWrapper = screen.getByTestId('searchfacet');
    const facetButton = within(facetWrapper).getByRole('button');
    expect(facetButton).toHaveAttribute('aria-label', `Remove '${ACCESSIBLE_NAME}' filter`);

    const facet = facetButton.parentElement;
    expect(facet).toHaveClass('ds_facet');
    expect(facet?.textContent).toEqual(FACET_TITLE);
});

test('facet button onClick works', async () => {
    const FACET_TITLE = 'Facet 1';
    const handleClick = vi.fn();

    render(
        <Facets.Item title={FACET_TITLE} onClick={handleClick} data-testid="searchfacet" />
    );

    const facetWrapper = screen.getByTestId('searchfacet');
    const facetButton = within(facetWrapper).getByRole('button');

    await facetButton.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
});

test('facet group renders correctly', () => {
    const GROUP_TITLE = 'Group 1';

    render(
        <Facets.Group title={GROUP_TITLE} data-testid="searchfacetgroup">
            <Facets.Item title="Facet 1" />
            <Facets.Item title="Facet 2" />
        </Facets.Group>
    );

    const facetGroup = screen.getByTestId('searchfacetgroup');
    expect(facetGroup).toBeInTheDocument();
    expect(facetGroup).toHaveClass('ds_facet-group');
    expect(facetGroup.tagName).toEqual('DIV');

    const groupTitle = within(facetGroup).getByText(`${GROUP_TITLE}:`);
    expect(groupTitle).toBeInTheDocument();
    expect(groupTitle).toHaveClass('ds_facet__group-title');

    const facetWrappers = facetGroup.querySelectorAll('.ds_facet-wrapper');
    expect(facetWrappers.length).toEqual(2);

    const firstFacet = facetWrappers[0];
    expect(firstFacet?.textContent).toContain('Facet 1');
    expect(firstFacet?.textContent).not.toContain('or');

    const secondFacet = facetWrappers[1];
    expect(secondFacet?.textContent).toContain('Facet 2');
    expect(secondFacet?.textContent).toContain('or');
});

test('facet group with custom join content', () => {
    const GROUP_TITLE = 'Group 1';
    const JOIN_CONTENT = 'and';

    render(
        <Facets.Group title={GROUP_TITLE} joinContent={JOIN_CONTENT} data-testid="searchfacetgroup">
            <Facets.Item title="Facet 1" />
            <Facets.Item title="Facet 2" />
        </Facets.Group>
    );

    const facetGroup = screen.getByTestId('searchfacetgroup');
    const facetWrappers = facetGroup.querySelectorAll('.ds_facet-wrapper');

    const firstFacet = facetWrappers[0];
    expect(firstFacet?.textContent).toContain('Facet 1');
    expect(firstFacet?.textContent).not.toContain(JOIN_CONTENT);

    const secondFacet = facetWrappers[1];
    expect(secondFacet?.textContent).toContain('Facet 2');
    expect(secondFacet?.textContent).toContain(JOIN_CONTENT);
});

test('passing additional props', () => {
    render(
        <Facets data-test="foo" data-testid="searchfacets"/>
    );

    const searchFacets = screen.getByTestId('searchfacets');
    expect(searchFacets?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Facets className="foo" data-testid="searchfacets"/>
    );

    const searchFacets = screen.getByTestId('searchfacets');
    expect(searchFacets).toHaveClass('foo');
});
