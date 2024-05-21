import {useState} from 'react'

export default function Onchange() {
    const [name, setName] = useState('')

    function handleNameChange(e) {
        setName(e.target.value)
    }

    const [quantity, setQuantity] = useState(0)

    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    const [comment, setComment] = useState('')

    function handleCommentChange(e) {
        setComment(e.target.value)
    }

    const [payment, setPayment] = useState(0)

    function handlePaymentChange(e) {
        setPayment(e.target.value)
    }

    const [shipping, setShipping] = useState('')

    function handleShippingChange(e) {
        setShipping(e.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input
                value={quantity}
                onChange={handleQuantityChange}
                type="number"
            />
            <p>Quantity: {quantity}</p>

            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Enter comment"
            ></textarea>

            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Paypal">Paypal</option>
                <option value="American Express">American Express</option>
            </select>

            <p>Payment: {payment}</p>

            <label>
                <input
                    type="radio"
                    value="Pick Up"
                    checked={shipping === 'Pick Up'}
                    onChange={handleShippingChange}
                />
                Pick Up
            </label><br />
            <label>
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === 'Delivery'}
                    onChange={handleShippingChange}
                />
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    )
}
