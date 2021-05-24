import { render as originalRender } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

function render(ui, { state = {}, path = null, ...renderOptions } = {}) {
  const history = createMemoryHistory({ initialEntries: [path || '/'] });

  function Wrapper({ children }) {
    return <Router history={history}>{children}</Router>;
  }
  return {
    ...originalRender(ui, { wrapper: Wrapper, ...renderOptions }),
    history,
  };
}
// re-export everything
export * from '@testing-library/react';
// override render method
export { render as renderWithRouter };

