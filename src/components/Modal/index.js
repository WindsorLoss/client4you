import React from 'react'
import { ModalBox } from './styles'

export function Modal({ children, onClose, id = 'modal' }) {

    const handleOutsideClick = e => {
        if(e.target.id === id) onClose()
    }

    return (
        <ModalBox onClick={handleOutsideClick} id={id}>
            <div className='container'>
                <button className='close' onClick={onClose}/>
        
                <div className='content'>
                    {children}
                </div>

            </div>
        </ModalBox>
    )
}
