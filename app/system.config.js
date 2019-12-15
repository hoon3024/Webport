
System.config({
    defaultJSExtensions: true
    , map: {
              'app':'./app',
        'js': '/libs/js',
        'style': '/libs/css',
     
        'text': '/libs/plugins/text',
        'babel': '/libs/js/babel-core',
        'css': '/libs/plugins/css',
        'components': '/app/components',
     
        'routes': '/app/routes',
    

    },

    transpiler: 'babel'
    , meta: {
        'js/*.js': {
            format: 'global'
        }

    }
});

System.import('/app/index.js');