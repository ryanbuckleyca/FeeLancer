import React from 'react'
import CartIcon from '../images/cart.svg'

const Cart = ({ cartItems }: { cartItems: (string | number)[]}) => {
    const style = { 
        position: 'relative' as const,
        margin: 'auto 0',
        display: 'flex',
        height: 30, 
        width: 32, 
        background: `url(${CartIcon})`, 
        backgroundSize: 31,
        justifyContent: 'center',
        alignContent: 'center'
    }
    const notificationStyle = {
        position: 'absolute' as const,
        right: '.25rem',
        top: '-.2rem',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: '.6rem', 
        height: '.6rem', 
        width: '.6rem', 
        padding: 5, 
        margin: 'auto', 
        backgroundColor: 'red', 
        borderRadius: '100%'
    }
    return (
        <div style={style}>
            <p style={notificationStyle}>{cartItems?.length}</p>
        </div>
    )
}

const Header = ({cartItems}: { cartItems: (string | number)[]}) => {
    const style = {
        position: 'fixed' as const,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        background: '#222',
        padding: '15px 25px',
        zIndex: 2
    }
    return  (
        <div style={style}>
            <div style={{fontFamily: 'cursive', fontSize: '1.5rem'}}>DevPicker v0.1.0</div>
            <Cart cartItems={cartItems} />
        </div>
    )
}

export default Header
