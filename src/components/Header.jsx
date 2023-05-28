import React from "react";
import { Link } from "react-router-dom";

function Header({ onCart }) {
    return <header>
        <Link to='/' exact='true'>
            <div className='headerLeft'>
                <img width={40} height={40} src='img/image 4.png' />
                <div className='headerInfo'>
                    <h3>React sneakers</h3>
                    <p>магазин лучших кроссовок</p>
                </div>
            </div>
        </Link>
        <ul className='headerRight'>
            <li >
                <img className='firstLi' src='img/cartNew.svg' width={18} height={18} onClick={onCart} />
                <span>1205p</span>

            </li>
            <li className='secondLi'>
                <Link to='/favorites'><img src="img/favorite-items.png" width={21} height={19} /></Link>
                <img src='img/man.svg' width={18} height={18} />
            </li>
        </ul>
    </header>
}

export default Header