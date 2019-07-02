import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCard} from '../../actions';

const CartTable = ({items, deleteFromCard, arr2}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map( (item,i) => {
                        console.log(arr2)
                        const {title, price, url, id} = item;
                        return (
                            <div className="cart__item">
                                <img key={id} src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$ * {arr2[i]} = {price * arr2[i]}$</div>
                                <div onClick={() => deleteFromCard(id)} 
                                     className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
                
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    let arr = [],
        arr2 = [];  //массив с количеством повторов уникальных id

    items.forEach((item) => {
        let curentId = item.id;    
        arr.push(curentId); //массив из всех нажатых id
    });

    let uniqueElements =  [...new Set(arr)]; //массив уникальных значений

    //console.log(arr);
    //console.log(uniqueElements);
    let itemCounter;
    uniqueElements.forEach((elem) => {  
        itemCounter = arr.filter(item => item === elem);
        let counter = itemCounter.length;
        arr2.push(counter);
        
    })
    console.log(arr2)
    //формирование заказа без повторяющихся карточек
    items = items.filter((item, i) => {
        return i === items.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(item)
        })
    })

    return {
        items,
        arr2 
    }
}

const mapDispatchToProps = {
    deleteFromCard
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);