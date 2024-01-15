import axios from 'axios';
import { Map,  YMaps } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
import MyPlacemark from './MyPlacemark';
import './From.css'


function PrimaryMap() {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   axios.get('http://localhost:3000/addresses').then(({data}) => setData(data)).finally(() => setLoading(false))
 }, [])

 if(loading) {
   return <span>Loading...</span>
 }

 return (
   <>
   <YMaps>
     <Map
     className='map'
   defaultState={{
     center: [40.191622, 44.506321],
     zoom: 16,
   }}>
   {
     data.map(address => {
       return <MyPlacemark address={address} />
     })
   }
 </Map>
 </YMaps>
   </>
   
 );

 
}

export default PrimaryMap;