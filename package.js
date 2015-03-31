Package.describe({
  name: 'ahmetcetin:autoform-tags',
  summary: 'Tags input for aldeed:autoform',
  version: '0.1.2',
  git: 'https://github.com/ahmetcetin/meteor-autoform-tags'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.use([
  	'templating',
  	'coffeescript',
  	'aldeed:autoform@4.0.0 || 5.0.0'
  ], 'client');

  api.addFiles([
  	'lib/client/autoform-tags.html',
    'lib/client/bootstrap-tagsinput.css',
    'lib/client/autoform-tags.css',
    'lib/client/autoform-tags.coffee',
    'lib/client/bootstrap-tagsinput.min.js'
  ], 'client');
});
