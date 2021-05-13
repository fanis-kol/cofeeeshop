var stripe= require('stripe')('sk_test_51IcCKmB8QCrXCSB3eCWHREnZZUn7NT3fU1TW8Ae274Fkm3w0b6FzrZ3Sjvl3QHLPpPmlx9Yv8Cs9CqatWEmTrnph00ngrn1J9h')

module.exports = {

fn: async function() {
      

  //get all orderDetails with session order id
  var orders = await OrderDetails.find().where({ordersID:this.req.session.order.id})

  //loop through all orderDetails object and add the result to finalprice
	let arr = [];
	for(let i = 0; i <orders.length; i++){
		arr.push(orders[i].price);
	}
 console.log(arr);
 var finalprice = arr.reduce((a, b) => a + b, 0)
console.log(finalprice)

//insert total price to base
var finalPriceDB=await Orders.update(this.req.session.order.id).set({totalPrice:finalprice}).fetch()
console.log("final price");
console.log(finalPriceDB);

//make payment intent object for stipe
  var payment={
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Your Order',
          },
          unit_amount: 0,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:1337/success',
    cancel_url: 'http://localhost:1337/demo/homepage',
  }
  console.log(Math.ceil(finalprice*100));
  payment.line_items[0].price_data.unit_amount = Math.ceil(finalprice*100);
  
//make payment
const session = await stripe.checkout.sessions.create(payment);
    
    return this.res.json({ id: session.id });
    
    }

};