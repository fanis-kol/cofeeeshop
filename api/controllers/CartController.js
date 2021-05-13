/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  add: async function(req, res) {

  	//check if there is a cart in session

  	if(req.session.cart) {

  		//upate current cart if cart is in session
      //send the request object to the update helper

      let updateCart = await sails.helpers.updateCart(req);

      req.session.cart = updateCart

      return res.redirect('back')
       

  	} else {

  		//create new cart and order then add if no cart in session

  		let cart = await sails.helpers.addToCart(req.param('id'), 1)
      let order = await sails.helpers.createOrder(req)

  		//Put it in session
  		req.session.cart = cart
      req.session.order = order

      //initialize variable to insert into querry
      var addPrice= req.session.cart.totalPrice;
      var addCoffeeid= req.param('id');
      var addQty= req.session.cart.totalQty;


      //create first orderDetail
      const orderDetailQuerry= await OrderDetails.create({price: `${addPrice}`, quantity: `${addQty}`,coffeeID: `${addCoffeeid}`, ordersID: `${req.session.order.id}`}).fetch()
      console.log("first order details querry returns :");
      console.log(orderDetailQuerry);

  		return res.redirect('back')
      
  	}

  },

  update: async function(req, res) {

    let updateCart = await sails.helpers.updateCart(req);

    return res.redirect('back')

  },

  remove: async function(req, res) {

    let cart= req.session.cart

    let id = 'item'+req.param('id')

    //update total qty
    cart.totalQty = cart.totalQty - cart.items[id].qty

    //update total price
    cart.totalPrice = cart.totalQty - cart.items[id].qty * cart.items[id].product.price

    //delet the item
    delete cart.items[id]
    await OrderDetails.destroy().where({"coffeeID": req.param('id'),"ordersID":req.session.order.id })

    return res.redirect('back')

  },

};

