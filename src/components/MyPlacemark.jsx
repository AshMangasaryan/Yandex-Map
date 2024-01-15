import { Placemark } from '@pbe/react-yandex-maps'
import React from 'react'


import activeIcon from '../images/green.png'
import passiveIcon from '../images/red.png'

const getPlacemarkIcon = (isActive) => {
    return {
      iconLayout: 'default#image',
      iconImageHref: isActive ? activeIcon : passiveIcon,
      iconImageSize: [20, 20], 
      iconImageOffset: [-20 / 2, -20], 
    }
}
    
const MyPlacemark = ({address}) => {
  return (
    <Placemark options={getPlacemarkIcon(address.isActive)} key={address.street}
                        geometry={[address.locationX, address.locationY]} />

  )
}

export default MyPlacemark