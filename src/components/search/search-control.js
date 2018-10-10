import React from 'react';
import SearchView from './search-view';
import { withRouter } from 'react-router-dom';

class SearchControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		};

		this.onSearch = this.onSearch.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSearch(event) {
		this.props.history.push({
			pathname: '/search',
			search: '?query=' + encodeURI(this.state.query)
		});
	}

	onChange(event){
		this.setState({query: event.target.value})
	}

	render() {
		return <SearchView onSearch={this.onSearch} onChange={this.onChange} />;
	}
}

export default withRouter(SearchControl);
