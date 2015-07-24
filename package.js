Package.describe({
  name: 'loftsteinn:autoform-tags',
  summary: 'Tags input for aldeed:autoform',
  version: '0.2.0',
  git: 'https://github.com/oskarszoon/meteor-autoform-tags'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.use([
  	'templating',
  	'aldeed:autoform@4.0.0 || 5.0.0'
  ], 'client');

  api.addFiles([
  	'lib/client/autoform-tags.html',
    'lib/client/bootstrap-tagsinput.css',
    'lib/client/autoform-tags.css',
    'lib/client/autoform-tags.js',
    'lib/client/bootstrap-tagsinput.min.js'
  ], 'client');
});
