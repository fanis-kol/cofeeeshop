
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
      
        await Coffees.createEach([
     {name:"Caffè Americano", description:"Italian caffè Americano is prepared by adding hot water to an already extracted espresso shot. The ratio of coffee and water can vary, but the process should partially dissipate the crema—a creamy foam on top of an espresso.", price:2, image: "/images/shop/Italian/Caffe_Americano.jpg", categoryID:1},
     {name:"Cappuccino", description:"Cappuccino is an Italian coffee made with espresso and steam-foamed milk. It is believed that it developed from kapuziner—a coffee-based beverage that was enjoyed in Austrian coffee houses in the 18th century.", price:3,image: "/images/shop/Italian/Cappuccino.jpg", categoryID:1},
     {name:"Espresso", description:"The coffee used for espresso is blended from several roasts and as a result of pressurized brewing, the flavors of the beverage are very concentrated, with thick and almost syrupy texture. Consequently, espresso has more caffeine than other coffee beverages, so it is traditionally served as a shot.", price:2,image: "/images/shop/Italian/Espresso.jpg", categoryID:1},
     {name:"Macchiato", description:"Original Italian macchiato is a coffee variety that is made by pulling a shot of espresso and topping it with only one or two teaspoons of steamed milk. The milk is only added to enhance the flavor of coffee, and should never be overpowering.", price:2,image: "/images/shop/Italian/Macchiato.jpg", categoryID:1},
     {name:"Red Eye", description:"Red eye is an American coffee variety that combines brewed coffee with an espresso shot. This coffee combination is stronger than regular coffee, and it is supposed to be a more potent stimulant that keeps you awake and improves concentration.", price:3,image: "/images/shop/American_(USA)/Red_Eye.jpg", categoryID:2},
     {name:"Long Black", description:"Long black is a coffee variety that is often considered to be a close relative of caffé Americano. They both combine an espresso shot with hot water, but unlike its counterpart, long black is prepared by pouring or directly extracting the espresso into a cup of hot water.", price:3,image: "/images/shop/Australian/Long_Black.jpg", categoryID:3},
     {name:"Flat White", description:"Flat white is a coffee variety that couples a double shot of freshly brewed espresso and milk, which is usually steamed to create a light, silky microfoam. A perfect flat white should have an intense coffee flavor, and milk should only be a complement, not a predominant element, while the froth on top should be less airy and bubbly than in the classic cappuccino or caffè latte.", price:1.5,image: "/images/shop/Australian/Flat_White.jpg", categoryID:3},
     {name:"Frappe", description:"Although the word frappe first appeared in the 19th century, this Greek coffee variety was invented in 1957. It is made by combining instant coffee with water and ice. The combination is usually prepared in a shaker or a hand mixer, so when the drink is poured in a glass, a frothy foam should appear on top.", price:2,image: "/images/shop/Greek/Frappe.jpg", categoryID:4},
     {name:"Greek Coffee", description:"Extra finely ground roasted coffee beans are combined with cold water (and, optionally, sugar) in a traditional coffee pot called cezve or ibrik, and then brewed over low heat until frothy and on the verge of coming to a boil, yielding a uniquely strong and rich Turkish coffee.", price:2.5,image: "/images/shop/Greek/Greek_Coffee.jpg", categoryID:4},
     {name:"Freddo Cappuccino", description:"Freddo cappuccino is a chilled coffee variety that originates from Greece. It is made with espresso; usually a double shot, which is first blended with ice, strained, and then poured over ice. The drink is then topped with well-chilled milk that is shaken or blended until it achieves a light, frothy consistency.", price:3,image: "/images/shop/Greek/Freddo_cappuccino.jpg", categoryID:4},
     {name:"French Press", description:"French press is a brewing vessel and a brewing technique consisting of a cylinder-shaped glass and a plunger that is attached to a metal mesh. Coffee is steeped inside the pot, and the mesh is then used to press down the coffee grounds—leaving filtered coffee on the top.", price:2,image: "/images/shop/French/Cafe_au_lait.jpg", categoryID:5},
     {name:"Café au lait", description:"Although it is often compared to other European variations, especially the espresso-based Italian caffè latte, this French version of coffee and warmed milk is mostly made with brewed coffee, traditionally using the French press. The ratio of the ingredients also differs, and café au lait will usually have equal amounts of both, and it mostly does not have any foam on top, unlike caffè latte.", price:1.5,image: "/images/shop/French/French_Press.jpg", categoryID:5},
     {name:"Café bombón", description:"Bombón coffee is a Valencian specialty that combines coffee and condensed milk. The drink is usually made with espresso, and it is assembled by pouring condensed milk first and then topping it with espresso.", price:3.5,image: "/images/shop/Spanish/Cafe_bombon.jpg", categoryID:6},
     {name:"Café del tiempo", description:"Roughly translated as weather coffee, café del tiempo is a variety of Spanish ice coffee. It consists of a cup of coffee that is served with a glass that is filled with ice cubes and occasionally a slice of lemon. The guest then sweetness the coffee according to taste before pouring it over ice.This coffee is mainly prepared with plain espresso or espresso that is topped with steamed milk.", price:2,image: "/images/shop/Spanish/Cafe_del_tiempo.jpg", categoryID:6},
     {name:"Café con miel", description:"Café con miel is a coffee variety that originated in Spain. The drink consists of honey (miel), a shot of espresso, and steamed milk. The ingredients are layered, and the frothy milk foam is sometimes dusted with cinnamon. Honey is used a sweetener, so sugar is usually avoided.", price:2.5,image: "/images/shop/Spanish/Cafe_con_miel.jpg", categoryID:6},
     {name:"Cortado", description:"Cortado is a Spanish beverage made by pouring a small amount of espresso in a small glass cup, then cutting it with an equal amount of steamed milk in order to neutralize the bitterness. The name comes from the Spanish word cortar, meaning to cut, which refers to the preparation process.", price:1.5,image: "/images/shop/Spanish/Cortado.jpg", categoryID:6},
     {name:"Eiskaffee", description:"This German-style ice coffee is a combination of chilled brewed coffee and ice cream. It is usually made with an extended espresso and a scoop of vanilla ice cream, and though it is not sweetened, it can incorporate a splash of rum. Eiskaffee is usually served in a tall glass, together with a spoon and a straw.", price:3,image: "/images/shop/German/Eiskaffee.jpg", categoryID:7},
     {name:"Wiener Melange", description:"Although it is often compared to cappuccino, Wiener melange is a specialty blend of coffee and milk that is more similar to caffe latte. While there are several variants of this classic, it is usually made with one espresso shot of mild coffee that is served in a large cup.", price:2,image: "/images/shop/Austrian/Wiener_melange.jpg", categoryID:8},
     {name:"Einspänner", description:"Einspänner is a classic Viennese coffee that combines espresso and hefty amounts of whipped cream on top. The drink was named after one-horse-drawn carriage. Allegedly, this type of coffee was ideal for the coachmen because the cream would keep the coffee warm and would prevent spillage.", price:2,image: "/images/shop/Austrian/Einspanner.jpg", categoryID:8},
     {name:"Kaisermelange", description:"Although it is nowadays rarely found in Viennese coffee houses, Kaisermelange is often listed as a unique Viennese specialty. It consists of a pulled espresso that is mixed with a raw egg yolk. The beverage is usually sweetened with honey and fortified with Cognac, other types of brandy, or rum.", price:4,image: "/images/shop/Austrian/Kaisermelange.jpg", categoryID:8},

    ]);
    this.res.redirect("populate");
  
    }
  

};

