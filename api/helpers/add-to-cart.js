module.exports = {


  friendlyName: 'Add to cart',


  description: 'This helper creates a cart and adds the first product to it',


  inputs: {

    product: {
      
      type: 'string',
      required: true

    },

    productQty: {
      type: 'number',
      required: true
    }


  },


  fn: async function (inputs, exits) {

    //find the product
    console.log(JSON.stringify(inputs));
    var product = await Coffees.findOne({ id: inputs.product})
    console.log(`product is =${JSON.stringify(product)}`);
    

    //create the cart scaffolding
    var cart = {

      items : {},
      totalQty: inputs.productQty,
      totalPrice: product.price,
  
    }
    console.log(`cart is = ${JSON.stringify(cart)}`);
    //push the first product in the cart

    cart.items['item'+product.id] = {
      qty: inputs.productQty,
      product: product
    }

    // All done.
    return exits.success(cart);

  }
};

