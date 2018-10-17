import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import styles from './result-styles';
import SearchIcon from '@material-ui/icons/Search';
import eventsUtil from '../../util/events';

class ResultView extends React.Component {
	constructor(props) {
		super(props);

		this.state = { search: this.props.query };

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		this.setState({ search: event.target.value });
	}

	onSubmit(event) {
		eventsUtil.stop(event);
		this.props.onSearch(this.state.search);
	}

	render() {
		const { classes, results, onSearch } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography className={classes.title} variant="h6" color="inherit" noWrap>
							Unibrowser
						</Typography>
						<form className={classes.form} onSubmit={this.onSubmit}>
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder="Search Unibrowser..."
									classes={{ root: classes.inputRoot, input: classes.inputInput }}
									value={this.state.search}
									onChange={this.onChange}
								/>
							</div>
						</form>
						<div className={classes.grow} />
					</Toolbar>
				</AppBar>
				{!results
					? ''
					: results.map(result => (
							<div className={classes.result} key={result.type}>
								<Typography className={classes.resultHeader}>{result.heading}</Typography>
								<Typography className={classes.resultUrl}>
									<a href={result.url}>{result.url}</a>
								</Typography>
								<Typography className={classes.resultContents}>{result.content}</Typography>
							</div>
					  ))}
			</div>
		);
	}
}

ResultView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultView);
