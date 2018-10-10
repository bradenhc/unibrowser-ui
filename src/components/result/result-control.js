import React from 'react';
import ResultView from './result-view';
import querystring from 'query-string';

class ResultControl extends React.Component {
	constructor(props) {
        super(props);
        let query = querystring.parse(this.props.location.search);
        this.state = {...query}
	}

	render() {
		return <ResultView query={this.state.query}/>;
	}
}

export default ResultControl;
