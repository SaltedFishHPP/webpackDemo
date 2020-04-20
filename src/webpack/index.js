import printMe from './print.js';
import './styles.css';
import _ from 'lodash'
import { cube } from './math.js';
function getComponent() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');
    
    button.innerHTML = 'Click me and look at the console!';

    element.innerHTML = _.join(['Hello', 'webpack'], cube());
    element.appendChild(br);
    element.appendChild(button);
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;

        print();
    });

    return element;

}


var domShow = getComponent(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(domShow);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('热模块的内容');
        document.body.removeChild(domShow);
        domShow = getComponent(); // 重新渲染页面后，getComponent 更新 click 事件处理
        document.body.appendChild(domShow);
    })
}
