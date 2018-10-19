import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import styles from './result-styles';
import eventsUtil from '../../util/events';
import HeaderView from './header-view';
import ListView from './list-view';
import DetailsView from './details-view';

class ResultView extends React.Component {
	constructor(props) {
		super(props);

		this.state = { search: this.props.query };

		this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onResultSelect = this.onResultSelect.bind(this);
	}

	onSearchQueryChange(event) {
		this.setState({ search: event.target.value });
	}

	onSearchSubmit(event) {
		eventsUtil.stop(event);
		this.props.onSearch(this.state.search);
	}

	onResultSelect(event, id) {
		eventsUtil.stop(event);
		this.props.onResultSelect(id);
	}

	render() {
		const { classes, results } = this.props;
		return (
			<div className={classes.root}>
				<HeaderView
					onSearchQueryChange={this.onSearchQueryChange}
					searchQuery={this.state.query}
					onSearchSubmit={this.onSearchSubmit}
				/>
				<Switch>
					<Route
						exact
						path="/search"
						render={props => <ListView {...props} results={results} onResultSelect={this.onResultSelect} />}
					/>
					<Route exact path="/search/results" render={props => <DetailsView {...props} />} />
				</Switch>
			</div>
		);
	}
}

ResultView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultView);
