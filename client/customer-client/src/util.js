import React from 'react';

import ShareIcon from '@material-ui/icons/Share';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

import PoolIcon from '@material-ui/icons/Pool';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import StoreIcon from '@material-ui/icons/Store';
//import WebIcon from '@material-ui/icons/Web';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


export const handleCopyClick = () => {
    const copyText = document.getElementById('copyInput');

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand('copy');
}

export const getCategoryIcon = name => {
    let backgroundColor, iconComponent = null;

    if(name === 'Trending Sites') {
        backgroundColor = 'dodgerblue';
        iconComponent = <ShareIcon fontSize='inherit'/>;
    }
    else if(name === 'Money') {
        backgroundColor = 'mediumseagreen';
        iconComponent = <CreditCardIcon fontSize='inherit'/>;
    }
    else if(name === 'Productivity') {
        backgroundColor = 'lightcoral';
        iconComponent = <MailOutlineIcon fontSize='inherit'/>;
    }
    else if(name === 'Technology') {
        backgroundColor = 'gold';
        iconComponent = <SmartphoneIcon fontSize='inherit'/>;
    }

    return [backgroundColor, iconComponent];
}

export const searchCategories = (e, categories) => {
    if(e.target.value !== "") {
        return categories.filter(item => {
            const _item = item.toLowerCase();
            const searchStr = e.target.value.toLowerCase();

            return _item.includes(searchStr);
        })
    } 
    return categories;
}


export const getSiteIcon = name => {
    let backgroundColor, iconComponent, urlAddress = null;
    
    if(name === 'Digital Ocean') {
        backgroundColor = 'dodgerblue';
        iconComponent = <PoolIcon fontSize='inherit'/>;
        urlAddress = 'blog.digitalocean.com';
    }
    else if(name === 'Heap Analytics') {
        backgroundColor = 'mediumseagreen';
        iconComponent = <MultilineChartIcon fontSize='inherit'/>;
        urlAddress = 'heap.io/blog';
    }
    else if(name === 'Shopify') {
        backgroundColor = 'lightcoral';
        iconComponent = <StoreIcon fontSize='inherit'/>;
        urlAddress = 'shopify.com/blog';
    }
    /* else if(name === 'Heroku') {
        backgroundColor = 'gold';
        iconComponent = <WebIcon fontSize='inherit'/>;
        urlAddress = 'heroku.com';
    } */

    return [backgroundColor, iconComponent, urlAddress];
}

export const getShareIcon = name => {
    if(name === 'Facebook') return <FacebookIcon/>;
    else if(name === 'LinkedIn') return <LinkedInIcon/>;
    else if(name === 'Instagram') return <InstagramIcon/>;
}

export const faqList = [
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