import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCard} from '../../actions';

const CartTable = ({items, deleteFromCard, repeatCounters}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map( (item,i) => {
                        const {title, price, url, id} = item;
                        //const allItemPrice = price * repeatCounters[i];
                        return (
                            <div key={id} className="cart__item">
                                <img  src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">
                                    {price}$ * {repeatCounters[i]} = {price * repeatCounters[i]}$
                                </div>
                                <div onClick={() => deleteFromCard(id, price * repeatCounters[i])} 
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
    let submitMenuId = [],
        repeatCounters = [];  //массив с количеством повторов уникальных id

    items.forEach((item) => {
        let curentId = item.id;    
        submitMenuId.push(curentId); //массив из всех нажатых id
    });

    let uniqueElements =  [...new Set(submitMenuId)]; //массив уникальных значений

    let itemCounter;
    uniqueElements.forEach((elem) => {  
        itemCounter = submitMenuId.filter(item => item === elem);
        let counter = itemCounter.length;
        repeatCounters.push(counter);
        
    })
    //формирование заказа без повторяющихся карточек
    items = items.filter((item, i) => {
        return i === items.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(item)
        })
    })

    return {
        items,
        repeatCounters 
    }
}

const mapDispatchToProps = {
    deleteFromCard
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);