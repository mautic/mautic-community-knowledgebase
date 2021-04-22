const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => ({
    entry: {
        admin: './app/main.js'
    },
    devtool: argv.mode === 'production' ? false : 'eval-source-map',
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: '[name].min.js',
        chunkFilename: 'vendor.min,js',
        library: 'Grav'
    },
    optimization: {
        minimize: argv.mode === 'disabled-production',
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 1,
                    name: 'vendor',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    },
    externals: {
        jquery: 'jQuery',
        'grav-config': 'GravAdmin'
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.json$/, loader: 'json-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        ]
    }
});
