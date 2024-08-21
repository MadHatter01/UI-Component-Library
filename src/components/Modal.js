import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom';

const Modal = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    const handleClose = () => {
        setModal(false)
    }
    return (
        <div>
            <button onClick={toggleModal} >Open Modal</button>

            {modal && (createPortal(
                <div className='modal-container'>


                    <div className='modal-content'>
                        I'm a modal dialog
                    </div>
                    <div className='modal-footer'>
                        <button className='closeBtn' onClick={handleClose}>Close</button>
                    </div>
                </div>,
                document.body
            )
            )}



        </div>
    )
}

export default Modal