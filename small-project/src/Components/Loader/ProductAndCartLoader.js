import { getStoredCart } from "../../utilities/fakedb";



export const productAndCartLoader = async () => {


    const productsData = await fetch('products.json');

    const products = await productsData.json();


    const savedCart = getStoredCart();



    return products;


}