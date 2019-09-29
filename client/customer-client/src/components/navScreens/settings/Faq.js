import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    bodyContainer: {
        width: '227px',
        margin: '15px 0px 0px 12px'
    }
}));

const faqList = [
    {
        question: 'Dicunt cotidieque comprehensam?',
        answer: 'Cu sit, mei purto docendi ea, ubique graeci scripserit qui cu.'
    },
    {
        question: 'Lorem ipsum dolor sit amet?',
        answer: 'Quos blanditiis tenetur suscipit, quam beatae rerum inventore.'
    },
    {
        question: 'Est et interesset?',
        answer: 'Intellegebat, ex eum odio adipisci incorrupte.'
    }
]

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