import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchControl from './search-control';
import renderer from 'react-test-renderer';

test('Search component renders', () => {
	const comp = renderer.create(
		<BrowserRouter>
			<SearchControl />
		</BrowserRouter>
	);
	let tree = comp.toJSON();
	expect(tree).toMatchSnapshot();
});
