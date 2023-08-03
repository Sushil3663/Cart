import React, { useContext } from 'react'
// import { AiOutlinePlus } from 'react-icons/ai'
// import { AiOutlineMinus } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { cartContext } from './Cart'

const Items = (props) => {
    const {deleteItem, increment, decrementItem} = useContext(cartContext)
    const {id, title, price, image, quantity} = props
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={image} alt="img" />
                </div>

                <div className="title">
                    <h2>{title}</h2>
                </div>

                <div className="add-minus-quantity">
                <i className="fas fa-minus minus" onClick={() => decrementItem(id)}></i>
                    <input type="text" placeholder={quantity} disabled />
                    {/* <p style={{ fontSize: '20px', cursor:"pointer" }} onClick={()=>increaseItem(id)}><AiOutlinePlus /></p> */}
                    <i className="fas fa-plus add" onClick={() => increment(id)}></i>
                </div>

                <div className="price">
                    <h3>$.{price}</h3>
                </div>

                <div className="remove-item">
                    <p style={{ fontSize: '20px' }} onClick={()=>deleteItem(id)}><BsFillTrashFill /></p>

                </div>
            </div>
            <hr />
        </>
    )
}

export default Items