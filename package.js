Package.describe({
  summary: "Simple spinner package for Meteor"
});

Package.on_use(function (api, where) {
  api.use(['templating'], 'client');
  
  
  api.add_files([
    'lib/spin.js', 
    'lib/spinner.html', 
    'lib/spinner.js'], 'client');
});