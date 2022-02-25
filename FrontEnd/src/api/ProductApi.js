// import {Product} from'./productData'
import axios from 'axios'

// let response = axios.get('http://localhost:4000/products/allproducts')


export const getAllProducts = async () => {
    try {
      let response = await axios.get(
        'http://localhost:4000/products/allproducts'
        // {
        //   headers: { Authorization: "Bearer " + token },
        // }
      );
  
      let json = response.data.products;
      return { json };
    } catch (error) {}
};

export const getOneProduct = async (id) => {
    try {
      let response = await axios.get(
        'http://localhost:4000/products/product/' + id
        // {
        //   headers: { Authorization: "Bearer " + token },
        // }
      );
  
      let json = response.data.product;
      return { json };
    } catch (error) {}
};

