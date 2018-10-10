import React from "react";
import SearchView from "./search-view";

class SearchControl extends React.Component {
	constructor(props) {
		super(props);

		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(event) {}

	render() {
		return <SearchView onSearch={this.onSearch} />;
	}
}

export default SearchControl;
