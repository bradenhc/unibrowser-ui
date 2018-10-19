import React from 'react';
import { MemoryRouter } from 'react-router';
import SearchControl from './search-control';
import renderer from 'react-test-renderer';

test('Search component renders', () => {
	const comp = renderer.create(
		<MemoryRouter initialEntries={['/']}>
			<SearchControl />
		</MemoryRouter>
	);
	let tree = comp.toJSON();
	expect(tree).toMatchSnapshot();
});
