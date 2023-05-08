import * as faker from 'faker';

let products: string = '';
const devProducts: HTMLElement = document.getElementById('dev-products');

for (let i = 0; i <= 3; i++) {
  const name: string = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

devProducts.innerHTML = products;
