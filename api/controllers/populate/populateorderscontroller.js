
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
    await Orders.create(
        {totalPrice:7, DateOfPayment: new Date, isPaid:false, userID:1}
    );



    this.res.redirect("populate");
  
    }
  

};

