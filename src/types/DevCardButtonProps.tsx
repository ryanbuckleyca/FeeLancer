export interface DevCardButtonProps {
    dev: { id: number | string }
    devIsInCart: boolean
    handleCartAdjust: (devId: number | string) => any
}
