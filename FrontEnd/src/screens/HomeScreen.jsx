import React, {useEffect, useState} from 'react'

// import {connect} from 'react-redux'
import Product from '../components/ProductsItem';
import {getAllProducts} from '../api/ProductApi'
// import ClipLoader from "react-spinners/ClipLoader";
// import {increase, decrease} from './Redux/actions/action'


function HomeScreen() {
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
          <Product 
            products= {products}
          />
           
          </>
        
       }
    
    </div>
  )
}

// function mapStateToProps(state){
//     return{
//         value: state.count
//     }
// }

// function mapDispatchToProps (dispatch){
//     return{
//         addition: () => dispatch(increase()),
//         subtraction: () => dispatch(decrease()),
//         // multiplication: () => dispatch({type: 'MULTIPLICATION'}),
//         // division: () => dispatch({type: 'DIVISION'})
//     }
// }

// connect(mapStateToProps, mapDispatchToProps)

export default HomeScreen