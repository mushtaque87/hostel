import React, { useState } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import room1 from '../../resources/assets/room-1-1.jpg'
const GalleryImage = (props) => {
    const {  classes , rowIndex  , imagePath =  process.env.PUBLIC_URL + '/assets/'} = props;
    const { cellDesign, imageDesign } = classes;

    const image = (
      <div key = '${rowIndex}' className={classNames('col-md-auto',cellDesign)}>
          { <img className={classNames(imageDesign)} src = {imagePath + `${rowIndex}`} alt = 'No Image'/> }
      </div>
    );


    return <>
        {image}
    </>;


}

const jssStyles = {

    cellDesign: {
        width: '200px',
        height: '200px',
        backgroundColor:'#f25060',
        padding:'5px',
        margin:'15px',
        borderRadius:'10px',
    },

    imageDesign: {
        width: '100%',
        height: '100%',
    },
    
    '@media (max-width: 767px)': {
  
    
    },

    '@media (min-width: 768px) and (max-width: 1024px)': {
    
      
       
    }
};

export default injectSheet(jssStyles)(GalleryImage);