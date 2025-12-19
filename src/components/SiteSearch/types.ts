type FormMethods = 'GET' | 'POST';
export type SuggestionMappingFunctionProps = (suggestionObj: {response: string}) => [];

export interface SiteSearchProps extends React.AllHTMLAttributes<HTMLInputElement> {
    action?: string;
    autocompleteEndpoint?: string;
    autocompleteSuggestionMappingFunction?: SuggestionMappingFunctionProps;
    id: string;
    method?: FormMethods;
    minLength?: number;
    name?: string;
    placeholder?: string;
}
