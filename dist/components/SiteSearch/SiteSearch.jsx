"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// @ts-ignore
const autocomplete_1 = __importDefault(require("@scottish-government/design-system/src/components/autocomplete/autocomplete"));
const Button_1 = __importDefault(require("../Button"));
const SiteSearch = function ({ action = '/search', autocompleteEndpoint, autocompleteSuggestionMappingFunction, className, id = 'site-search', method = 'GET', minLength = 3, name = 'q', placeholder = 'Search', ...props }) {
    const ref = (0, react_1.useRef)(null);
    const hasAutocomplete = !!autocompleteEndpoint;
    let autocompleteId = hasAutocomplete ? id + '-autocomplete' : '';
    (0, react_1.useEffect)(() => {
        if (hasAutocomplete && ref.current) {
            const options = {};
            if (minLength) {
                options.minLength = minLength;
            }
            if (autocompleteSuggestionMappingFunction) {
                options.suggestionMappingFunction = autocompleteSuggestionMappingFunction;
            }
            const autocomplete = new autocomplete_1.default(document.getElementById(autocompleteId), autocompleteEndpoint, options);
            autocomplete.init();
        }
    }, [ref, autocompleteEndpoint, autocompleteId, hasAutocomplete, minLength, autocompleteSuggestionMappingFunction]);
    return (<div className={[
            'ds_site-search', ,
            className,
            hasAutocomplete ? 'ds_autocomplete' : undefined
        ].join(' ')} id={autocompleteId ? autocompleteId : undefined} ref={ref} {...props}>

            <form role="search" className="ds_site-search__form" method={method} action={action}>
                <label className="ds_label  visually-hidden" htmlFor={id} id={id + '-label'}>Search</label>

                {hasAutocomplete && (<div role="status" aria-live="polite" id="autocomplete-status" className="visually-hidden"></div>)}

                <div className="ds_input__wrapper  ds_input__wrapper--has-icon">
                    <input aria-autocomplete={hasAutocomplete ? 'list' : undefined} aria-owns={hasAutocomplete ? 'autocomplete-suggestions' : undefined} autoComplete={hasAutocomplete ? 'off' : undefined} className={[
            'ds_input',
            'ds_site-search__input',
            hasAutocomplete ? 'js-autocomplete-input' : undefined
        ].join(' ')} id={id} name={name} placeholder={placeholder} required spellCheck="false" type="search"/>

                    <Button_1.default type="submit" icon="Search" isIconOnly>Search</Button_1.default>

                    {hasAutocomplete && (<div id="autocomplete-suggestions" className="ds_autocomplete__suggestions">
                            <ol className="ds_autocomplete__suggestions-list" role="listbox" aria-labelledby="site-search-label"></ol>
                        </div>)}
                </div>
            </form>
        </div>);
};
SiteSearch.displayName = 'SiteSearch';
exports.default = SiteSearch;
