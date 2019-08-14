import React, { useState } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
// import location from '../../resources/assets/location.png'
// import facebookIcon from 'facebook.png'

const Footer = (props) => {
    const {  classes , rowIndex , iconpath = process.env.PUBLIC_URL + '/assets/'} = props;
    const { footerDesign , contactUsDesign, locationDesign , locationButtonDesign} = classes;

    const footer = (
      <div className={classNames('col-lg-auto',footerDesign)}>
        <div  key='contact' className = {classNames('col-md-auto',contactUsDesign)}> 
        <div>Contact Us:</div>
        <div>Gul Afroz:+9825126612612</div>
        <div>Gulam Farook:+9825126612612</div>
        </div>
        <div key='location' className = {classNames('col-md-auto',locationDesign)}>  
        <p>Location:</p>
        <button className = {classNames(locationButtonDesign)} ><img className = {classNames(locationButtonDesign)} src={iconpath+'location.png'}/></button>
        </div>
        <div key='share' className = {classNames('col-md-auto',locationDesign)}>  
        <p>Share with Friends:</p>
        <button className = {classNames(locationButtonDesign)} ><img className = {classNames(locationButtonDesign)} src={iconpath + 'facebook.png'}/></button>
        </div>
      </div>
    );


    return <>
        {footer}
    </>;


}

const jssStyles = {

    footerDesign: {
        display: 'flex',
        flexWrap: 'wrap',
        position : 'fixed',
        width: '100%',
        minHeight: '8%',
        backgroundColor:'lightgray',
        padding:'5px',
        right: 0,
        bottom: 0,
        alignItems:'center',
    },
    contactUsDesign: {
        // display: 'flex',
        // flexWrap: 'wrap',
        minWidth: '50%',
        height: '99%',
        backgroundColor:'#ffabb3',
        padding:'5px',
       color:'white'
    },
    locationDesign: {
        // display: 'flex',
        // flexWrap: 'wrap',
        maxWidth: '50%',
        minWidth: '25%',
        height: '99%',
        backgroundColor:'#eca6ff',
        padding:'5px',
        color:'white'
  
    },
    locationButtonDesign: {
       width:'30px',
       height: '30px',
    },
};

export default injectSheet(jssStyles)(Footer);