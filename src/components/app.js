import React from 'react';
import SearchControl from './search/search-control';
import Logo from './logo';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Logo height={300} />
				<SearchControl />
			</React.Fragment>
		);
	}
}

export default App;
