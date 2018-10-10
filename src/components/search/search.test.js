import React from 'react';
import SearchControl from './search-control';
import renderer from 'react-test-renderer';

test('Search component renders', () => {
    const comp = renderer.create(
        <SearchControl/>
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
});