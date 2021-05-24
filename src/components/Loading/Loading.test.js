import { render } from '@testing-library/react';
import React from 'react';
import translationProperties from '../../helpers/testing/translationProperties';
import { Loading } from './Loading';

describe('When Loader is rendered', () => {
  test('it should render container div', () => {
    const { getByTestId, container } = render(
      <Loading loadingPoint={false} {...translationProperties} />
    );
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(container).not.toHaveTextContent('Cargando');
  });
  test('it should render loading text', () => {
    const { getByText } = render(
      <Loading loadingPoint={true} {...translationProperties} />
    );
    expect(getByText('Cargando')).toBeInTheDocument();
  });
});
