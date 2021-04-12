const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
    main: './src/main.js',
  },
  output: {
    filename: '[hash].js', // バンドル結果のファイル名を設定
    path: path.resolve(__dirname, '../build'), // 出力先のディレクトリを変更
  },
};