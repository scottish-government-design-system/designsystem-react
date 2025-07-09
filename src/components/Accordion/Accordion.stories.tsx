import type { Meta, StoryObj } from '@storybook/react-vite';

import Accordion from './Accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    // subcomponents: { Accordion.Item },
    tags: ['autodocs'],
    argTypes: {
        headerLevel: {
            options: ['h2', 'h3', 'h4'],
            control: { type: 'select' },
            type: 'string'
        }
        // hideOpenAll: { control: 'boolean' }
    }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

function renderAccordionItem(args: any, content: React.ReactNode) {
    return (<Accordion.Item id={args.id} title={args.title} open={args.open}>
        {content}
    </Accordion.Item>);
}
const accordionItemContent1 = (
    <>
        <p>
            Veterans are entitled to the same healthcare as any citizen. And there are health care options and support available specifically for veterans.
        </p>
        <p>
            If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need.
        </p>
    </>
);
const accordionItemContent2 = (
    <>
        <p>
            If you're looking for a job, there are several organisations that can help you{' '}
            <a href="#accordion-link">
                find a job or develop new skills
            </a>
            .
        </p>
    </>
);
const accordionItemContent3 = (
    <>
        <p>
            If you need{' '}
            <a href="#accordion-link">
                help finding a place to live
            </a>
            {' '}there's support specifically for veterans.
        </p>
    </>
);

export const Default: Story = {
    render: (args) => (
        <Accordion {...args}>
            {renderAccordionItem(
                { id: 'accordion-1', title: 'Healthcare for veterans' },
                accordionItemContent1
            )}
            {renderAccordionItem(
                {id: 'accordion-2', title: 'Employability for veterans'},
                accordionItemContent2
            )}
            {renderAccordionItem(
                {id: 'accordion-3', title: 'Housing for veterans'},
                accordionItemContent3
            )}
        </Accordion>
    )
};

// export const OpenPanelOnLoad: Story = {
//     render: (args) => (
//         <Accordion id="accordion-example" {...args}>
//             {renderAccordionItem(
//                 { id: 'accordion-1', title: 'Healthcare for veterans', open: true },
//                 accordionItemContent1
//             )}
//             {renderAccordionItem(
//                 {id: 'accordion-2', title: 'Employability for veterans'},
//                 accordionItemContent2
//             )}
//             {renderAccordionItem(
//                 {id: 'accordion-3', title: 'Housing for veterans'},
//                 accordionItemContent3
//             )}
//         </Accordion>
//     )
// }

// export const HideOpenAll: Story = {
//     // args: {
//     //     hideOpenAll: true
//     // },

//     render: (args) => (
//         <Accordion id="accordion-example" {...args}>
//             {renderAccordionItem(
//                 { id: 'accordion-1', title: 'Healthcare for veterans' },
//                 accordionItemContent1
//             )}
//             {renderAccordionItem(
//                 {id: 'accordion-2', title: 'Employability for veterans'},
//                 accordionItemContent2
//             )}
//             {renderAccordionItem(
//                 {id: 'accordion-3', title: 'Housing for veterans'},
//                 accordionItemContent3
//             )}
//         </Accordion>
//     )
// }
