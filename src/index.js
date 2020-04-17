import _ from 'lodash';
import printMe from './print.js';
<<<<<<< HEAD
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!!!!!!';
=======
import './styles.css';
import { cube } from './math.js';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console';
>>>>>>> a5809de6f160272521c6d7db49db46b813e9b664
    btn.onclick = printMe;

    element.appendChild(btn);

<<<<<<< HEAD
    return element;
  }
  
  // document.body.appendChild(component());
  let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      //  printMe();
      document.body.removeChild(element);
      element = component(); // 重新渲染页面后，component 更新 click 事件处理
      document.body.appendChild(element);
   })
 }
=======

    var element2 = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');


    return element2;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('热模块的内容');
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}
>>>>>>> a5809de6f160272521c6d7db49db46b813e9b664
