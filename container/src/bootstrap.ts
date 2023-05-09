import { productsMount } from 'products/ProductsIndex';
import { cartMount } from 'cart/CartShow';

const productsElement: HTMLElement = document.getElementById('prod-products');
const cartElement: HTMLElement = document.getElementById('prod-cart');

console.log('Container!');

productsMount(productsElement);
cartMount(cartElement);
