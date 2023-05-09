import * as faker from 'faker';

const productsMount = (element: HTMLElement) => {
  let products: string = '';
  for (let i = 0; i <= 3; i++) {
    const name: string = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

export { productsMount };

//-----------------------------------------------------------------------------------------------------------------------------------
// Context #1 - We're running this file in isolation when developing:
//     -We are using our local index.html file;
//     -Which DEFINITELY has an element with an id of 'dev-product';
//       * We want to immediately render our app into that element;
//-----------------------------------------------------------------------------------------------------------------------------------

//Defining if we are in development mode
if (process.env.NODE_ENV === 'development') {
  const productsDevElement: HTMLElement =
    document.getElementById('dev-products');

  //Assuming we're building this page in isolation
  if (productsDevElement) {
    productsMount(productsDevElement);
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------
// Context #2 - We're running this file in isolation when developing:
//     -We are running this file in development or product through the CONTAINER app;
//     -NO GUARANTEE that an element with an id of 'dev-product' exists;
//       * We DO NOT WANT to try to immediately render the app;
//-----------------------------------------------------------------------------------------------------------------------------------
