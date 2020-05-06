const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractCSS = require('extract-text-webpack-plugin');

const MODE = process.env.WEBPACK_ENV || 'development';
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js'); // 빌드할 파일 지정
const OUTPUT_DIR = path.join(__dirname, 'static'); // 빌드된 파일의 위치 지정

const config = {
  entry: ['@babel/polyfill', ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'babel-loader', // js 파일로 번들링 하기 위해 사용할 loader 정의
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          {
            loader: 'css-loader', // 변환된 css를 webpack이 이해 가능한 css 파일 형태로 만들어주는 loader
          },
          {
            loader: 'postcss-loader', // 변환된 css를 크로스브라우징된 css로 변환해주는 loader
            options: {
              plugins() {
                return [autoprefixer({ browsers: 'cover 99.5%' })];
              },
            },
          },
          {
            loader: 'sass-loader', // sass 문법을 css 문법으로 변환해주는 loader
          },
        ]),
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js', // 빌드될 js 파일명 정의
  },
  plugins: [new ExtractCSS('styles.css')], // 빌드될 css 파일명 정의
};

module.exports = config;
