const Products = require('../models/model-products')

const Product_Controller ={
  // --------- Add Product---------//
 AddProduct : (req, res) =>{
  const Product = new Products({
      name: req.body.name,
      price: req.body.price,
      description : req.body.description,
      quantite : req.body.quantite
  })
  Product.save()
  .then(data=>{res.json({product: data})})
  .catch(err=>{console.log(err)})
},

// --------- fetch All Products---------//
AllProducts : (req, res)=>{
    Products.find((err, products)=>{
        if(err || !products){
            return res.json({error: 'No data'})
        }
        res.json({products})
    })
},


// --------- fetch Product by ID ---------//
fetchProductById :(req,res)=>{
  Products.findById(req.params.id).then(product=>{
    res.json({product})
  }).catch(err=>{
    console.log(err);
  })
}
}




module.exports = {
    Product_Controller
}