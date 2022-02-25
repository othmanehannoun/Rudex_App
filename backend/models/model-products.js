const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
        minlenght : 4,
        maxlength : 150
    },
    price : {
        type : Number,
        require : true,
    },
    description: {
        type: String,
        require : true,
    },
    quantite : {
        type : Number,
        require : true,
    }
    // img : {
    //     type : String,
    //     require : true
    // }

},{
    timestaps : true
});


module.exports = mongoose.model('Product', ProductsSchema);