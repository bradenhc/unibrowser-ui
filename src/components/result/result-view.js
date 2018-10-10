import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import styles from './result-styles';
import SearchIcon from '@material-ui/icons/Search';

let ResultView = ({ classes, query }) => (
	<div className={classes.root}>
		<AppBar position="static">
			<Toolbar>
				<Typography className={classes.title} variant="h6" color="inherit" noWrap>
					Unibrowser
				</Typography>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
                        }}
                        value={query}
					/>
				</div>
				<div className={classes.grow} />
			</Toolbar>
		</AppBar>
	</div>
);

ResultView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultView);
