import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchControl from './search/search-control';
import Logo from './logo';
import ResultControl from './result/result-control';
import theme from './theme';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			results: ''
		};

		this.callApi = this.callApi.bind(this);
	}

	async componentDidMount() {
		try {
			let res = await this.callApi();
			this.setState({ response: res.express });
		} catch (e) {
			console.log(e);
		}
	}

	async callApi() {
		const response = await fetch('/home');
		console.log(response);
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	}

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
