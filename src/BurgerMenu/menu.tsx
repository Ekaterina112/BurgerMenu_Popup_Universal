import React from 'react';
import s from './menu.module.css'
import {ItemType} from '../App';


type PropsType = {
    header: string;
    items: Array<ItemType>
    active: boolean;
    setActive: (active: boolean) => void;
}

const Menu: React.FC<PropsType> = ({header, items, active, setActive}) => {

    return (<div className={`${active ? s.menuActive : s.menu}`} onClick={() => {
            setActive(false)
        }}>
            <div className={s.blur}/>
            <div className={s.menuContent} onClick={e => e.stopPropagation()}>
                    <div className={s.menuHeader}>{header}</div>
                    <ul>
                        {items.map((item: { href: string | undefined; value: React.ReactNode; }) =>
                            <li>
                                <a href={item.href}>{item.value}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
    );
}

export default Menu;