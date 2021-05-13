module.exports = {

  
    description: 'shipping',

    inputs: {
        Add_address:{
            required:true,
            type:'string',
        }
    },
    fn: async function ({Add_address}) {
        var a = this.req.session.order.id
        var order = await Orders.update().set({address : Add_address}).where({'id': a}).fetch()
        var address=order[0].address
       return this.res.view('pages/payment/payment',{address})
    }
  
  };