import React, {useEffect, useState} from 'react'

// import {connect} from 'react-redux'
import {getAllProducts} from '../api/ProductApi'
import CartItem from '../components/CartItem';
// import ClipLoader from "react-spinners/ClipLoader";
// import {increase, decrease} from './Redux/actions/action'


function CartScreen() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    getProducts()

    return () =>{
        
    }
  }, [])

  // --les fonctions-------------------------
  const getProducts = async()=>{
    setLoading(false)
    await getAllProducts()
    .then(res =>{
      setProducts(res.json)
      setLoading(true)
    })
    .catch(err =>console.log(err))
  }

  
  return (
    <div>
       
        {
          !loading ?
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '80vh'
          }}> 
           <div style={{
              width: '10%',
              height: '111px'
            }}
             class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

          </div>
          :
          
          <>
          <CartItem  
            products= {products}
          />
           {/* <ClipLoader color="#00D3A0" loading={loading} size={150} /> */}
          </>
        
       }
    
    </div>
  )
}


export default CartScreen