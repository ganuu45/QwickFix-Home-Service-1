import { ServicesCheckout } from '../ServicesCheckout'
import { services_painter } from '../../../Data/ServicesData'


export const RoomPainting = () => {
    return (
        <>
            <ServicesCheckout title={services_painter[0].desc} desc={services_painter[0].checkout_desc} img={services_painter[0].img} category="Painter" />
        </>
    )
}

export const PrimerPainting = () => {
    return (
        <>
            <ServicesCheckout title={services_painter[1].desc} desc={services_painter[1].checkout_desc} img={services_painter[1].img} category="Painter" />
        </>
    )
}

export const DecorativeWallPainting = () => {
    return (
        <>
            <ServicesCheckout title={services_painter[2].desc} desc={services_painter[2].checkout_desc} img={services_painter[2].img} category="Painter" />
        </>
    )
}