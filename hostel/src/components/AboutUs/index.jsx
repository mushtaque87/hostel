import React, { useState } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const AboutUs = (props) => {
    const {  classes } = props;
    const { aboutUsTitle } = classes;

    const aboutus = (
        <h3 id="auto-layout-col-sizing" class="Heading-styles-module--heading">
            <div class="Heading-styles-module--inner">
                <span class="Anchor-styles-module--wrapper">Information:
                </span>
                <br/>
                <p className={classNames(aboutUsTitle)}>Tember for girlsThe hostel is open from November for girlsThe hostel is open from November for girlsThe hostel is open from November for girls
                open from November for girlsThe hostel is open from November for girls </p>
            </div>
        </h3>
    );


    return <>
        {aboutus}
    </>;


}

const jssStyles = {

    aboutUsTitle: {
        width: '100%',
        height: 'auto',
        fontFamily: 'LatoRegular',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        overflow: 'hidden',
        color: '#425271',
        wordWrap: 'break-word',
        margin:'0 auto',
        padding:'5px',

    },
    
    '@media (max-width: 767px)': {

        notificationTitle: {
            height: '38px',
            fontSize: '10px',
        },
   
    },

    '@media (min-width: 768px) and (max-width: 1024px)': {
   
        notificationTitle: {
            height: '48px',
            fontSize: '12px',
        },
       
    }
};

export default injectSheet(jssStyles)(AboutUs);