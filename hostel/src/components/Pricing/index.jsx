import React, { useState } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';


const Pricing = (props) => {
    const {  classes , roomImageurl } = props;
    const { galleryTableDesign  } = classes;

    const galleryTitleLabel = (
        <h3 id="auto-layout-col-sizing" class="Heading-styles-module--heading">
            <div class="Heading-styles-module--inner">
                <span class="Anchor-styles-module--wrapper">Picture Gallery:
                </span>
                <br/>
                </div>
        </h3>
    );


    return <div class='row-md-auto'>
       
    </div>;


}

const jssStyles = {

    galleryTitle: {
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


    galleryTableDesign: {
        display : 'flex',
        alignItems:'center',
    },

    '@media (max-width: 767px)': {

    },

    '@media (min-width: 768px) and (max-width: 1024px)': {
   

       
    }
};

export default injectSheet(jssStyles)(Pricing);