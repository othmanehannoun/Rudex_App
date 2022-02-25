import React from 'react'
import { Link } from 'react-router-dom'

function CartIcon() {
  return (
    <div>
        <Link to='/cart'>
        <i style={{fontSize: '30px', color:'#000'}} className="fa fa-shopping-cart"></i>
        <div style={{position:'absolute', top:'5px'}} className='badge badge-danger'> 3 </div>
        </Link>
    </div>
  )
}

export default CartIcon