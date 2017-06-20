// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint', //解析器，这里我们使用babel-eslint
  parserOptions: {
    sourceType: 'module'    //类型为module，因为代码使用了使用了ECMAScript模块
  },
  env: {//预定义的全局变量，这里是浏览器环境
    browser: true,
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'vue',//扩展，可以通过字符串或者一个数组来扩展规则
  // required to lint *.vue files
  plugins: [
    'html',//插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
    'flow-vars'
  ],
  // add your custom rules here
  'rules': {
    // 缩进为4个空格（默认值）
    "indent": 2,

    // 缩进为2个空格
    "indent": [2, 4],

    // 缩进为1个tab键
    "indent": [2, "tab"],

    // 缩进为2个空格，
    // 同时，switch...case结构的case也必须缩进，默认是不打开的
    "indent": [2, 4, {"SwitchCase": 2}],

    //不允许声明了变量，却不使用
    "no-unused-vars": [2, {"vars": "local", "args": "after-used"}],

    // allow paren-less arrow functions
    'arrow-parens': 0,

    // allow async-await
    'generator-star-spacing': 0,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
