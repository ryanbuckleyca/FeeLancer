import React, {FC} from 'react'
import Ribbon from '../images/ribbon.svg'
import { DevCardButtonProps } from '../types/DevCardButtonProps'
import { DevCardProps } from '../types/DevCardProps'
import Pill from './Pill'

const Badge = ({experience}: { experience: number | undefined}) => {
    const style = { 
        position: 'absolute' as const, 
        height: 38, 
        width: 45, 
        right: -10, 
        top: -25, 
        paddingTop: 16, 
        background: `url(${Ribbon})`, 
        backgroundSize: 45, 
        textAlign: 'center' as const, 
        fontSize: '.8rem', 
        whiteSpace: 'nowrap' as const,
        transform: 'rotate(25deg)',
    }
    return <p style={style}>{experience}yrs</p>
}

const DevSkills = ({skills}: {skills: string[]}) => {
    const style = {
        width: '100%', 
        marginRight: 50,
        marginLeft: -3,
        display: 'flex', 
        flexWrap: 'wrap' as const,
        overflowY: 'scroll' as const,
    }
    return (
        <div style={style}>
            {skills?.map((skill, i) => <Pill key={i}>{skill}</Pill>)}
        </div>
    )
}

const DevCardButton: FC<DevCardButtonProps> = ({dev, devIsInCart, handleCartAdjust }) => {
    const style = {
        padding: 10, 
        border: "#444", 
        backgroundColor: '#888', 
        borderRadius: 3, 
        marginTop: 20
    }
    return (
        <button onClick={()=> handleCartAdjust(dev.id)} style={style}>
            {devIsInCart ? '- remove from cart' : '+ add to cart'}
        </button>
    )
}


const DevCard: FC<DevCardProps>  = ({dev, cartItems = [], setCartItems}) => {
    const devIsInCart = cartItems?.includes(dev.id)

    const handleCartAdjust = (devId: number | string) => {
        const newCart = devIsInCart 
            ? cartItems.filter((i) => i !== devId)
            : [...cartItems, devId]
        setCartItems([...new Set(newCart)])
    }

    const recBadge = {
        zIndex: 0,
        position: 'absolute' as const,
        top: -1,
        left: 25,
        textAlign: 'center' as const,
        display: 'block'
    }

    const innerStyle = { 
        position: 'relative' as const,
        margin: 15, 
        width: 160,
        height: 'auto',
        border: dev.recommended ? '1px solid lightYellow' : 'none',
        borderRadius: 10,
        backgroundColor: "#444", 
        padding: 25,
        display: 'flex',
        flexDirection: 'column' as const,
        justifyItems: 'space-between',
        alignItems: 'stretch',
        boxShadow: '.1rem .1rem .2em #333',
        opacity:  devIsInCart ? '0.5' : '1'
    }

    return (
        <li key={dev.id} style={{position: 'relative' as const, display: 'flex'}}>
            {dev.recommended && (
                <div style={recBadge}><Pill bgColor="lightYellow" textColor="black">Recommended!</Pill></div>
            )}
            <div style={innerStyle}>
                <div style={{zIndex: 1, height: '100%'}}>
                    <div style={{position: 'relative' as const, display: 'flex', justifyContent: 'space-between', marginBottom: 15}}>
                        <img src={dev.picture} style={{ maxWidth: 100, maxHeight: 100, borderRadius: 50 }} />
                        {dev.experience && (<Badge experience={dev.experience} />)}
                    </div>
                    <p>{dev.name}</p>
                    {dev.skills && (<DevSkills skills={dev.skills} />)}
                </div>
                <DevCardButton dev={dev} devIsInCart={devIsInCart} handleCartAdjust={handleCartAdjust} />
            </div>
        </li>
    )
}

export default DevCard
