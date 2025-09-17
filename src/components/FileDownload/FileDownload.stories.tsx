import type { Meta, StoryObj } from '@storybook/react-vite';

import FileDownload from './FileDownload';

const meta = {
    title: 'Components/File download',
    component: FileDownload,
    argTypes: {
        cover: {
            description: 'URL of a custom cover image',
            type: 'string'
        },
        fileSize: {
            description: 'Description of the file size',
            type: 'string'
        },
        fileType: {
            description: 'A description of the file type',
            type: 'string'
        },
        fileUrl: {
            description: 'The URL of the file to download',
            type: 'string'
        },
        icon: {
            options: ['Audio','Csv','Excel','File','Generic','Geodata','Ical','Ico','Image','Odf','Odg','Odp','Ods','Odt','Pdf','Ppt','Rtf','Text','Video','Word','Xml','Zip'],
            control: { type: 'select' },
            type: 'string'
        },
        isHighlighted: {
            control: 'boolean',
            description: 'Add a highlight to the file download'
        },
        title: {
            description: 'The document title, used in the link text',
            type: {
                name: 'string',
                required: true
            }
        }
    },
    args: {
        fileUrl: '#',
        title: 'My file',
        icon: 'Pdf',
        fileSize: '1.2MB',
        fileType: '6 page PDF'
    }
} satisfies Meta<typeof FileDownload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const Highlighted: Story = {
    args: {
        isHighlighted: true
    }
};

export const CoverImage: Story = {
    args: {
        cover: 'static/images/highland-cow.jpg'
    }
};

export const NoMetadata: Story = {
    args: {
        fileSize: undefined,
        fileType: undefined
    }
};
