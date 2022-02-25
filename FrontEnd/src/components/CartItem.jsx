import React from 'react'

function CartItem({products}) {
    
  return (
   
     <div className="row row-cols-1 row-cols-md-3 g-4">
       {
         products.map((product)=> {
           return(
            
            <div className="col">
            <div className="card h-100">
              <img src="/images/hlt.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                    <h5 className="card-title">
                        {product.name}
                    </h5>
                    <p className="card-text">
                        Price {product.price}$
                        <br />
                        Quantity: 1
                        <br />
                        Total: 200$
                    </p>
                    <button className="btn btn-danger">
                        <i className="fa fa-trash"></i> Delete
                    </button>
                </div>
              
            </div>
          </div>
           )
         })
       }
 
     </div>
    

  )
}

export default CartItem