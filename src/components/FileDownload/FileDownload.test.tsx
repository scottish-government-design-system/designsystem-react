import { test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import FileDownload from './FileDownload';

const FILE_TITLE = 'Scotland\'s Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive';
const FILE_URL = 'my-file.file';

test('inset text renders correctly', () => {
    render(
        <FileDownload fileUrl={FILE_URL} title={FILE_TITLE} data-testid="file-download" />
    );

    const fileDownload = screen.getByTestId('file-download');

    const thumbnailImage = screen.getByRole('img', {hidden: true});
    const thumbnailLink = thumbnailImage.parentElement;
    const thumbnailContainer = thumbnailLink?.parentElement;

    const fileLink = screen.getByRole('link');
    const contentContainer = fileLink.parentElement;

    expect(thumbnailImage).toHaveClass('ds_file-download__thumbnail-image');
    expect(thumbnailImage).toHaveAttribute('aria-label', '');
    expect(thumbnailImage.tagName).toEqual('svg');

    expect(thumbnailLink).toHaveClass('ds_file-download__thumbnail-link');
    expect(thumbnailLink).toHaveAttribute('aria-hidden', 'true');
    expect(thumbnailLink).toHaveAttribute('tabindex', '-1');
    expect(thumbnailLink).toHaveAttribute('href', FILE_URL);
    expect(thumbnailLink?.tagName).toEqual('A');

    expect(thumbnailContainer).toHaveClass('ds_file-download__thumbnail');
    expect(thumbnailContainer?.tagName).toEqual('DIV');
    expect(thumbnailContainer?.parentElement).toEqual(fileDownload);

    expect(contentContainer).toHaveClass('ds_file-download__content');
    expect(contentContainer?.tagName).toEqual('DIV');
    expect(contentContainer?.parentElement).toEqual(fileDownload);

    expect(fileLink).toHaveClass('ds_file-download__title');
    expect(fileLink).toHaveAttribute('href', FILE_URL);
    expect(fileLink?.tagName).toEqual('A');
    expect(fileLink?.textContent).toEqual(FILE_TITLE);
});

test('highlighted file download', () => {
    render(
        <FileDownload isHighlighted fileUrl={FILE_URL} title={FILE_TITLE} data-testid="file-download" />
    );

    const fileDownload = screen.getByTestId('file-download');

    expect(fileDownload).toHaveClass('ds_file-download--highlighted');
});

// test('file download with specific icon', () => {

// });

test('file download with cover image', () => {
    const COVER_URL = 'my-image.png';

    render(
        <FileDownload cover={COVER_URL} fileUrl={FILE_URL} title={FILE_TITLE} data-testid="file-download" />
    );

    const thumbnailImage = screen.getByRole('presentation', {hidden: true});

    expect(thumbnailImage).toHaveClass('ds_file-download__thumbnail-image');
    expect(thumbnailImage).toHaveAttribute('alt', '');
    expect(thumbnailImage).toHaveAttribute('src', COVER_URL);
    expect(thumbnailImage.tagName).toEqual('IMG');
});

test('file download with file size', () => {
    const FILE_SIZE = '1.2 MB';

    render(
        <FileDownload fileSize={FILE_SIZE} fileUrl={FILE_URL} title={FILE_TITLE} data-testid="file-download" />
    );

    const metadataKey = screen.getByRole('term');
    const metadataValue = screen.getByRole('definition');
    const metadataItem = metadataKey.parentElement;
    const metadataList = metadataItem?.parentElement;
    const downloadDetails = metadataList?.parentElement;

    expect(downloadDetails).toHaveClass('ds_file-download__details');
    expect(downloadDetails?.tagName).toEqual('DIV');

    expect(metadataList).toHaveClass('ds_metadata', 'ds_metadata--inline');
    expect(metadataList?.tagName).toEqual('DL');

    expect(metadataItem).toHaveClass('ds_metadata__item');
    expect(metadataItem?.tagName).toEqual('DIV');

    expect(metadataKey).toHaveClass('ds_metadata__key', 'visually-hidden');
    expect(metadataKey.textContent).toEqual('File size');

    expect(metadataValue).toHaveClass('ds_metadata__value');
    expect(metadataValue.textContent).toEqual(FILE_SIZE);
    expect(metadataValue.previousElementSibling).toEqual(metadataKey);
});

test('file download with file type', () => {
    const FILE_TYPE = '5 page PDF';

    render(
        <FileDownload fileType={FILE_TYPE} fileUrl={FILE_URL} title={FILE_TITLE} data-testid="file-download" />
    );

    const metadataKey = screen.getByRole('term');
    const metadataValue = screen.getByRole('definition');
    const metadataItem = metadataKey.parentElement;
    const metadataList = metadataItem?.parentElement;
    const downloadDetails = metadataList?.parentElement;

    expect(downloadDetails).toHaveClass('ds_file-download__details');
    expect(downloadDetails?.tagName).toEqual('DIV');

    expect(metadataList).toHaveClass('ds_metadata', 'ds_metadata--inline');
    expect(metadataList?.tagName).toEqual('DL');

    expect(metadataItem).toHaveClass('ds_metadata__item');
    expect(metadataItem?.tagName).toEqual('DIV');

    expect(metadataKey).toHaveClass('ds_metadata__key', 'visually-hidden');
    expect(metadataKey.textContent).toEqual('File type');

    expect(metadataValue).toHaveClass('ds_metadata__value');
    expect(metadataValue.textContent).toEqual(FILE_TYPE + ',');
    expect(metadataValue.previousElementSibling).toEqual(metadataKey);
});

test('association of metadata with file link', () => {
    const FILE_SIZE = '1.2 MB';

    render(
        <FileDownload fileSize={FILE_SIZE} fileUrl={FILE_URL} title={FILE_TITLE} data-testid="file-download" />
    );

    const fileLink = screen.getByRole('link');
    const metadataKey = screen.getByRole('term');
    const metadataItem = metadataKey.parentElement;
    const metadataList = metadataItem?.parentElement;
    const downloadDetails = metadataList?.parentElement;

    expect(fileLink).toHaveAttribute('aria-describedby', downloadDetails?.id);
});

test('passing additional props', () => {
    render(
        <FileDownload fileUrl={FILE_URL} title={FILE_TITLE} data-testid="file-download" data-test="foo" />
    );

    const fileDownload = screen.getByTestId('file-download');
    expect(fileDownload?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <FileDownload fileUrl={FILE_URL} title={FILE_TITLE} data-testid="file-download" className="foo" />
    );

    const fileDownload = screen.getByTestId('file-download');
    expect(fileDownload).toHaveClass('foo');
});
