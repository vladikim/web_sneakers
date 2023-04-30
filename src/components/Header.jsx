import React from "react";

function Header() {
    return <header>
        <div className='headerLeft'>
            <img width={40} height={40} src='img/image 4.png' />
            <div className='headerInfo'>
                <h3>React sneakers</h3>
                <p>магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className='headerRight'>
            <li >
                <img className='firstLi' src='img/cartNew.svg' width={18} height={18} />
                <span>1205p</span>
            </li>
            <li className='secondLi'>
                <img src='img/man.svg' width={18} height={18} />
            </li>
        </ul>
    </header>
}

export default Header