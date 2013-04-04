Package.describe({
  summary: "Simple spinner package for Meteor"
});

Package.on_use(function (api, where) {
  api.use('handlebars', 'client');
  
  api.add_files(['spin.js', 'spin.html', 'spin_controller.js'], 'client');
});