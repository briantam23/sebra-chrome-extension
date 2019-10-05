import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { faqList } from '../../../util';


const useStyles = makeStyles(theme => ({
    bodyContainer: {
        width: '227px',
        margin: '15px 0px 0px 12px'
    }
}));


const Faq = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.bodyContainer}>
        {
            faqList.map((faqItem, idx) => (
                <Typography variant="body2" gutterBottom key={ idx }>
                    <strong>{ faqItem.question }</strong><br/>
                    { faqItem.answer }
                </Typography>
            ))
        }
        </div>
     )
}


export default Faq;