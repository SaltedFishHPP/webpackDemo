module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        // 启用推荐的规则 --- http://eslint.cn/docs/rules/
        "eslint:recommended",
        "plugin:vue/essential",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // 允许可以使用的全局变量
    "globals":{
        "document": true,
        "localStorage": true,
        "window": true,
        "require": true,
        "module": true,
        "process": true,
        "__dirname": true,
        "vue": true,
        "require": true
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // "quotes": ["error", "double"],
        "no-unused-vars": [2, { 
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none" 
        }],
        // 关闭语句强制分号结尾
        "semi": [0],
        // 一定要使用分号
        // "semi": ["error", "always"],
        //空行最多不能超过2行
        // "no-multiple-empty-lines": [{ "max": 2 } ],
        // "no-console":[{ "allow": ["warn", "error"] }]
    }
};