/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const { manageCategories } = require("./PageController");

module.exports = {
  
    create: async function(req, res) {

        const productName = req.body.Add_name;
        const price = req.body.Add_price;
        const image = req.body.Add_image;
        const desc = req.body.Add_description;
        const category = req.body.Add_category;
        const categoryId = await Categories.findOne({
            Name: category
        })
        await Coffees.create({
            name: productName,
            price: price,
            image: image,
            description: desc,
            categoryID: categoryId.id,
        })

        //put a success message in session
        req.session.success = `Coffee ${productName} successfully added.`

        res.redirect('/admin/products/manage');
        
    },

    delete: async function(req, res) {
        const productName = req.body.Delete_name;
        await Coffees.destroy({name:productName})
        //put a success message in session
        req.session.success = `Coffee ${productName} successfully deleted.`
        res.redirect('/admin/products/manage');
    },
    edit: async function (req,res){
        const productName = req.body.Edit_name;
        console.log(productName);
        const productNameHidden = req.body.Edit_name_hidden;
        console.log(productNameHidden);
        const price = req.body.Edit_price;
        console.log(price);
        const priceHidden = req.body.Edit_price_hidden;
        console.log(priceHidden);
        const image = req.body.Edit_image;
        console.log(image);
        const imageHidden = req.body.Edit_image_hidden;
        console.log(imageHidden);
        const desc = req.body.Edit_description;
        console.log(desc);
        const descHidden = req.body.Edit_description_hidden;
        console.log(descHidden);
        const category = req.body.Edit_category;
        console.log(category);
        const categoryHidden = req.body.Edit_category_hidden;
        console.log(categoryHidden);
        const categoryId = await Categories.findOne({
            Name: category
        });
        const categoryIdHidden = await Categories.findOne({
            Name: categoryHidden
        });
        console.log(categoryIdHidden.id);
        console.log(categoryId.id);
        await Coffees.updateOne({
            name: productNameHidden,
            price: priceHidden,
            image: imageHidden,
            description: descHidden,
            categoryID: categoryIdHidden.id,
        }).set({
            name: productName,
            price: price,
            image: image,
            description: desc,
            categoryID: categoryId.id,
        });
        //put a success message in session
        req.session.success = `Coffee ${productNameHidden} successfully edited.`

        res.redirect('/admin/products/manage');
    }

};

