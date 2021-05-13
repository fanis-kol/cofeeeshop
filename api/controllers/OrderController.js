module.exports = {
    delete: async function(req, res) {
        const hiddenId = req.body.hidden_id;
        await OrderDetails.destroy({ordersID:hiddenId});
        await Orders.destroy({id:hiddenId});
        req.session.success = `Order Number ${hiddenId} successfully deleted.`
        res.redirect('/admin/order/manage');
    }
}