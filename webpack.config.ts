import path from "path"
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from "webpack"

const config: webpack.Configuration = {


    mode: "production",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean: true

    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new webpack.ProgressPlugin()
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}

export default config