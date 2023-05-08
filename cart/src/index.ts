import * as faker from 'faker';

const devCartElement: HTMLElement = document.getElementById('dev-cart');

let devCart: string = faker.datatype.number();

devCartElement.innerHTML = `<div>You have <a href="https://google.com">${devCart}</a> in your cart</div>`;
