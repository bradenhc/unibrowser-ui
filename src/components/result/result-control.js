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
			category: this.props.match.params.category,
			results: []
		};

		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onResultSelect = this.onResultSelect.bind(this);
		this.retrieveSearchResults = this.retrieveSearchResults.bind(this);
	}

	async componentDidMount(){
		let results = await this.retrieveSearchResults(this.state.query);
		this.setState({results: results});
	}

	async retrieveSearchResults(query){
		return mock;
	}

	onSearchSubmit(query) {
		this.props.history.push({
			pathname: `/search/${this.props.match.params.category}`,
			search: '?query=' + encodeURI(query)
		});
	}

	onResultSelect(id) {
		this.props.history.push({
			pathname: `/search/${this.props.match.params.category}/results/${id}`
		})
	}

	render() {
		return (
			<ResultView
				query={this.state.query}
				category={this.state.category}
				onSearch={this.onSearchSubmit}
				onResultSelect={this.onResultSelect}
				results={this.state.results}
			/>
		);
	}
}

export default ResultControl;
