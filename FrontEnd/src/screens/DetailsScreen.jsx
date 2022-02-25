import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../api/ProductApi'
import ProductDetail from '../components/ProductDetail'


function DetailScreen(props) {
  let id = props.match.params.id
 
  const [productDetail, setProductDetail] = useState({})
  useEffect(()=>{
    getProduct()

  })
  // --Functions-----------------
  const getProduct = async()=>{
    
    await getOneProduct(id)
    .then(res=>{
      setProductDetail(res.json)
    })
    .catch(err=> console.log(err))
  }
  
  return (
    <>
    {/* <img src="/images/hlt.jpg" class="card-img-top" alt="..." /> */}
      <ProductDetail 
        product = {productDetail}
      />
     
</>


  )
}

export default DetailScreen