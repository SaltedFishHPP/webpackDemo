module.exports = {
    // 此目录为根目录，不再向上查找配置。
    root: true,
    // 解析器类型
    // espima(默认), babel-eslint, @typescript-eslint/parse……
    parser: 'vue-eslint-parser',
    // 解析器配置参数
    parseOptions: {
        // 代码类型：script(默认), module 
        // 代码是 ECMAScript 模块
        sourceType: "module",
        // es 版本号，默认为 5，也可以是用年份，比如 2015 (同 6)
        ecamVersion: 6,
        // es 特性配置
        ecmaFeatures: {
            globalReturn: true, // 允许在全局作用域下使用 return 语句
            impliedStrict: true, // 启用全局 strict mode 
            jsx: true // 启用 JSX
        },
    },
    // 允许可以使用的全局变量 -- 一个个定义过于繁琐，解决为使用 env代替
    // globals:{
    //     "document": true,
    //     "localStorage": true,
    //     "window": true,
    //     "require": true,
    //     "module": true,
    //     "process": true,
    //     "__dirname": true,
    //     "vue": true,
    //     "require": true
    // },
    // 环境定义一组全局变量的预设,本项目为浏览器环境
    env: {
        browser: true,
        es6: true,
        node: true
    },
    // 扩展，直接使用别人已经写好的 lint 规则
    extends: ['standard','plugin:vue/recommended'],
    extends: [
        "eslint:recommended", // ESLint 官方的扩展，一共有两个：eslint:recommended 、eslint:all
        "plugin:vue/recommended", // 插件类型，也可以直接在 plugins 属性中进行设置，规则：`plugin:${pluginName}/${configName}`
        "eslint-config-standard", // npm 包扩展,必须以 eslint-config- 开头，使用时可以省略这个头,如写成：standard
    ],
    // 插件
    // plugins: [
    //     "vue", // eslint-plugin-vue
    // ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
 "no-console":[{ "allow": ["warn", "error"] }]
    }
};