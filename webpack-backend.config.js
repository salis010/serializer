const nodeExternals = require('webpack-node-externals')
const path = require("path")

const env = process.env.NODE_ENV

module.exports = {
    entry: "./backend/server.ts",
    output: {
        path: path.resolve(__dirname, "dist-backend"),
        filename: "backend_bundle.js"
    },
    target: "node",
    node: {
        __dirname: true,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig-backend.json"
                    }
                }]
            },
        ]
    },
    mode: env || 'development',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternals()]
}
