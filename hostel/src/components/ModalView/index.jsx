import React, { useState } from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
const ModalView = (props) => {

    const {  classes  , modal , view } = props;
     const { modalDialog, modalBody, modalButton, modalFooter, modalLogOutBtn, modalCancelBtn } = classes;

    const  toggleLogOutModal = () => {
        
    }

    const modalView = (
        modal ? 
        <Modal isOpen={modal} toggle={toggleLogOutModal} classNames = {classNames(modalDialog)}> 

        {view}
        </Modal>  : null
    );

    return (
        <>
            {modalView}
        </>
    );

};

const jssStyles = {

    modalDialog: {
        width: '600px',
        height: '450px',
    },
    modalBody: {
        color: '#848fa3',
        fontSize: '18px',
        textAlign: 'center',
        padding: '3rem 2rem',
        fontFamily: 'LatoRegular',
    },
    modalFooter: {
        padding: 10,
        '& :not(:last-child)' : {
            borderRight: '1px solid #eee',
        }
    },
    modalButton: {
        flex: '50%',
        textAlign: 'center',
        padding: '0.65rem',
    },
    modalCancelBtn: {
        color: '#000000',
        fontSize: '16px',
        fontFamily: 'LatoRegular',
    },
    modalLogOutBtn: {
        color: '#ff4671 !important',
        fontSize: '16px',
        fontFamily: 'LatoBold',
    },

    '@media (max-width: 767px)': {
        maindiv: {
            width: '179px',
            height: '292px',
        }
    },

    '@media (min-width: 768px) and (max-width: 1024px)': {
        maindiv: {
            width: '279px',
            height: '392px',
        }
    }

};

export default injectSheet(jssStyles)(ModalView);