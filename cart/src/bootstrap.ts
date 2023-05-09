import * as faker from 'faker';

const cartMount = (element: HTMLElement) => {
  let devCart: string = faker.datatype.number();

  element.innerHTML = `<div>You have <a href="https://google.com">${devCart}</a> in your cart</div>`;
};

export { cartMount };

//-----------------------------------------------------------------------------------------------------------------------------------
// Context #1 - We're running this file in isolation when developing:
//     -We are using our local index.html file;
//     -Which DEFINITELY has an element with an id of 'dev-product';
//       * We want to immediately render our app into that element;
//-----------------------------------------------------------------------------------------------------------------------------------

//Defining if we are in development mode
if (process.env.NODE_ENV === 'development') {
  const devCartElement: HTMLElement = document.getElementById('dev-cart');

  //Assuming we're building this page in isolation
  if (devCartElement) {
    cartMount(devCartElement);
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------
// Context #2 - We're running this file in isolation when developing:
//     -We are running this file in development or product through the CONTAINER app;
//     -NO GUARANTEE that an element with an id of 'dev-product' exists;
//       * We DO NOT WANT to try to immediately render the app;
//-----------------------------------------------------------------------------------------------------------------------------------
