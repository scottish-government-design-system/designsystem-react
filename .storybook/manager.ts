import { addons } from 'storybook/manager-api';
import capitalize from "lodash/capitalize";

import sgdsTheme from './sgdsTheme';

addons.setConfig({
    theme: sgdsTheme,
    sidebar: {
        renderLabel: ({ name, type }) => {
            return capitalize(name);
        }
    }
});
