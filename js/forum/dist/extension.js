'use strict';

System.register('extum/flarum-ext-material/main', ['flarum/app', 'flarum/extend', 'flarum/components/Page'], function (_export, _context) {
    "use strict";

    var app, extend, Page;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {

            app.initializers.add('extum/flarum-ext-material', function () {
                extend(Page.prototype, 'init', function () {
                    /*$('head').prepend('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">' +
                        'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css' +
                        'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js' + 
                        '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/styles.css">' +
                        '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/baseline.css">' +
                        '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/sharp.css">' +    
                        '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/outline.css">' +  
                        '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/round.css">' +       
                        '<link rel="stylesheet" href="https://storage.googleapis.com/non-spec-apps/mio-icons/latest/twotone.css">' +      
                        '<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>');*/
                });
            });
        }
    };
});