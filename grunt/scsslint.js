// Lint our SCSS
module.exports = {
    "all": {
        "src": [
            "src/components/**/*.scss",
            "src/settings/**/*.scss",
            "src/tools/**/*.scss",
            "src/utilities/**/*.scss"
        ]
    },
    "options": {
       "config": ".scss-lint.yml",
       "force": false
    }
};
