import React, { useState } from 'react';
import ResultsAppBar from './ResultsAppBar';
import ResultList from './ResultList';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        width: '253px'
    },
    header: {
        fontSize: '20px',
        fontWeight: 500,
        margin: '5px 0px 2px 15px',
        color: 'darkslateblue',
    }
}));

const resultArr = ['Digital Ocean', 'Heap Analytics', 'Shopify'/* , 'Heroku' */];

const SiteResults = () => {
    const classes = useStyles();

    const [results, setResults] = useState(resultArr);
    const [selectedIdx, setSelectedIdx] = useState(null);

    const handleListItemClick = (e, idx) => setSelectedIdx(idx);
    const handleDeleteClick = (e, idx) => {
        setResults(results.filter((result, idx) => idx !== selectedIdx));
    }

    return(
        <div className={classes.mainContainer}>
            <ResultsAppBar handleDeleteClick={ handleDeleteClick }/>
            <Typography variant="h2" className={classes.header}>Technology</Typography>
            <ResultList 
                results={ results }
                selectedIdx={ selectedIdx }
                handleListItemClick={ handleListItemClick }
            />
        </div>
    )
}


export default SiteResults;