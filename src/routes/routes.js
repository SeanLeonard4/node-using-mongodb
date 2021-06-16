import { addnewProduct, deleteProduct, getProducts, getProductWithID, updateProduct } from "../controllers/controllers";

export const routes = (app) =>{
    app.route('/products')
        .get(getProducts) //no need for a semi-colon here as you dont want it to end the .post

    //post endpoint
        .post(addnewProduct);

    app.route('/products/:ProductID')

        .get(getProductWithID)

        .put(updateProduct)
        
        .delete(deleteProduct);
};

