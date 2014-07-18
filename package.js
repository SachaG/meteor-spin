Package.describe({
  summary: "Simple spinner package for Meteor"
});

Npm.depends({
  "spin.js": "2.0.1"
});

Package.on_use(function (api, where) {
  api.use([
    'templating',
    'underscore'
  ], 'client');

  api.add_files([
    '.npm/package/node_modules/spin.js/spin.js',
    'lib/spinner.html',
    'lib/spinner.css',
    'lib/spinner.js'
  ], 'client');
});
