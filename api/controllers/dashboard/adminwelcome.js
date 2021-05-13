module.exports = {


    friendlyName: 'View adminwelcome page',
  
  
    description: 'Display the dashboard "adminwelcome" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/admin/adminwelcome',
        description: 'Display the welcome page for admins'
      },
  
    },
  
  
    fn: async function () {
  
      return {layout:"layouts/admin-layout"};
  
    }
  
  
  };
  