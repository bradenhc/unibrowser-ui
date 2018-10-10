import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultControl from './result-control';
import renderer from 'react-test-renderer';

test('Search component renders', () => {
	const comp = renderer.create(
		<BrowserRouter>
			<ResultControl location={{search: 'test'}} />
		</BrowserRouter>
	);
	let tree = comp.toJSON();
	expect(tree).toMatchSnapshot();
});
