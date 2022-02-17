import React, {useState, useEffect} from 'react';
import callAPI from '../scripts/callAPI';
import { DevType } from '../types/DevType';
import DevCard from '../components/DevCard';
import Header from '../components/Header';
import DevList from '../components/DevList';

const Devs = () => {
  const [devs, setDevs] = useState([])
  const [cartItems, setCartItems] = useState<(string | number)[]>([])
  
  useEffect(() => {
    callAPI('/api/devs').then(data => setDevs(data))
  }, [])

  if (devs?.length < 1) {
    return <p>...loading...</p>
  }

  return (
    <div style={{height: '100vh', margin: '0 auto'}}>
      <Header cartItems={cartItems} />
      <DevList devs={devs} cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  )
}

export default Devs
