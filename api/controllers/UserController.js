/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const User = require("../models/User");

module.exports = {
  create: async function (req, res) {
    const userName = req.body.Add_fullname;
    const userPassword = req.body.Add_password;
    const userEmail = await req.body.Add_email;
    const userAdmin = req.body.Add_admin;
    const userCustomer = req.body.Add_customer;
    const userBillingCard = req.body.Add_billing_card;
    const users2 = await User.findOne({ emailAddress: userEmail });
    console.log("users2:", users2);
    console.log("users2.emailAddress:", users2.emailAddress);
    if (!users2) {
      await User.create({
        fullName: userName,
        password: sails.helpers.passwords.hashPassword(userPassword),
        emailAddress: userEmail,
        isSuperAdmin: userAdmin,
        isCustomer: userCustomer,
        hasBillingCard: userBillingCard,
      });
      req.session.success = `Account ${userName} succesfully created.`;
    } else {
      req.session.success = `Account ${userName} has an email that already exists in the database.`;
    }

    res.redirect("/admin/users/manage");
  },
  delete: async function (req, res) {
    const userName = req.body.Delete_fullname;
    const userEmail = req.body.Delete_email;
    const userAdminHidden = req.body.Delete_admin_hidden;
    const userCustomerHidden = req.body.Delete_customer_hidden;
    const userBillingCardHidden = req.body.Delete_billing_card_hidden;

    await User.destroy({
      fullName: userName,
      emailAddress: userEmail,
      isSuperAdmin: userAdminHidden,
      isCustomer: userCustomerHidden,
      hasBillingCard: userBillingCardHidden,
    });

    //put a success message in session
    req.session.success = `User ${userName} succesfully deleted.`;

    res.redirect("/admin/users/manage");
  },
  edit: async function (req, res) {
    const userName = req.body.Edit_fullname;
    const userNameHidden = req.body.Edit_fullname_hidden;
    const userEmail = req.body.Edit_email;
    const userEmailHidden = req.body.Edit_email_hidden;
    // const users2 = await User.findOne({ emailAddress: userEmail });
    // console.log(users2.emailAddress);
    let userAdmin = req.body.Edit_admin;
    console.log("UserAdmin:", userAdmin);
    if (userAdmin === undefined) {
      userAdmin = false;
    }
    const userAdminHidden = req.body.Edit_admin_hidden;
    console.log("UserAdminHidden:", userAdminHidden);
    let userCustomer = req.body.Edit_customer;
    if (userCustomer === undefined) {
      userCustomer = false;
    }
    const userCustomerHidden = req.body.Edit_customer_hidden;
    let userBillingCard = req.body.Edit_billing_card;
    if (userBillingCard === undefined) {
      userBillingCard = false;
    }
    const userBillingCardHidden = req.body.Edit_billing_card_hidden;
    // if (!users2) {
    await User.updateOne({
      fullName: userNameHidden,
      emailAddress: userEmailHidden,
      isSuperAdmin: userAdminHidden,
      isCustomer: userCustomerHidden,
      hasBillingCard: userBillingCardHidden,
    }).set({
      fullName: userName,
      emailAddress: userEmail,
      isSuperAdmin: userAdmin,
      isCustomer: userCustomer,
      hasBillingCard: userBillingCard,
    });

    //put a success message in session
    req.session.success = `User ${userNameHidden} succesfully edited.`;
    // } else {
    //   req.session.success = "Email already exists in the database.";
    // }

    res.redirect("/admin/users/manage");
  },
};