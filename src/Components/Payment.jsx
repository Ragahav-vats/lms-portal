import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export default function Payment() {

    const [orderLoading, setOrderLoading] = useState(false);

    const placeOrder = (event) => {
        console.log("FORM SUBMIT HO RAHA HAI");
        event.preventDefault();
        setOrderLoading(true);

         var address = {
            name: event.target.name.value,
            email: event.target.email.value,
            mobile_number: event.target.mobile_number.value,
            address: event.target.address.value,
            state: event.target.state.value,
            city: event.target.city.value
        }


        const orderSave = {
            address : address,
            // product_info : event.target.product_info.value,
            // total_amount : event.target.total_amount.value,
            // discount_amount : event.target.discount_amount.value,
            // net_amount : event.target.net_amount.value
             product_info: [{ id: 1, name: 'Test', description: 'Testing Product', image: '1.jpg', price: 200, quantity: 2 }, { id: 2, name: 'Test', description: 'Testing Product', image: '1.jpg', price: 400, quantity: 2 }],
            total_amount: 1000,
            discount_amount: 200,
            net_amount: 800
        };
        
        console.log(orderSave);
        console.log(Cookies.get('token'));

         axios.post(`${import.meta.env.VITE_API_BASE_URL}/orders/place-order`, orderSave, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        })
            .then((result) => {
                if (result.data._status == true) {
                    // toast.success(result.data._message)
                    // event.target.reset();
                    setOrderLoading(false);
                    // handlePayment(result.data._order_info);

                } else {
                    toast.error(result.data._message)
                    setOrderLoading(false);
                }
            })
            .catch(() => {
                toast.error('Something went wrong !')
                setOrderLoading(false);
            });
    
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-4">
                <form className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-6 md:p-10" onSubmit={placeOrder}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                        LMS Payment Checkout
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Billing Details */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-700">Billing Details</h3>
                            <div className="space-y-4">
                                <input type="text" name="name" placeholder="Full Name" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                <input type="email" name="email" placeholder="Email Address" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                <input type="text" name="mobile_number" placeholder="Phone Number" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                <input type="text" name="address" placeholder="Address" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />

                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="city" placeholder="City" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                    <input type="text" name="state" placeholder="State" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-700">Payment Details</h3>
                            <div className="space-y-4">
                                <input type="text" name="card_name" placeholder="Card Holder Name" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                <input type="text" name="card_number" placeholder="Card Number" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />

                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="expiry" placeholder="MM/YY" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                    <input type="text" name="cvv" placeholder="CVV" className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                </div>

                                <select name="payment_method" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                    <option>Select Payment Method</option>
                                    <option>Credit Card</option>
                                    <option>Debit Card</option>
                                    <option>UPI</option>
                                    <option>Net Banking</option>
                                </select>
                            </div>

                            {/* Order Summary */}
                            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-700 mb-2">Order Summary</h4>
                                <div className="flex justify-between text-sm">
                                    <span>Course Price</span>
                                    <span>₹1999</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Discount</span>
                                    <span>-₹500</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>₹1768</span>
                                </div>
                            </div>

                            <button type="submit" className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                                disabled={
                                    orderLoading ? 'disabled' : ''
                                }
                            >
                                {
                                    orderLoading ? 'Loading....' : 'Pay Now'
                                }

                            </button>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-6">
                        Secure payment powered by SSL encryption.
                    </p>
                </form>
            </div>
        </>
    )
}
