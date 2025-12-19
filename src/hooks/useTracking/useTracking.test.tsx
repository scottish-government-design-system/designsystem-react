
import { useState } from 'react';

import { test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import useTracking from './useTracking';

const Link = ({ children }: {
    children: React.ReactNode;
}) => <a href="#">{children}</a>;

const Links = () => {
    useTracking();
    const [links, setLinks] = useState<string[]>([]);

    const addNewLink = () => {
        setLinks((prev) => [...prev, 'Second link']);
    };

    return (
        <>
            {links.map((link, index) => (
                <Link key={`link-${index}`}>{link}</Link>
            ))}

            <button onClick={addNewLink}>
                Add
            </button>
        </>
    );
};

// basic test to verify the tracking script is having an effect
test('text tracking on component render', async () => {
    const SECTION_ONE_TEXT = 'Foo';
    const SECTION_TWO_TEXT = 'Bar';

    render(
        <>
            <h1>{SECTION_ONE_TEXT}</h1>
            <Link>First link</Link>
            <h1>{SECTION_TWO_TEXT}</h1>
            <Links />
        </>
    );

    const button = screen.getByRole('button');
    const firstLink = screen.getByText('First link');
    expect(firstLink).toHaveAttribute('data-section', SECTION_ONE_TEXT);

    fireEvent(
        button,
        new MouseEvent('click', new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    ));

    const secondLink = await screen.findByText('Second link')
    expect(secondLink).toHaveAttribute('data-section', SECTION_TWO_TEXT);
});
