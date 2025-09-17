import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
    cleanup();
});

// mock CSS.supports()
window.global ||= window;
Object.defineProperty(global.CSS, 'supports', {
    value: () => vi.fn()
});
