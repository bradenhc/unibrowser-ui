import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchControl from './search/search-control';
import Logo from './logo';
import ResultControl from './result/result-control';
import theme from './theme';

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<React.Fragment>
									<Logo />
									<SearchControl {...props} />
								</React.Fragment>
							)}
						/>
						<Route path="/search" component={ResultControl} />
					</Switch>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;
