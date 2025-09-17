import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Metadata from './PageMetadata';

const NAME = 'Directorate';
const VALUE = 'Equality, Inclusion and Human Rights Directorate';

test('metadata renders correctly', () => {
    render(
        <Metadata>
            <Metadata.Item name={NAME}>
                {VALUE}
            </Metadata.Item>
        </Metadata>
    );

    const metadata = document.querySelector('.ds_metadata');
    const metadataItem = document.querySelector('.ds_metadata__item');
    const metadataItemKey = screen.getByRole('term');
    const metadataItemValue = screen.getByRole('definition');

    expect(metadata).toBeInTheDocument();
    expect(metadataItem).toBeInTheDocument();
    expect(metadataItemKey).toHaveClass('ds_metadata__key');
    expect(metadataItemKey.textContent).toEqual(NAME);
    expect(metadataItemValue).toHaveClass('ds_metadata__value');
    expect(metadataItemValue.textContent.trim()).toEqual(VALUE);
});

test('inline metadata', () => {
    render(
        <Metadata isInline>
            <Metadata.Item name={NAME}>
                {VALUE}
            </Metadata.Item>
        </Metadata>
    );

    const metadata = document.querySelector('.ds_metadata');
    expect(metadata).toHaveClass('ds_metadata--inline');
});

test('passing additional props', () => {
    render(
        <Metadata data-test="foo">
            <Metadata.Item data-test="bar" name="Last updated">
                21/04/2020
            </Metadata.Item>
        </Metadata>
    )

    const metadata = document.querySelector('.ds_metadata') as HTMLElement;
    const metadataItem = document.querySelector('.ds_metadata__item') as HTMLElement;
    expect(metadata?.dataset.test).toEqual('foo');
    expect(metadataItem?.dataset.test).toEqual('bar');
});

test('passing additional CSS classes', () => {
    render(
        <Metadata className="foo">
            <Metadata.Item className="bar" name="Last updated">
                21/04/2020
            </Metadata.Item>
        </Metadata>
    )

    const metadata = document.querySelector('.ds_metadata');
    const metadataItem = document.querySelector('.ds_metadata__item');
    expect(metadata).toHaveClass('foo');
    expect(metadataItem).toHaveClass('bar');
});
