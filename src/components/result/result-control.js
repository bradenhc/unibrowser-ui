import React from 'react';
import ResultView from './result-view';
import querystring from 'query-string';

class ResultControl extends React.Component {
	constructor(props) {
		super(props);
		let query = querystring.parse(this.props.location.search);
		this.state = { ...query };

		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	onSearchSubmit(query) {
		this.props.history.push({ pathname: '/search', search: '?query=' + encodeURI(query) });
	}

	render() {
		return <ResultView query={this.state.query} onSearch={this.onSearchSubmit} results={[]} />;
	}
}

export default ResultControl;
