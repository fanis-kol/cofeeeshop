module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/demo/homepage'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },

  },


  fn: async function () {
    //checks if super admin redirects to super admin home
    if (this.req.me?.isSuperAdmin==true) {
      throw {redirect:'/admin/adminwelcome'};
    }else{
      if(this.req.me){
        throw {redirect:'/demo/homepage'};
      }
    }

    return {};

  }


};
