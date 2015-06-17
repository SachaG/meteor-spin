Package.describe({
  name: 'sacha:spin',
  summary: 'Simple spinner package for Meteor',
  version: '2.0.1' + '_1',
  git: 'https://github.com/sachag/meteor-spin'
});

Npm.depends({
  "spin.js": "2.3.1"
});

Package.onUse(function (api, where) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.use([
    'templating',
    'underscore'
  ], 'client');

  api.addFiles([
    '.npm/package/node_modules/spin.js/spin.js',
    'lib/spinner.html',
    'lib/spinner.css',
    'lib/spinner.js'
  ], 'client');
});
