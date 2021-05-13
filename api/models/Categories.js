/**
 * Categories.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
        Name: {
            type: 'string',
            required: true,
            maxLength: 70,
            example: 'Espresso',
        },
        Description: {
            type: 'string',
            required: true,
            maxLength: 80,
            example:
            `Το κλασικό και αυθεντικό ρόφημα. Όπως όλα τα κλασικά ροφήματα, μέρος της μοναδικότητας του προέρχεται από την απλότητά του. 
            Το latte είναι απλά μία ή δύο δόσεις έντονου & γευστικού espresso ο οποίος συνδυάζεται με φρέσκο γάλα στον ατμό. 
            Μερικοί το προτιμούν με κάποιο σιρόπι γεύσης ή με έξτρα δόσεις espresso. Άλλοι πάλι, θεωρούν πως είναι τέλειο – ακριβώς όπως είναι.`
        },

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
       categories:{
           collection: 'coffees',
           via:'categoryID'
       }

    },
};
