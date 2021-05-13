module.exports = {


    friendlyName: 'create order',
  
  
    description: `This helper creates an order so it can be injected into req.session 
                  so it can be used in checkout action (api\controllers\demo\checkout.js)`,

    inputs: {

      req: {
        type: 'ref',
        required: true
      }
  
    },
  



    fn: async function (inputs, exits) {
  
      //create an order
      var user=inputs.req.me
      const ordersQuerry= await Orders.create({totalPrice:0, userID:`${user.id}`}).fetch();
      console.log(`order is = ${JSON.stringify(ordersQuerry.id)}`);

      
  
      // // //create order
      var order = {
  
        id: ordersQuerry.id,
        userid: user.id,
    
      }
      console.log(`order is = ${JSON.stringify(order)}`);
      // All done.
      return exits.success(order);
  
    }
  };
  
  