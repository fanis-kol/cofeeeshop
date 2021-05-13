/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

 module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  "GET /": { action: "view-homepage-or-redirect" },
  "GET /welcome/:unused?": { action: "dashboard/view-welcome" },
  "GET /admin/adminwelcome": {action: "dashboard/adminwelcome"},


  "GET /faq": { action: "view-faq" },
  "GET /legal/terms": { action: "legal/view-terms" },
  "GET /legal/privacy": { action: "legal/view-privacy" },
  "GET /contact": { action: "view-contact" },

  "GET /signup": { action: "entrance/view-signup" },
  "GET /email/confirm": { action: "entrance/confirm-email" },
  "GET /email/confirmed": { action: "entrance/view-confirmed-email" },

  "GET /login": { action: "entrance/view-login" },
  "GET /password/forgot": { action: "entrance/view-forgot-password" },
  "GET /password/new": { action: "entrance/view-new-password" },

  "GET /account": { action: "account/view-account-overview" },
  "GET /account/password": { action: "account/view-edit-password" },
  "GET /account/profile": { action: "account/view-edit-profile" },
  "GET /account/orders": "PageController.userOrders",

  "GET /demo/homepage": "PageController.home",
  // Contact us page
  "GET /demo/contact-us": "PageController.contactUs",
  //Shop page
  "GET /demo/homepage/shop": "PageController.showShopPage",
  //Admin pages
  "GET /admin/products/manage": "PageController.manageProducts",
  "GET /admin/users/manage": "PageController.manageUsers",
  "GET /admin/category/manage": "PageController.manageCategories",
  "GET /admin/order/manage": "PageController.manageOrders",

  //Categories CRUD routes
  "POST /admin/category/add": "CategoryController.create",
  "POST /admin/category/edit": "CategoryController.edit",
  "POST /admin/category/delete": "CategoryController.delete",

  //Product CRUD routes
  "POST /admin/product/add": "ProductController.create",
  "POST /admin/product/edit": "ProductController.edit",
  "POST /admin/product/delete": "ProductController.delete",

  //Categories CRUD routes
  "POST /admin/order/delete": "OrderController.delete",
  //user CRUD routes
  "POST /admin/user/add": "UserController.create",
  "POST /admin/user/edit": "UserController.edit",
  "POST /admin/user/delete": "UserController.delete",

  //Cart CRUD routes
  "GET /add-to-cart/:id": "CartController.add",
  "POST /update-cart-item": "CartController.update",
  "GET /cart": "PageController.showCartPage",
  "GET /remove-item/:id": "CartController.remove",

  //payment routes
  'POST /address' : {action:"demo/shipping", csrf: false}, 
  "GET /success":{action:"demo/success", csrf: false},
  'POST /create-checkout-session': {action: "demo/checkout", csrf: false},


  //Populate routes
  "GET /demo/populate": {
    view: "pages/demo/populate",
  },
  //post for populate
  "POST /demo/populatecofees": {
    action: "populate/populatecoffeescontroller",
    csrf: false,
  },
  "POST /demo/populatecategories": {
    action: "populate/populatecategoriescontroller",
    csrf: false,
  },
  "POST /demo/populateorders": {
    action: "populate/populateorderscontroller",
    csrf: false,
  },
  "POST /demo/populateorderdetails": {
    action: "populate/populateorderdetailscontroller",
    csrf: false,
  },

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  "/terms": "/legal/terms",
  "/logout": "/api/v1/account/logout",

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  "/api/v1/account/logout": { action: "account/logout" },
  "PUT   /api/v1/account/update-password": {
    action: "account/update-password",
  },
  "PUT   /api/v1/account/update-profile": {
    action: "account/update-profile",
  },
  "PUT   /api/v1/account/update-billing-card": {
    action: "account/update-billing-card",
  },
  "PUT   /api/v1/entrance/login": { action: "entrance/login" },
  "POST  /api/v1/entrance/signup": { action: "entrance/signup" },
  "POST  /api/v1/entrance/send-password-recovery-email": {
    action: "entrance/send-password-recovery-email",
  },
  "POST  /api/v1/entrance/update-password-and-login": {
    action: "entrance/update-password-and-login",
  },
  "POST  /api/v1/deliver-contact-form-message": {
    action: "deliver-contact-form-message",
  },
  "POST  /api/v1/observe-my-session": {
    action: "observe-my-session",
    hasSocketFeatures: true,
  },
};