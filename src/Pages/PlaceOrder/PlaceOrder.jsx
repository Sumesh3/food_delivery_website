import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from "../Context/Storecontext";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function PlaceOrder() {

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="text" placeholder="Email address" />
                <input type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className="place-order-right">
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
                    <button>PROCEED TO PAYMENT</button>
                </div>
                <br />
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
        </form>
    )
}