/**
 * PageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  showShopPage: async function (req, res) {
    const categories = await Categories.find();
    const products = await Coffees.find();
    const users = await User.find();
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/demo/shop", {
      categories: categories,
      products: products,
      users: users,
      status: "notEmpty",
      message: message,
    });
  },
  userOrders: async function (req,res){
    let connectedUserId = req.session.userId;
    const products = await Coffees.find();
    const orders = await Orders.find();
    const ordersDetails = await OrderDetails.find()
    return res.view("pages/account/account-orders", {
      connectedUserId: connectedUserId,
      products: products,
      orders: orders,
      ordersDetails: ordersDetails,
    })
  },
  contactUs: async function (req,res){
    return res.view("pages/demo/contact-us",{
    })
  },
  home: async function (req,res){
    return res.view("pages/demo/homepage",{
    })
  },
  manageOrders: async function (req, res){
    const products = await Coffees.find();
    const orders = await Orders.find();
    const users = await User.find();
    const ordersDetails = await OrderDetails.find()
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/admin/manage_orders", {
      products: products,
      users: users,
      orders: orders,
      status: "notEmpty",
      message: message,
      layout: "layouts/admin-layout",
      ordersDetails: ordersDetails,
    })
  },
  manageProducts: async function (req, res) {
    const categories = await Categories.find();
    const products = await Coffees.find();
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/admin/manage_products", {
      categories: categories,
      products: products,
      status: "notEmpty",
      message: message,
      layout: "layouts/admin-layout"
    });
  },
  manageCategories: async function (req, res) {
    const categories = await Categories.find();
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/admin/manage_categories", {
      categories: categories,
      status: "notEmpty",
      message: message,
      layout: "layouts/admin-layout"
    });
  },
  manageUsers: async function (req, res) {
    const users = await User.find();
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/admin/manage_users", {
      users: users,
      status: "notEmpty",
      message: message,
      layout: "layouts/admin-layout"
    });
  },
  // index: async function (req, res) {
  //   const message = req.session.success;
  //   req.session.success = [];

  //   //get all products
  //   let products = await Coffees.find();
  //   let categories = await Categories.find();

  //   if (message != undefined && message.length != 0) {
  //     return res.view("pages/admin/index", {
  //       status: "notEmpty",
  //       message: message,
  //       products: products,
  //       categories: categories,
  //     });
  //   }

  //   return res.view("pages/admin/index", {
  //     status: "empty",
  //     products: products,
  //     categories: categories,
  //   });
  // },

  showCartPage: function (req, res) {
    let cart = req.session.cart;

    if (cart != undefined) {
      items = cart.items;
    } else {
      items = 0;
    }

    return res.view("pages/demo/cart", { items: items });
  },
};
