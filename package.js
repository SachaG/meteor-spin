Package.describe({
  summary: "Simple spinner package for Meteor"
});

Package.on_use(function (api, where) {
  api.use('handlebars', 'client');

  api.add_files(['lib/spin.js', 'lib/spin.html'], 'client');
});