import React, { useState } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const AboutUs = (props) => {
    const {  classes } = props;
    const { aboutUsTitle } = classes;

    const aboutus = (
        <h3 id="auto-layout-col-sizing" class="Heading-styles-module--heading">
            <div class="Heading-styles-module--inner">
            <br/>
                <span class="Anchor-styles-module--wrapper" style={{color: '#4b5b77' , fontFamily: 'Pacifico, cursive'}}>Information:
                </span>
                <br/>
                <p className={classNames(aboutUsTitle)}><b style={{color: '#fc6288' , fontFamily: 'Satisfy, cursive'}} >New HomeStay</b> is now open for all the working ladies and students in the city. 
                It is situated in the heart of Padampur district, with close proximity to the main market, close to
                the city hospital and just <b>1.4 Km</b> away from Colleges and Schools.<br></br> <br></br>The Hostel has <b>3, 4, 5 </b> sharing comfortable spacious rooms with good lighting.
                The Hostel provides all major amenities from <b>TV, washing machine and cooking range</b>. Each rooms has a bed, cupboard and other necessary items for a comfortable stay.
                <br></br> <br></br>
                The rooms can be be shared in monthly, 6 months or yearly basis. Its <b>SAFE</b> for womens as its located inside a compound with security cameras.
                <br></br> <br></br> <b> Contact the hostel warden for visiting, pricing and renting the rooms.<br></br><br></br><b style={{color: '#ff4343' }}> First come First Serve basis.</b> </b>
                </p>
                
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
        fontFamily: 'Crimson Pro, serif',
        fontSize: '17px',
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