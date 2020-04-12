import _ from 'lodash';
function component() {
    var element = document.createElement('div');

    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look  dee  at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    return element;
}
document.body.appendChild(component());
