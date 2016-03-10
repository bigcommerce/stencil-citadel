// Compile the sass
module.exports = {
    'options': {
        'sourceMap': true
    },
    'dist': {
        'files': {
            './docs/css/docs.css': './hologram/doc_assets/docs_sass/docs.scss'
        }
    }
};
