import type { Meta, StoryObj } from '@storybook/react-vite';
import argTypes from '../../../.storybook/sgdsArgTypes';

import SiteSearch from './SiteSearch';

type AutocompleteResponseObject = {
    key: string,
    displayText: string,
    weight: string,
    type: string,
    category: string
}

type SuggestionObject = { response: string };

const suggestionMappingFunction = function (suggestionObj: SuggestionObject) {
    const responseObj = JSON.parse(suggestionObj.response).map((item: string) => ({
        key: '',
        displayText: item,
        weight: '',
        type: '',
        category: ''
    }));
    const siteSearchElement = document.getElementById('site-search') as HTMLInputElement;
    const filteredResults = responseObj.filter((item: AutocompleteResponseObject) => (item.displayText.toLowerCase().indexOf(siteSearchElement.value.toLowerCase()) > -1));
    return filteredResults.slice(0,6);
}

const meta = {
    title: 'Components/Site search',
    component: SiteSearch,
    argTypes: {
        action: {
            description: 'The value of the search form\'s action atttribute',
            type: 'string'
        },
        autocompleteEndpoint: {
            description: 'The endpoint used by the autocomplete',
            type: 'string'
        },
        autocompleteSuggestionMappingFunction: {
            control: false,
            description: 'A JavaScript function that maps the results from the endpoint into the expected format',
            type: 'function'
        },
        id: argTypes.id(),
        method: {
            description: 'The form method to use',
            options: ['GET', 'POST'],
            control: { type: 'radio' },
            type: 'string'
        },
        minLength: {
            description: 'The number of characters that need to be entered before requests are sent to the autocomplete endpoint',
            type: 'number'
        },
        name: {
            description: '',
            type: 'string'
        },
        placeholder: {
            description: '',
            type: 'string'
        }
    },
    args: {
        id: 'site-search'
    }
} satisfies Meta<typeof SiteSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const Autocomplete: Story = {
    args: {
        autocompleteEndpoint: 'static/data/autocomplete-dummy-data.json?',
        autocompleteSuggestionMappingFunction: suggestionMappingFunction
    }
}
