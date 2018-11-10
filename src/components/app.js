import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchControl from './search/search-control';
import Logo from './logo';
import ResultControl from './result/result-control';
import theme from './theme';
import styled from 'styled-components';

const StyledQuickLinks = styled.div`
	display: flex;
	position: relative;
	left: 50%;
`

const QuickLinks = ()=>(
	<StyledQuickLinks>
		<a href="/search/freefood">free food</a>
	</StyledQuickLinks>
)

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
		const response = await fetch('http://localhost:8081/home');
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
									<QuickLinks />
								</React.Fragment>
							)}
						/>
						<Route path="/search/:category" render={props => <ResultControl {...props} />} />
					</Switch>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;
