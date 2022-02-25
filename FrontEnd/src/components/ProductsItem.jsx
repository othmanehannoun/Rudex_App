import React from 'react'
import {Link} from 'react-router-dom'

function Product({products}) {
    
  return (
   
     <div className="row row-cols-1 row-cols-md-3 g-4">

       {
         products.map((product)=> {
           return(
            
            <div class="col">
            <div class="card h-100">
              <img src="/images/hlt.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.description}</p>

                <Link className='btn btn-info' to={`productdetail/${product._id}`}>Details</Link>
              </div>
              
            </div>
          </div>
           )
         })
       }
 
     </div>
    

  )
}

export default Product