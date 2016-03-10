// Browsersync task
module.exports = {
    'dev': {
        'bsFiles': {
            'src' : [
                'docs/css/**/*.css',
                'docs/*.html',

            ]
        },
        'options': {
            'watchTask': true,
            'server': './docs',
            'port': 4002
        }
    }
};
