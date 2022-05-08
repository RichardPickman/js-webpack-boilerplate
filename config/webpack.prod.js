const common = require('./common.webpack.js');
const paths = require('./paths.webpack.js');

const { commonModules, commonPlugins, commonResolve } = common;

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
    },
    output: {
        path: paths.build,
        filename: '[name].[hash].js',
        assetModuleFilename: '[file]',
        clean: true,
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8280,
    },
    module: {
        ...commonModules
    },
    plugins: [
        ...commonPlugins
    ],
    resolve: [
        ...commonResolve
    ],
}
