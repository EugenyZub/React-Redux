import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCard}) => {
    const {title, price, url, category} = menuItem;
    let iconUrl;
    
    switch (category) {
        case "salads": 
            iconUrl = '../../img/salad.png';
            break;
        case "pizza": 
            iconUrl = '../../img/pizza.png';
            break;
        default: 
            iconUrl = '../../img/ham.png';
            break;
    }

    return (
        <li className="menu__item">
            <div className="menu__title">
                {title}
                <img className="menu__icon" src={iconUrl} alt="icon"></img>
            </div>         
            <img className="menu__img" src={url} alt="Cesar salad"></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button onClick={() => onAddToCard()} className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;