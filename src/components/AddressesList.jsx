import { useEffect, useState } from "react";
import Address from "./Address";
import axios from "axios";

const AddressesList = () => {
  const [data, setData] = useState([]);

 useEffect(() => {
   axios.get('http://localhost:3000/addresses').then(({data}) => setData(data))
 }, [])

  return (
    <ul>
    {
        data?.map(address => {
            return <Address key={address.id} address={address} setAddresses={setData}/>
        })
    }
    </ul>
  )
}

export default AddressesList;