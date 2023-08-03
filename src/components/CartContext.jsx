import React, { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import Item from './Items'

import { cartContext } from './Cart'
const CartContext = () => {
    const { item, removeAll, totalItem, Amount } = useContext(cartContext);
    return (
        <>
            <header>
                <div className='continue-shopping'>
                    <p style={{ fontSize: '20px' }}><AiOutlineArrowRight /></p>
                    <h3>This is the list of your buyable Shoping Product.</h3>
                </div>
                <div className="cart-icon">

                    <span style={{ fontSize: '30px' }}><BsFillCartFill /></span>
                    <p className="total-items">
                         <span className="total-items-count">{totalItem} </span>
                    </p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>Shopping Cart</h1>

                <div className="cart-items">
                    <div className="cart-items-container">
                        {
                            item.map((element, index) => {
                                return (
                                    <Item
                                        key={element.id}
                                        id={element.id}
                                        title={element.productName}
                                        image={element.productImage}
                                        price={element.price}
                                        quantity={element.quantity}

                                    // Choose Any
                                    //<Items key={element.id} {...elements} />
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="card-total" style={{ marginBottom: "10px" }}>
                    <h3>Total: <span>$. {Amount}</span></h3>
                    <button style={{ margin: '4px' }} onClick={removeAll}>ClearCart</button>
                    <button>CheckOut</button>
                </div>
            </section>
        </>
    )
}

export default CartContext