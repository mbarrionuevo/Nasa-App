import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

const customRender = (ui, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });

export * from '@testing-library/react';

export { customRender as render };
