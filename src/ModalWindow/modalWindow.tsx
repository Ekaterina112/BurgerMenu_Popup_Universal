import React from 'react'
import s from './modalWindow.module.css'

type PropsType = {
    active: boolean;
    setActive: (active: boolean) => void
}
const ModalWindow: React.FC<PropsType> = ({active, setActive, children}) => {
    return (
        <div className={`${active ? s.modal + ' ' + s.active : s.modal}`} onClick={() => setActive(false)}>
            <div className={`${active ? s.modalContent + ' ' + s.activeContent : s.modalContent}`}
                 onClick={e => e.stopPropagation()}>
               {/* //place for form*/}
                {children}
            </div>
        </div>
    )

}
export default ModalWindow