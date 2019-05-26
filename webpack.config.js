var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin插件的,
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry:path.join(__dirname,'./src/main.js'),//入口文件配置
  output:{
    path:path.join(__dirname,'./dist'),//输出路径
    filename:'bundle.js',//指定输出文件名称
  },
  plugins:[//webpack插件配置节点
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
      filename:'index.html',//指定内存生成文件名称
    }),
    new BundleAnalyzerPlugin(),//树状检查打包文件来源包大小
    new VueLoaderPlugin(),
  ],
  module:{//加载各种文件的 第三方模块loader
    rules:[//第三方模块 文件匹配规则
      { test:/\.css$/,use:['style-loader','css-loader'] },//css文件匹配规则
      //解析高级ES6语法的第三方模块，需要exclude剔除掉nodemodes，否则很卡
      { test:/\.js$/,use:'babel-loader',exclude:/node_modules/ },
      { test:/\.vue$/,use:'vue-loader' },//处理 .vue 文件的loader
      { test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},//scss
      { test:/\.(jpg|png|gif|bmp|jpeg|svg)$/,use:'url-loader?limit=1000&name=[hash:8]-[name].[ext]' },///\.(jpg|png|gif|bmp|jpeg)$/ 匹配多种扩展名

    ],
  },

  resolve:{
    alias:{//修改Vue被导入时候的包的路径
      "vue$":"vue/dist/vue.js"
    }
  },
  //============缩小项目大小部分
  mode:'development',//开发模式
  // mode:'production',//生产模式
  externals:{
    "vue":"Vue",
    "vuex":"Vuex",
  },
}