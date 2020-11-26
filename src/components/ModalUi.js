import React, { useEffect } from 'react';
import ReactDom from 'react-dom';

const portalRoot = document.getElementById('portal-root')


const ModalUi = ({ title, number, opening_hours, adress, open, onClose }) => {
    const overlayClick = () => onClose()
    const contentClick = e => e.stopPropagation()

    useEffect(() => {
        function onEsc(e) {
            if (e.keyCode === 27) onClose()
        }

        window.addEventListener('keydown', onEsc)

        return () => window.removeEventListener('keydown', onEsc)
      }, [onClose])
    

    if (!open) return null

    return ReactDom.createPortal(
        <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-blur" onClick={overlayClick}>
            <div className="bg-white w-96 h-auto mb-5 mx-1 p-5 rounded-lg shadow-lg flex flex-col justify-between" onClick={contentClick}>
                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <small>{number}</small>
                    <p className="text-gray-500 mt-3 text-sm sm:text-base">{adress}</p>
                </div>

                {opening_hours 
                    ? <span className="p-2 mt-5 bg-green-600 text-white text-center cursor-default text-sm sm:text-base">Aberto no momento</span>
                    : <span className="p-2 mt-5 bg-red-700 text-white text-center cursor-default text-sm sm:text-base">Fechado no momento</span>
                }
            </div>
        </div>,
        portalRoot
    )
}

export default ModalUi;