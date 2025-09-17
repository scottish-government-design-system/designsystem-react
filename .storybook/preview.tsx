import type { Preview } from "@storybook/react-vite";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';

import '@scottish-government/design-system/dist/css/design-system.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },

        backgrounds: {
            grid: {
                cellSize: 8,
                opacity: 0.25,
                cellAmount: 8,
                offsetX: 30, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
                offsetY: 40, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
            },
        },

        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Controls />
                    <Stories />
                </>
            )
        },
    },
    tags: ['autodocs']
};

export default preview;
