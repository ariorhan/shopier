import React, {useState} from 'react'
import BasketItem from './BasketItem'

export default function Basket({basket, resetBasket,products, total, money, id}) {
    return (
        <div className='basket'>
            <h6>Cart</h6>
            {basket.map(item => (
                <BasketItem key ={item.id} item={item} product ={products.find(p => p.id === item.id)} />
            ))}
            <div className="total">Total = £ {total}</div>
            <button className="checkout" >Check-Out</button>
            <button className="remove" onClick = {resetBasket}>Remove Cart</button>       
        </div>
    )
}
 