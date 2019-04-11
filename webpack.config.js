const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [

        ]
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".js", "*"]
    }
};


