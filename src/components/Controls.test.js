import { render, screen } from '@testing-library/react';
import Controls from './Controls';

test('renders a control panel', () => {
  const container = render(
    <Controls
      query="ab"
      setQuery="ab"
      setLoading="false"
      order="asc"
      setOrder="asc"
      types={['fairy']}
      selectedType="fairy"
      setSelectedType="fairy"
    />
  );
  expect(container).toMatchSnapshot();
});
