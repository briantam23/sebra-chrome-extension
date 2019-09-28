import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        width: '253px'
    },
    appBarContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '5px'
    },
    arrowIcon: {
        marginLeft: '10px',
        color: 'black',
        cursor: 'pointer'
    },
    header: {
        fontSize: '30px',
        fontWeight: 400,
        margin: '5px 0px 0px 15px',
        color: 'darkslateblue',
        alignSelf: 'center'
    },
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

const Faq = ({ history }) => {
    const classes = useStyles();
    
    const handleArrowBack = () => history.goBack();
    return(
        <div className={classes.mainContainer}>
            <div className={classes.appBarContainer}>
                <ArrowBackIcon onClick={ handleArrowBack } className={classes.arrowIcon}/>
            </div>
            <Typography variant="h2" className={classes.header}>FAQ</Typography>
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
        </div>
     )
}


export default Faq;