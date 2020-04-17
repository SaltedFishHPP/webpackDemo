import printMe from './print.js';
import './styles.css';
import { cube } from './math.js';
function getComponent() {
    var element1 = document.createElement('div');
    var btn = document.createElement('button');

    element1.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element1.appendChild(btn);


    var element2 = document.createElement('pre');
    element2.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');


    // return element2;


    // 注释中使用了 webpackChunkName。使 bundle 被命名为 lodash.bundle.js
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    
    }).catch(error => 'An error occurred while loading the component');

    // 简化上面代码
    // var element = document.createElement('div');
    // const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // return element;

}

getComponent().then(component => {
    document.body.appendChild(component);
})

// var domShow = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(domShow);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('热模块的内容');
        document.body.removeChild(domShow);
        domShow = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(domShow);
    })
}
