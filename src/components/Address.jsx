import axios from 'axios'
import React, { useState } from 'react'
import './From.css'

const Address = ({address, setAddresses}) => {
    const onChangeStatus = () => {
      setAddresses(prev => prev.map((currentAddress) => {
        if(currentAddress.id !== address.id) return currentAddress;
        return {
          ...currentAddress,
          isActive: !currentAddress.isActive
        }
      }))
      axios.patch("http://localhost:3000/addresses/" + address.id,{
        isActive:!address.isActive,
      })
    }
  return (
    <>
    <li>{address.city}</li>
    <button className='actBtn' onClick={onChangeStatus}>{address.isActive ? 'Disable': 'Enable'}</button>
    </>
  )
}

export default Address