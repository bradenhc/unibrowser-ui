import React from 'react';
import ResultView from './result-view';
import querystring from 'query-string';
import mock from '../../model/results';

class ResultControl extends React.Component {
	constructor(props) {
		super(props);
		let search = querystring.parse(this.props.location.search);
		this.state = {
			query: search.query,
			category: search.cateogry
		}

		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	onSearchSubmit(query) {
		this.props.history.push({ pathname: '/search', search: '?query=' + encodeURI(query) });
	}

	render() {
		return <ResultView query={this.state.query} onSearch={this.onSearchSubmit} results={mock} />;
	}
}

export default ResultControl;
