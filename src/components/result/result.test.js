import React from 'react';
import { MemoryRouter } from 'react-router';
import App from '../app';
import renderer from 'react-test-renderer';

test('Result FAQ component renders', () => {
	global.fetch = jest.fn().mockImplementation(() => {
		var p = new Promise((resolve, reject) => {
			resolve({
				ok: true,
				status: 200,
				json: function() {
					return [];
				}
			});
		});

		return p;
	});

	const comp = renderer.create(
		<MemoryRouter initialEntries={['/search/faq?query=helloworld']}>
			<App />
		</MemoryRouter>
	);
	let tree = comp.toJSON();
	expect(tree).toMatchSnapshot();
});
