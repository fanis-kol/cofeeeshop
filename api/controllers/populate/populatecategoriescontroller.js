
/**
 * PopulateCoffeesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


 module.exports = {
  
    friendlyName: 'populate DB',


    description: 'populates the databse with categories data',
  
  
    // exits: {
  
    //   success: {
    //     viewTemplatePath: 'pages/demo/populate'
    //   }
  
    // },
  
  
    fn: async function () {
 
     await Categories.createEach([
        {Name:"Italian", Description:"Coffees from Italy"},
        {Name:"American (USA)", Description:"Coffees from the USA"},
        {Name:"Australian", Description:"Coffees from Australia"},
        {Name:"Greek", Description:"Coffees from Greece"},
        {Name:"French", Description:"Coffees from France"},
        {Name:"Spanish", Description:"Coffees from Spain"},
        {Name:"German", Description:"Coffees from Germany"},
        {Name:"Austrian", Description:"Coffees from Austria"},
     ]);
    this.res.redirect("populate");
  
    }
  

};

