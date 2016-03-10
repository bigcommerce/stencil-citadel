module.exports = function(grunt) {
    return {
        'build': {
            'files': [
                {
                    'expand': true,
                    'cwd': 'src/vendor/bower_components/foundation/scss',
                    'src': '**',
                    'dest': 'src/vendor/foundation'
                }
            ]
        },
        'release': {
            'files': [
                {
                    'expand': true,
                    'cwd': 'src',
                    'src': ['**/*',  '!**/vendor/bower_components/**'],
                    'dest': 'dist'
                }
            ]
        }
    };
};
