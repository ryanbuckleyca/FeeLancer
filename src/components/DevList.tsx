import React, {FC} from 'react'
import DevCard from './DevCard'
import {DevListProps} from '../types/DevCardProps'

const DevList: FC<DevListProps> = ({devs, setCartItems, cartItems}) => {
    const style = {
        display: 'flex',
        padding: 0, 
        justifyContent: 'center',
        flexWrap: 'wrap' as const, 
        margin: '80px auto', 
        listStyleType: 'none'
    }
    return (
        <ul style={style}>
            {devs.map((dev) => (
                <DevCard 
                    key={dev.id}
                    dev={dev}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                />
            ))}
        </ul>
    )
}

export default DevList
