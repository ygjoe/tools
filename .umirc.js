// ref: https://umijs.org/config/
const projectName = 'adtop';
const env = process.env.API_HOST;
const publicPath = {
  dev: `/${projectName}/`,
  pre: `//shuocdn.108sq.cn/frontEnd/pre/mobile/${projectName}/`,
  prod: `//shuocdn.108sq.cn/frontEnd/prod/mobile/${projectName}/`,
};
const px2rem = require('postcss-plugin-px2rem');
export default {
  publicPath: '/',
  history: 'hash',
  hash: true,
  outputPath: './docs/',
  /*global projectName:false REM:false*/
  'define': {
    'REM': 75,  // 修改 px2rem的rootValue请一同修改此处，部分backgroundImage使用style内联写法。
  },
  extraPostCSSPlugins: [px2rem({ rootValue: 75, exclude: 'antd-mobile' })],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
};
