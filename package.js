Package.describe({
  name: 'samcorcos:gathering-storm-core',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.11');
  api.use('ecmascript');
  api.addFiles('gathering-storm-core.js');
});
