import React from 'react';
import { MemoryRouter } from 'react-router';
import App from '../app';
import { mount } from 'enzyme';
import ListView from './list-view';
import ProfessorView from './details/professor-view';
import FaqView from './details/faq-view';

beforeEach(() => {
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
});

test('Result FAQ component renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/faq?query=helloworld']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(ListView)).toHaveLength(1);
});

test('Result Professor component renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/professors?query=helloworld']}>
			<App />
		</MemoryRouter>
	);

	expect(wrapper.find(ListView)).toHaveLength(1);
});

test('Professor details view renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/professors/results/0']}>
			<App />
		</MemoryRouter>
	);

	expect(wrapper.find(ProfessorView)).toHaveLength(1);
});

test('FAQ details view renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/faq/results/0']}>
			<App />
		</MemoryRouter>
	);

	expect(wrapper.find(FaqView)).toHaveLength(1);
});
