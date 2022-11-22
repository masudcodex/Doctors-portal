import React from 'react';

const ConfirmationModal = ({title, message, closeModal, successAction, modalData, successButtonName}) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4 text-error">{message}</p>
                <div className="modal-action">
                <label onClick={()=> successAction(modalData)} htmlFor="confirm-modal" className="btn btn-sm btn-error text-white">Delete</label>
                <button onClick={closeModal} className='btn btn-sm'>Cancel</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;