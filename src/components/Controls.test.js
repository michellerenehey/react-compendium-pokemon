import { render, screen } from '@testing-library/react';
import Controls from './PokeCard';

test.skip('renders a control panel', () => {
  const container = render(<Controls 
    query,
  setQuery,
  setLoading,
  order,
  setOrder,
  types,
  selectedType,
  setSelectedType, />);
  expect(container).toMatchSnapshot();
});
