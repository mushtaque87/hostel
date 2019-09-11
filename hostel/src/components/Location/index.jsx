import React, { useState } from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';

const Location = (props) => {

    const {  classes  , modal } = props;
     const { maindiv , mapViewDiv} = classes;

     const LocationTitleLabel = (
        <h3 id="auto-layout-col-sizing" class="Heading-styles-module--heading">
            <div class="Heading-styles-module--inner">
                <span class="Anchor-styles-module--wrapper" style={{color: '#4b5b77' , fontFamily: 'Pacifico, cursive'}}>Our Location:
                </span>
                <br/>
                </div>
        </h3>
    );

    const mapView = (
        <div className = {classNames(mapViewDiv)}>
            <div class="embed-responsive embed-responsive-4by3" style = {{width:'100%' , height:'250px'}}>
              <div id="map" class="embed-responsive-item">
               {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.2872556180057!2d83.06082430046428!3d20.994007998925582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU5JzM4LjQiTiA4M8KwMDMnNDEuMiJF!5e1!3m2!1sen!2sae!4v1566581633602!5m2!1sen!2sae" width="100" height="150" frameborder="0" ></iframe>  */}
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.9695761650046!2d83.05914211458723!3d20.995557894287607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2682debee8d069%3A0xb56ec38ebe514435!2sUnnamed%20Road%2C%20Padmapur%2C%20Odisha%20768036%2C%20India!5e0!3m2!1sen!2sae!4v1568189139737!5m2!1sen!2sae" width="250" height="250" frameborder="0"  allowfullscreen=""></iframe>
              </div>
          </div>
        </div>
    );

    return (
        <div className = {classNames(maindiv)}>
            {LocationTitleLabel}
            {mapView}
        </div>
    );

};

const jssStyles = {

    maindiv: {
        width: '100%',
        height: '250px',
        
    },

    mapViewDiv: {
        width: '100%',
        height: '250px',
        
    },

    '@media (max-width: 767px)': {
        maindiv: {
            width: '100%',
            height: '250px',
        }
    },

    '@media (min-width: 768px) and (max-width: 1024px)': {
        maindiv: {
            width: '100%',
            height: '250px',
        }
    }

};

export default injectSheet(jssStyles)(Location);
