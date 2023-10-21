import path from "path"
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from "webpack"


interface WebpackConfig extends webpack.Configuration {
    devServer: {
        static: object,
        port: number,
        open: boolean
    }
}
const config: WebpackConfig = {


    mode: "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
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
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new webpack.ProgressPlugin(),
        
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        static: { directory: path.join(__dirname, "build")},
        port: 3000,
        open: true
    }
}

export default config