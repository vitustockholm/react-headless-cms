const variables = require('../pass');
console.log(variables.consumer_key);
const AUTH = {
  consumer_key: variables.consumer_key,
  consumer_secret: variables.consumer_secret,
};

//
const useEndpoint = (product_type) => {
  //authentification
  // const AUTH = {
  //   consumer_key: 'ck_7aeb09a5e5fc04e3fdf7201c2b70f071a985780e',
  //   consumer_secret: 'cs_ab3014e136f0050ceb8e71ed88d68a6ed5e13d61',
  // };
  //routeing -urling
  switch (product_type) {
    case 'all-products':
      return {
        ...AUTH,
        route: 'https://hypeformat.com/wp-json/wc/v3/products?per_page=100',
      };
    case 'canvases':
      return {
        ...AUTH,
        route:
          'https://hypeformat.com/wp-json/wc/v3/products?per_page=100&category=29',
      };
    case 'posters':
      return {
        ...AUTH,
        route:
          'https://hypeformat.com/wp-json/wc/v3/products?per_page=100&category=30',
      };
    case 'stickers':
      return {
        ...AUTH,
        route:
          'https://hypeformat.com/wp-json/wc/v3/products?per_page=100&category=38',
      };
    default:
      return { error: 'product type doesnt exist' };
  }
};

export default useEndpoint;
