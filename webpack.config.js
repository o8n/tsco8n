const path = require('path');
module.exports = {
    entry: {
        bundle: './src/app.ts'
    },  
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
        contentBase: path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}