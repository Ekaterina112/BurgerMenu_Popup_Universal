import React, {useState} from 'react';
import './App.css';
import Menu from './BurgerMenu/menu';
import ModalWindow from './ModalWindow/modalWindow';

export type ItemType = {
    value: string,
    href: string
}

function App() {
    const [menuActive, setMenuActive] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const items: Array<ItemType> = [
        {value: 'First Point', href: '/one'},
        {value: 'Second Point', href: '/two'},
        {value: 'Third Point', href: '/three'},
        {value: 'Fourth Point', href: '/four'},
        {value: 'Fifth Point', href: '/five'}]
    return (
        <div className="App">
            <nav>
                <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
            </nav>
            <main>
                <button className='modal-window-button' onClick={() => {
                    setModalActive(true)
                }}>Open Modal Window
                </button>
                <ModalWindow active={modalActive} setActive={setModalActive}>
                    <h4>HI, Guys!</h4>
                </ModalWindow>
            </main>
            <Menu items={items} header={'Menu'} active={menuActive} setActive={setMenuActive}/>

        </div>
    );
}

export default App;
