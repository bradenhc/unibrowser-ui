import React from 'react';
import eventUtils from '../../util/events';
import styles from './search-styles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TextField from '@material-ui/core/TextField';

let Search = ({ onSearch, onChange, classes }) => {
	return (
		<form className={classes.form} autoComplete="off" onSubmit={event => onSearch(eventUtils.stop(event))}>
			<div className={classes.margin}>
				<Grid container spacing={8} alignItems="center" justify="center">
					<Grid className={classes.searchIcon} item>
						<SearchOutlinedIcon />
					</Grid>
					<Grid item className={classes.searchGrid}>
						<TextField
							className={classes.search}
							id="unibrowser-search"
							label="Search Unibrowser"
							type="search"
							margin="none"
							variant="outlined"
							onChange={onChange}
						/>
					</Grid>
				</Grid>
			</div>
		</form>
	);
};

export default withStyles(styles)(Search);
