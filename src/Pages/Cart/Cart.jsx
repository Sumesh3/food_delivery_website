import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from "../Context/Storecontext";
import './Cart.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export default function Cart() {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-titles">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div className="cart-items-titles cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p><CurrencyRupeeIcon fontSize='1px' />{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p><CurrencyRupeeIcon fontSize='1px' />{item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p><CurrencyRupeeIcon fontSize='1px' />{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p><CurrencyRupeeIcon fontSize='1px' />{getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b><CurrencyRupeeIcon fontSize='1px' />{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECHOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>Enter promo code</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
