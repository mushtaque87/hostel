import React, { useState } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
// import location from '../../resources/assets/location.png'
// import facebookIcon from 'facebook.png'
import ModalView from '../ModalView'
import Location from '../Location'

const Footer = (props) => {
    const {  classes , rowIndex , iconpath = process.env.PUBLIC_URL + '/assets/' , modalstate } = props;
    const { footerDesign , contactUsDesign, locationDesign , locationButtonDesign , shareDesign} = classes;

    
    const [modalState, setModalState] = useState(false);

     const toggleLogOutModal = (event) => {
        event.preventDefault();
        setModalState(true);
    }

    const footer = (
      <div className={classNames('col-lg-auto',footerDesign)}>
        <div  key='contact' className = {classNames('col-md-auto',contactUsDesign)}> 
        <div style={{color: 'white' , fontFamily: 'Pacifico, cursive'}}><b>Contact Us:</b></div>
        <div>Gul Afroz:<b style={{color: 'white' , fontFamily: 'Josefin Sans, sans-serif'}} > 9937570544</b></div>
        <div>Gulam Farook:<b style={{color: 'white' , fontFamily: 'Josefin Sans, sans-serif'}}> 7077380540</b></div>
        </div>
        <div key='location' className = {classNames('col-md-auto',locationDesign)}>  
        <p>Location:</p>
        <button className = {classNames(locationButtonDesign)} ><img className = {classNames(locationButtonDesign)} src={iconpath+'location.png'} onClick = {toggleLogOutModal}/></button>
        </div>
        <div key='share' className = {classNames('col-md-auto',shareDesign)}>  
        <p>Share with Friends:</p>
        <button className = {classNames(locationButtonDesign)} ><img className = {classNames(locationButtonDesign)} src={iconpath + 'facebook.png'}/></button>
        </div>
      </div>
    );

    const map = (
        <Location/>
    )
    const showModal = (

         <ModalView modal = {modalState} view = {map}>

             </ModalView>

    )

    return <>
        {footer}
        {showModal}
    </>;


}

const jssStyles = {

    footerDesign: {
        display: 'flex',
        flexWrap: 'wrap',
        position : 'absolute',
        width: '100%',
        minHeight: '8%',
        backgroundColor:'lightgray',
        padding:'5px',
        right: 0,
        
        alignItems:'center',
    },
    contactUsDesign: {
        // display: 'flex',
        // flexWrap: 'wrap',
        minWidth: '50%',
        height: '99%',
        backgroundColor:'#1d3148',
        padding:'5px',
       color:'white'
    },
    locationDesign: {
        // display: 'flex',
        // flexWrap: 'wrap',
        maxWidth: '50%',
        minWidth: '25%',
        height: '99%',
        backgroundColor:'#4c5b77',
        padding:'5px',
        color:'white'
  
    },
    shareDesign: {
        // display: 'flex',
        // flexWrap: 'wrap',
        maxWidth: '50%',
        minWidth: '25%',
        height: '99%',
        backgroundColor:'#4c5b77',
        padding:'5px',
        color:'white'
  
    },
    locationButtonDesign: {
       width:'30px',
       height: '30px',
    },
    
    '@media (min-width: 768px) and (max-width: 1024px)': {
        footerDesign: {
         
            bottom: 0,
            
        },
    }
};

export default injectSheet(jssStyles)(Footer);