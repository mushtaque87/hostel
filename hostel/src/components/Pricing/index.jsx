import React, { useState } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import helper from '../../service/helper';
import PriceTable from '../PriceTable';


const Pricing = (props) => {
    const {  classes , roomImageurl } = props;
    const { galleryTableDesign  } = classes;

   
    const fetchPrice = () => {
        helper.readPriceFile()
    };

    const pricingTitleLabel = (
        <h3 id="auto-layout-col-sizing" class="Heading-styles-module--heading">
            <div class="Heading-styles-module--inner">
                <span class="Anchor-styles-module--wrapper">Pricing:
                </span>
                <br/>
                </div>
        </h3>
    );


    return <div  className={classNames('row-md-auto')}>
       {pricingTitleLabel}
       <div  className={galleryTableDesign}>
           <PriceTable/>
    </div>
    </div>;


}

const jssStyles = {

    galleryTableDesign: {
        maxWidth:'100%',
        height:'250px',
        backgroundColor:'red',
        display : 'flex',
        alignItems:'center',
    },

    '@media (max-width: 767px)': {

    },

    '@media (min-width: 768px) and (max-width: 1024px)': {
   

       
    }
};

export default injectSheet(jssStyles)(Pricing);