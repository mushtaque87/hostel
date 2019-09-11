import React, { useState } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

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
        minWidth: '130px',
        maxWidth:'200px',
        height: '200px',
        backgroundColor:'#4f9c8a',
        padding:'5px',
        margin:'15px',
        borderRadius:'5px',
    },

    imageDesign: {
        width: '100%',
        height: '100%',
    },
    

    '@media (min-width: 168px) and (max-width: 768px)': {
    
        cellDesign: {
            minWidth:'90%',
            maxWidth:'auto !important',
        },
       
    }
};

export default injectSheet(jssStyles)(GalleryImage);