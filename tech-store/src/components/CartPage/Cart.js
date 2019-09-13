import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartTotal from './CartTotal'
import CartList from './CartList'

export default function Cart() {
    return (
        <section className="py-5">
            {/* title */}
        <div className="container">
            <Title title="your cart itens" center/>
        </div>
            <CartColumns/>
            {/* cart list */}
            <CartList/>
            {/* cart totals */}
            <CartTotal/>
        </section>
    )
}
