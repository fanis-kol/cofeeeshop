module.exports = {


    friendlyName: 'success!',
  
  
    description: `This action responds to /success route to remove the cart from session,
    change in the  Orders table the isPaid field to true and insert a date in DateOfPayment 
    and serve the payment successfull page`,

 


    fn: async function () {
  
    //   //insert isPaid and date in database
     
      const orderSuccess= await Orders.update({id:this.req.session.order.id}).set({DateOfPayment:new Date, isPaid:true}).fetch();
      console.log(`ordersuccess is = ${JSON.stringify(orderSuccess)}`);
      
      delete this.req.session.cart
      console.log(this.req.session.cart);


    //   // All done.
    return this.res.view('pages/payment/success')
  
    }
  };
  
  