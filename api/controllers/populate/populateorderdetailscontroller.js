
/**
 * PopulateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


 module.exports = {
  
    friendlyName: 'populate DB',


    description: 'populates the databse with dummy data',
  
  
    // exits: {
  
    //   success: {
    //     viewTemplatePath: 'pages/demo/populate'
    //   }
  
    // },
  
  
    fn: async function () {

    await OrderDetails.createEach([
        {price:3, quantity:3, coffeeID:1, ordersID:1},
        {price:4, quantity:2, coffeeID:4, ordersID:1}]
    );

    this.res.redirect("populate");
  
    }
};