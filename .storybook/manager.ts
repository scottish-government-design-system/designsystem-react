import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import capitalize from "lodash/capitalize";

addons.setConfig({
    theme: themes.light,
    sidebar: {
        renderLabel: ({ name, type }) => {
            return capitalize(name);
        }
    }
});
