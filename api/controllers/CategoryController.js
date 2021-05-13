/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    const categoryName = req.body.Add_name;
    const desc = req.body.Add_description;

    await Categories.create({
      Name: categoryName,
      Description: desc,
    });

    //put a success message in session
    req.session.success = `Category ${categoryName} succesfully created.`;

    res.redirect("/admin/category/manage");
  },
  delete: async function (req, res) {
     const categoryName = req.body.Delete_name;
     const desc = req.body.Delete_description;

    await Categories.destroy({
      Name: categoryName,
      Description: desc,
    });

    //put a success message in session
    req.session.success = `Category ${categoryName} succesfully deleted.`;

    res.redirect("/admin/category/manage");
  },
  edit: async function (req, res) {
    const categoryName = req.body.Edit_name;
    const categoryNameHidden = req.body.Edit_name_hidden;
    const desc = req.body.Edit_description;
    const descHidden = req.body.Edit_description_hidden;

    await Categories.updateOne({
      Name: categoryNameHidden,
      Description: descHidden,
    }).set({
      Name: categoryName,
      Description: desc,
    });

    //put a success message in session
    req.session.success = `Category ${categoryNameHidden} succesfully edited.`;

    res.redirect("/admin/category/manage");
  },
};
