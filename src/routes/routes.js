import { addnewProduct, getProducts, getProductWithID } from "../controllers/controllers";

export const routes = (app) =>{
    app.route('/products')
        .get(getProducts)

    //post endpoint
        .post(addnewProduct);

    app.route('/products/:ProductID')
        .get(getProductWithID);

};

