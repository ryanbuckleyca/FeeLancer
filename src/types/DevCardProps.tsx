import { DevType } from './DevType'
import { Dispatch, SetStateAction } from 'react'

export interface DevCardProps {
    dev: DevType
    cartItems: (string | number)[]
    setCartItems: Dispatch<SetStateAction<(string | number)[]>>
}
export interface DevListProps {
    devs: DevType[]
    cartItems: (string | number)[]
    setCartItems: Dispatch<SetStateAction<(string | number)[]>>
}
