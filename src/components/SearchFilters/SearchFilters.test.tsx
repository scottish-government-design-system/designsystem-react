import { test, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Filters from './SearchFilters';
import Checkbox from '../Checkbox/Checkbox';

test('search filters boilerplate renders correctly', () => {
    render(
        <Filters data-testid="searchfilters"/>
    );

    const filters = screen.getByTestId('searchfilters');

    expect(filters).toHaveClass('ds_search-filters');
    expect(filters.tagName).toEqual('DIV');

    const details = filters.querySelector('.ds_details');
    expect(details).toBeInTheDocument();
    expect(details).toHaveClass('ds_no-margin')
    expect(details?.tagName).toEqual('DIV');
    expect(details).toHaveAttribute('data-module', 'ds-details');
    expect(details?.parentElement).toEqual(filters);

    const detailsToggle = filters.querySelector('.ds_details__toggle');
    expect(detailsToggle).toBeInTheDocument();
    expect(detailsToggle).toHaveClass('visually-hidden');
    expect(detailsToggle?.tagName).toEqual('INPUT');
    expect(detailsToggle).toHaveAttribute('type', 'checkbox');
    expect(detailsToggle).toHaveAttribute('id', 'filters-toggle');
    expect(detailsToggle?.parentElement).toEqual(details);

    const detailsSummary = filters.querySelector('.ds_details__summary');
    expect(detailsSummary).toBeInTheDocument();
    expect(detailsSummary?.tagName).toEqual('LABEL');
    expect(detailsSummary).toHaveAttribute('for', 'filters-toggle');
    expect(detailsSummary).toHaveTextContent('Search filters');
    expect(detailsSummary?.parentElement).toEqual(details);
    expect(detailsSummary?.previousElementSibling).toEqual(detailsToggle);

    const skipLinks = filters.querySelector('.ds_skip-links');

    const detailsText = filters.querySelector('.ds_details__text');
    expect(detailsText).toBeInTheDocument();
    expect(detailsText?.tagName).toEqual('DIV');
    expect(detailsText?.parentElement).toEqual(details);
    expect(detailsText?.previousElementSibling).toEqual(skipLinks);

    const form = filters.querySelector('#filters');
    expect(form).toBeInTheDocument();
    expect(form?.tagName).toEqual('FORM');

    const formTitle = within(form).getByRole('heading');
    expect(formTitle).toBeInTheDocument();
    expect(formTitle.tagName).toEqual('H2');
    expect(formTitle).toHaveTextContent('Filter by');

    const accordion = form?.querySelector('.ds_accordion');;
    expect(accordion).toBeInTheDocument();
    expect(accordion).toHaveClass('js-initialised', 'ds_accordion--small', 'ds_!_margin-top--0');
    expect(accordion?.parentElement).toEqual(form);
    expect(accordion?.tagName).toEqual('DIV');
    expect(accordion?.previousElementSibling).toEqual(formTitle);

    const applyButton = within(filters).getByRole('button');
    expect(applyButton).toBeInTheDocument();
    expect(applyButton).toHaveClass('ds_button', 'ds_button--max', 'ds_button--small', 'ds_no-margin');
    expect(applyButton).toHaveTextContent('Apply filter');
    expect(applyButton?.tagName).toEqual('BUTTON');
    expect(applyButton?.parentElement).toEqual(form);
    expect(applyButton?.previousElementSibling).toEqual(accordion);
});

test('search filter panel boilerplate renders correctly', () => {
    render(
        <Filters.Panel data-testid="searchfilter" />
    );

    const filterPanel = screen.getByTestId('searchfilter');
    expect(filterPanel).toHaveClass('ds_accordion-item');
    expect(filterPanel.tagName).toEqual('DIV');

    const filterPanelBody = filterPanel.querySelector('.ds_accordion-item__body');
    expect(filterPanelBody).toBeInTheDocument();
    expect(filterPanelBody?.parentElement).toEqual(filterPanel);

    const fieldset = filterPanelBody?.querySelector('fieldset');
    expect(fieldset).toBeInTheDocument();
    expect(fieldset?.tagName).toEqual('FIELDSET');
    expect(fieldset?.parentElement).toEqual(filterPanelBody);

    const legend = fieldset?.querySelector('legend');
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveClass('visually-hidden');
    expect(legend?.tagName).toEqual('LEGEND');
    expect(legend?.parentElement).toEqual(fieldset);
});

test('search filter panel with scrollable content', () => {
    render(
        <Filters.Panel isScrollable data-testid="searchfilter"/>
    );

    const filterPanel = screen.getByTestId('searchfilter');
    const filterPanelBody = filterPanel.querySelector('.ds_accordion-item__body');
    const fieldset = filterPanelBody?.querySelector('fieldset');
    const scrollableDiv = fieldset?.querySelector('.ds_search-filters__scrollable');

    expect(scrollableDiv).toBeInTheDocument();
    expect(scrollableDiv?.parentElement).toEqual(fieldset);
});

test('search filter panel with an active filter count', () => {
    render(
        <Filters.Panel activeFilterCount={3} heading="Content type" data-testid="searchfilter"/>
    );

    const filterPanel = screen.getByTestId('searchfilter');

    const accordionTitle = filterPanel.querySelector('.ds_accordion-item__title');
    expect(accordionTitle).toBeInTheDocument();
    expect(accordionTitle).toHaveTextContent('Content type');
    expect(accordionTitle).toHaveTextContent('(3 selected)');

    const filterCountDiv = accordionTitle?.querySelector('.ds_search-filters__filter-count');
    expect(filterCountDiv).toBeInTheDocument();
    expect(filterCountDiv).toHaveTextContent('(3 selected)');
    expect(filterCountDiv?.parentElement).toEqual(accordionTitle);
});

test('search filter checkbox group renders correctly', () => {
    render(
        <Filters.CheckboxGroup data-testid="searchfiltercheckboxgroup">
            <Checkbox label="Pension Credit" id="pensioncredit" />
        </Filters.CheckboxGroup>
    );

    const checkboxGroup = screen.getByTestId('searchfiltercheckboxgroup');
    expect(checkboxGroup).toHaveClass('ds_search-filters__checkboxes');

    const checkbox = within(checkboxGroup).getByRole('checkbox');
    const checkboxWrapper = checkbox.parentElement;
    expect(checkboxWrapper).toBeInTheDocument();
    expect(checkboxWrapper).toHaveClass('ds_checkbox', 'ds_checkbox--small');
});

test('passing additional props', () => {
    render(
        <Filters data-test="foo" data-testid="searchfilters"/>
    );

    const searchFilters = screen.getByTestId('searchfilters');
    expect(searchFilters?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <Filters className="foo" data-testid="searchfilters"/>
    );

    const searchFilters = screen.getByTestId('searchfilters');
    expect(searchFilters).toHaveClass('foo');
});
