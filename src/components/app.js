import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchControl from './search/search-control';
import Logo from './logo';
import ResultControl from './result/result-control';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={props => (
							<React.Fragment>
								<Logo height={300} />
								<SearchControl {...props} />
							</React.Fragment>
						)}
					/>
					<Route path="/search" component={ResultControl} />
				</Switch>
			</Router>
		);
	}
}

export default App;
