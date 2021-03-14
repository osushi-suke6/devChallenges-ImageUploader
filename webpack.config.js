const path = require('path');

const ENV = 'development'

module.exports = {
    mode: ENV,
    entry: './dist/client/index.js',
    output: {
        path: path.join(__dirname, 'public/static/js'),
        filename: 'bundle.js',
    }
}