import { addnewProduct } from "../controllers/controllers";

export const routes = (app) =>{
    app.route('/products')

    //post endpoint
    .post(addnewProduct);

};

// export default routes;