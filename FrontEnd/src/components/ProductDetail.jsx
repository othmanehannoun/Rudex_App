import React, { useState } from 'react'

function ProductDetail({product}) {
  const [quantite, setQuntite] = useState(1)

  const handelChangeQuantite = (text) =>{
    let value = text.target.value
    if(value < 1)
     return ;
    else if(value > product.quantite)
     return ;

    setQuntite(value)
  } 

  return (
    <>
    
    <div>ProductDetail</div>
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src="/images/hlt.jpg" className="img-fluid rounded-start" alt="" width={'100%'}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">Price: {product.price}$</p>
            <p className="card-text">{product.description}</p>

              <input type="number"
               value={quantite}
               onChange={(text)=>{
                handelChangeQuantite(text)
              }}/>

              <br /><br />

              <p>Total: {quantite * product.price}</p>

              <button className="btn btn-primary" >
                  Add to Cart
              </button>
          </div>
        </div>
      </div>
    </div>

    </>

  )
}

export default ProductDetail