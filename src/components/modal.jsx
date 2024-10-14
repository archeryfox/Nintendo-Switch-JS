import React from "react";

const Modal = ({ content, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white text-black p-6 rounded shadow-lg max-w-lg w-full">
                <p>{content}</p>
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
            </div>
        </div>
    );
};

export default Modal;