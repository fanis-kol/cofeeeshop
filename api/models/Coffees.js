/**
 * Coffees.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name:{
      type:'string',
      required: true,
      description: 'The name of the product',
      example: "esspreso machiato lugo cappuccino",
     },

     description: {
      type: 'string',
      required: true,
      columnType: "varchar(500)",
      maxLength: 500,
      description: 'The description of the product',
      example: "Although it is often compared to cappuccino, Wiener melange is a specialty blend of coffee and milk that is more similar to caffe latte. The first written records about melange date back to Vienna in the mid-19th century, while the word melange comes from the French verb méler, which translates as to mix. While there are several variants of this classic, it is usually made with one espresso shot of mild coffee that is served in a large cup.",
     },

     price: {
      type:'number',
      required:true,
      description: "products price",
      example: 1.65
    },

    image: {
      type: 'string',
      description: "URL Path",
      example: "/images/shop/image.jpg"
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    categoryID:{
      model:"categories"
    },
    coffees:{
      collection: 'orderdetails',
      via:'coffeeID'
  }


  },

};

