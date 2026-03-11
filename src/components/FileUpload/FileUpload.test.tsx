import { test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import FileUpload from './FileUpload';

test('file upload renders correctly', () => {
    const ID = 'my-file-upload'
    const LABEL_TEXT = 'Upload a file';

    render(
        <FileUpload data-testid="file-upload" id={ID} label={LABEL_TEXT} />
    );

    const fileUploadElement = screen.getByTestId('file-upload');
    const label = screen.getByText(LABEL_TEXT);
    const dropzoneButton = document.getElementById(ID + '-dropzone');
    const statusSpan = document.getElementById(ID + '-status');
    const commaSpan = document.getElementById(ID + '-comma');
    const buttonContainer = document.querySelector('.ds_file-upload__button-container');
    const pseudoButton = document.querySelector('.ds_file-upload__button');
    const instructionSpan = document.getElementById(ID + '-instruction');
    const fileInput = document.getElementById(ID);

    expect(fileUploadElement).toHaveClass('ds_file-upload');
    expect(fileUploadElement.tagName).toEqual('DIV');

    expect(label).toHaveClass('ds_label');
    expect(label).toHaveAttribute('for', ID);
    expect(label).toHaveAttribute('id', ID + '-label');
    expect(label.tagName).toEqual('LABEL');
    expect(label.textContent).toEqual(LABEL_TEXT);
    expect(label.parentElement).toEqual(fileUploadElement);

    expect(dropzoneButton).toHaveClass('ds_file-upload__dropzone');
    expect(dropzoneButton).toHaveAttribute('id', ID + '-dropzone');
    expect(dropzoneButton).toHaveAttribute('type', 'button');
    expect(dropzoneButton?.tagName).toEqual('BUTTON');
    expect(dropzoneButton).toHaveAttribute('aria-labelledby', `${label.id} ${commaSpan?.id} ${dropzoneButton?.id}`);
    expect(dropzoneButton?.parentElement).toEqual(fileUploadElement);
    expect(dropzoneButton?.previousElementSibling).toEqual(label);

    expect(statusSpan).toHaveClass('ds_file-upload__status');
    expect(statusSpan).toHaveAttribute('aria-live', 'polite');
    expect(statusSpan?.tagName).toEqual('SPAN');
    expect(statusSpan?.textContent).toEqual('No file chosen');
    expect(statusSpan?.parentElement).toEqual(dropzoneButton);

    expect(commaSpan).toHaveClass('visually-hidden');
    expect(commaSpan?.tagName).toEqual('SPAN');
    expect(commaSpan?.parentElement).toEqual(dropzoneButton);
    expect(commaSpan?.previousElementSibling).toEqual(statusSpan);

    expect(buttonContainer?.tagName).toEqual('SPAN');
    expect(buttonContainer?.parentElement).toEqual(dropzoneButton);
    expect(buttonContainer?.previousElementSibling).toEqual(commaSpan);

    expect(pseudoButton?.tagName).toEqual('SPAN');
    expect(pseudoButton?.textContent).toEqual('Choose file');
    expect(pseudoButton?.parentElement).toEqual(buttonContainer);

    expect(instructionSpan).toHaveClass('ds_file-upload__instruction');
    expect(instructionSpan?.tagName).toEqual('SPAN');
    expect(instructionSpan?.textContent).toEqual('or drag and drop file here');
    expect(instructionSpan?.parentElement).toEqual(buttonContainer);
    expect(instructionSpan?.previousElementSibling).toEqual(pseudoButton);

    expect(fileInput).not.toHaveAttribute('aria-describedby');
    expect(fileInput).toHaveAttribute('aria-hidden', 'true');
    expect(fileInput).toHaveClass('ds_file-upload__input');
    expect(fileInput).toHaveAttribute('hidden', 'true');
    expect(fileInput).toHaveAttribute('name', ID);
    expect(fileInput).toHaveAttribute('tabindex', '-1');
    expect(fileInput).toHaveAttribute('type', 'file');
});

test('multiple file upload', () => {
    const ID = 'my-file-upload'
    const LABEL_TEXT = 'Upload files';

    render(
        <FileUpload isMultiple data-testid="file-upload" id={ID} label={LABEL_TEXT} />
    );

    const label = screen.getByText(LABEL_TEXT);
    const statusSpan = document.getElementById(ID + '-status');
    const pseudoButton = document.querySelector('.ds_file-upload__button');
    const instructionSpan = document.getElementById(ID + '-instruction');
    const fileInput = document.getElementById(ID);

    expect(label.textContent).toEqual(LABEL_TEXT);
    expect(statusSpan?.textContent).toEqual('No files chosen');
    expect(pseudoButton?.textContent).toEqual('Choose files');
    expect(instructionSpan?.textContent).toEqual('or drag and drop files here');
    expect(fileInput).toHaveAttribute('multiple');
});

test('with hint text', () => {
    const ID = 'my-file-upload'
    const LABEL_TEXT = 'Upload files';
    const HINT_TEXT = 'My hint text'

    render(
        <FileUpload hintText={HINT_TEXT} data-testid="file-upload" id={ID} label={LABEL_TEXT} />
    );

    const label = screen.getByText(LABEL_TEXT);
    const hintText = document.getElementById('hint-text-' + ID);

    expect(hintText).toBeInTheDocument();
    expect(hintText).toHaveClass('ds_hint-text');
    expect(hintText?.textContent).toEqual(HINT_TEXT);
    expect(hintText?.previousElementSibling).toEqual(label);
});

test('with error text', () => {
    const ID = 'my-file-upload'
    const LABEL_TEXT = 'Upload files';
    const ERROR_TEXT = 'My error text'

    render(
        <FileUpload errorMessage={ERROR_TEXT} hasError data-testid="file-upload" id={ID} label={LABEL_TEXT} />
    );

    const label = screen.getByText(LABEL_TEXT);
    const errorText = document.getElementById('error-message-' + ID);

    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveClass('ds_question__error-message');
    expect(errorText?.textContent).toEqual(ERROR_TEXT);
    expect(errorText?.previousElementSibling).toEqual(label);
});
