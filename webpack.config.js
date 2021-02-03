const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode:"development",
    devtool:"sourcemap",
    entry:"./public/index.js",  //entry:入口文件
    output: {
        path: __dirname + "/common", // 打包后的文件存放的地方
        filename: "index.js" // 打包后输出文件的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./public/index.html" //可以指定模板html，也可以使用默认的
        }),
        new CleanWebpackPlugin(),
    ]
}