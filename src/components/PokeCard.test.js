import { render, screen } from '@testing-library/react';
import PokeCard from './PokeCard';

test('renders a pokemon card', () => {
  const container = render(<PokeCard pokemon={['charizard', 'abomasnow']} />);
  expect(container).toMatchSnapshot();
});
